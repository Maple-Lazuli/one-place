import React from 'react';
import ReactDom from 'react-dom';
import { hashRandom } from 'react-hash-string';
import ReactMarkdown from 'react-markdown';
import 'semantic-ui-css/semantic.min.css';
import Backend from '../../api/backend';
import './PageContent.css'
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'

import 'katex/dist/katex.min.css' // `rehype-katex` does not import the CSS for you


class PageContent extends React.Component {


    state = {
        divContent: "",
        textAreaDisplay: "none",
        markdownDisplay: "",
        editorId: hashRandom()
    }
    componentDidMount() {
        //get the latest updates when the page renders
        this.timers()
    }

    sendChanges = async () => {
        //Sends update request to the server containing the timestamp and update
        if (this.props.currentPage['id'] !== "None") {
            const response = await Backend.post(
                '/updates', {
                data: {
                    divContent: this.state.divContent,
                    time: this.props.lastUpdate,
                    parentID: this.props.currentProject['id'],
                    pageID: this.props.currentPage['id'],
                    editor: this.state.editorId
                }
            });
        }
    }

    updateDivContent = () => {
        // Determine if an update needs to be sent to the server
        let current_content = document.getElementById('mainContentTextArea').value
        if (this.state.divContent !== current_content) {
            this.props.updatePageTime(Date.now())
            this.setState({ divContent: current_content }, () => {
                this.sendChanges()
            })
        }
    }

    timers = () => {
        //manages timers to prevent out of control renders
        this.pullDivContent()
        this.updateDivContent()

        setTimeout(this.timers, 2000)
    }

    pullDivContent = async () => {
        //Query Server For updates
        if (this.props.currentPage['id'] !== "None"){
            const response = await Backend.get(
                '/updates', {
                params: {
                    parentID: this.props.currentProject['id'],
                    pageID: this.props.currentPage['id']
                }
            });
            if ((this.props.lastUpdate <= response.data.updateTime) && (response.data.editor != this.state.editorId)) {
                this.props.updatePageTime(response.data.updateTime)
                this.setState({ divContent: response.data.content }, () => {
                    document.getElementById("mainContentTextArea").value = response.data.content
                })
            }
            if (response.status !== 200) {
            }
        }
    }

    toggleTextAreaMarkdown = () => {
        if (this.state.textAreaDisplay === "None") {
            this.setState({ textAreaDisplay: "", markdownDisplay: "None" })
        } else {
            this.setState({ textAreaDisplay: "None", markdownDisplay: "" }, () => {
                this.updateRenderTime()
            })
        }
    }

    updateRenderTime = async() => {
        if (this.props.currentPage['id'] !== "None") {
            const response = await Backend.get(
                '/render', {
                params: {
                    pageID: this.props.currentPage['id'],
                    time: Date.now()
                }
            });
            if (response.status !== 200) {
            }
        }
    }

    uploadImage = async (e) => {
        if (e.clipboardData.files.length) {
            const fileObject = e.clipboardData.files[0];
            const file = {
                getRawFile: () => fileObject
            };
            const formData = new FormData()
            formData.append("image", file.getRawFile())
            const response = await Backend.post(
                '/images', formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                      }
            });
            const name  = window.location.hostname
            const hash = response.data.image
            const element = document.getElementById("mainContentTextArea")
            const startPos = element.selectionStart
            const endPos =  element.selectionEnd
            if (startPos || endPos == '0') {
                element.value = element.value.substring(0, startPos)
                    + "![image](http://"+ name +":3001/images?image=" + hash + ")"
                    + element.value.substring(endPos, element.value.length);
            } else {
                element.value += "![image](http://"+ name +":3001/images?image=" + hash + ")"
            }
        } 
    };


    render() {

        return (
            <div className="pusher" onDoubleClick={this.toggleTextAreaMarkdown} style={{ height: "100%", width:"100%"}}>
                <div className="ui fluid icon input" style={{ height: "100%"}}>
                    <textarea type="text" spellCheck="true" style={{ display: this.state.textAreaDisplay}} id="mainContentTextArea" onPaste={this.uploadImage} />
                    <div style={{ display: this.state.markdownDisplay, overflowY: "scroll" }} id="markdownArea">
                        <ReactMarkdown
                            children={this.state.divContent}
                            remarkPlugins={[remarkMath]}
                            rehypePlugins={[rehypeKatex]}
                        />
                    </div>
                </div>
            </div >
        )
    }
}

export default PageContent;


