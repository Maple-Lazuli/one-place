import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import './toolbar.css';
import CodeSnippetsOverlay from '../codeSnippets/CodeSnippetsOverlay';
import FileSpaceOverlay from '../fileSpace/FileSpaceOverlay';
import WritingOverlay from '../writings/WritingOverlay'
class ToolBar extends React.Component {

    state = {
        overlayActive: "None",
        snippetsOverlay: "None",
        filesOverlay: "None",
        writingOverlay: "None"
    }

    toggleSnippetsOverlay = () => {
        if (this.state.snippetsOverlay === "None") {
            this.setState({ snippetsOverlay: "", overlayActive: "" })
        } else {
            this.setState({ filesOverlay: "None", snippetsOverlay: "None", overlayActive: "None", writingOverlay: "None" })
        }
    }

    toggleFilesOverlay = () => {
        if (this.state.filesOverlay === "None") {
            this.setState({ filesOverlay: "", overlayActive: "" })
        } else {
            this.setState({ filesOverlay: "None", snippetsOverlay: "None", overlayActive: "None", writingOverlay: "None" })
        }
    }

    toggleWritingsOverlay = () => {
        if (this.state.writingOverlay === "None") {
            this.setState({ writingOverlay: "", overlayActive: "" })
        } else {
            this.setState({ filesOverlay: "None", snippetsOverlay: "None", overlayActive: "None", writingOverlay: "None" })
        }
    }

    render() {
        return (
            <div style={{ backgroundColor: 'gold' }}>
                <div className="ui secondary menu" style={{ margin: "2px", zIndex: 10099, height:'2vh' }}>
                    <a className="item" onClick={this.toggleSnippetsOverlay} >
                        Code Snippets
                    </a>
                    <a className="item" onClick={this.toggleFilesOverlay}>
                        File Storage
                    </a>
                    {/* <a className="item" onClick={this.toggleWritingsOverlay}>
                        Write
                    </a>
                    <a href={"http://"+window.location.hostname+":3002"}  className="item">
                        Review
                    </a> */}
                    <div className="right menu">
                        <div className='item'>
                            <b>
                            {this.props.currentProject['title']} - {this.props.currentPage['title']}
                            </b>

                        </div>
                    </div>
                </div>
                <div className="overlayshader" style={{ display: this.state.overlayActive }}>
                    <div className='overlay snippets' style={{ display: this.state.snippetsOverlay }}>
                        <CodeSnippetsOverlay currentPage={this.props.currentPage} refreshPage={this.props.refreshPage} />
                    </div>
                    <div className='overlay files' style={{ display: this.state.filesOverlay }}>
                        <FileSpaceOverlay currentProject={this.props.currentProject} refreshProject={this.props.refreshProject} />
                    </div>

                    <div className='overlay writings' style={{ display: this.state.writingOverlay }}>
                        <WritingOverlay currentPage={this.props.currentPage} refreshPage={this.props.refreshPage} />
                    </div>


                </div>
            </div>
        )
    }
}

export default ToolBar;