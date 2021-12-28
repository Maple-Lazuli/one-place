import React from 'react';
import ReactDom from 'react-dom';
import ReactMarkdown from 'react-markdown';
import 'semantic-ui-css/semantic.min.css';
import Backend from '../../api/backend';
import './PageContent.css'

class PageContent extends React.Component {


    state = {
        divContent: "",
        updateTime: 0,
        textAreaDisplay: "",
        markdownDisplay: "None"
    }
    componentDidMount() {
        //get the latest updates when the page renders
        this.timers()
    }

    sendChanges = async () => {
        //Sends update request to the server containing the timestamp and update
        const response = await Backend.post(
            '/updates', {
            data: {
                divContent: this.state.divContent,
                time: this.state.updateTime
            }
        });
    }

    updateDivContent = () => {
        // Determine if an update needs to be sent to the server
        let current_content = document.getElementById('mainContentTextArea').value
        if (this.state.divContent !== current_content) {
            this.setState({ divContent: current_content, updateTime: Date.now() }, () => {
                this.sendChanges()
            })
        }
    }

    timers = () => {
        //manages timers to prevent out of control renders
        this.pullDivContent()
        this.updateDivContent()

        setTimeout(this.timers, 250)
    }

    pullDivContent = async () => {
        //Query Server For updates
        const response = await Backend.get(
            '/updates', {
            params: {}
        });
        if (this.state.updateTime < response.data.updateTime) {
            this.setState({ divContent: response.data.content, updateTime: response.data.updateTime }, () => {
                document.getElementById("mainContentTextArea").value = response.data.content
            })
        }
        if (response.status !== 200) {
        }
    }

    toggleTextAreaMarkdown = () => {
        if (this.state.textAreaDisplay === "None") {
            this.setState({ textAreaDisplay: "", markdownDisplay: "None" })
        } else {
            this.setState({ textAreaDisplay: "None", markdownDisplay: "" }, () => {
            })
        }

    }

    render() {

        return (
            <div className="pusher" onDoubleClick={this.toggleTextAreaMarkdown}>
                <div className="ui fluid icon input" style={{ height: "100vh" }}>
                    <textarea type="text" style={{ display: this.state.textAreaDisplay }} id="mainContentTextArea" />
                    <div style={{ display: this.state.markdownDisplay, overflowY: "scroll", all: "none" }} id="markdownArea">
                        <ReactMarkdown
                            children={this.state.divContent}
                        />
                    </div>
                </div>
            </div >
        )
    }
}

export default PageContent;


