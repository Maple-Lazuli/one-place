import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import CodeSnippetsOverlay from '../codeSnippets/CodeSnippetsOverlay';
import '../codeSnippets/codeSnippets.css';
class ToolBar extends React.Component {

    state = {
        overlayActive: "None",
        snippetsOverlay: "None"
    }

    toggleSnippetsOverlay = () => {
        if (this.state.snippetsOverlay === "None") {
            this.setState({ snippetsOverlay: "", overlayActive: "" })
        } else {
            this.setState({ snippetsOverlay: "None", overlayActive: "None" })
        }
    }

    render() {
        return (
            <div style={{ backgroundColor: 'gold' }}>
                <div className="ui secondary menu" style={{ margin: "2px", zIndex: 10099 }}>
                    <a className="item" onClick={this.toggleSnippetsOverlay} >
                        Code Snippets
                    </a>
                    <a className="item">
                        Translations
                    </a>
                    <a className="item">
                        Whiteboard
                    </a>
                    <a className="item">
                        Reference Links
                    </a>
                    <a className="item">
                        File Storage
                    </a>
                    <a className="item">
                        REVIEW
                    </a>
                </div>
                <div className="overlayshader" style={{ display: this.state.overlayActive }}>
                    {/* Background color */}
                    <div className='overlay snippets' style={{ display: this.state.snippetsOverlay }}>
                        <CodeSnippetsOverlay currentPage={this.props.currentPage} refreshPage={this.props.refreshPage} />
                    </div>
                    {/* file storage
                    <div className='snippetsOverlay' style={{ display: this.state.snippetsOverlay }}>
                        <CodeSnippetsOverlay></CodeSnippetsOverlay>
                    </div> */}



                </div>

            </div>
        )
    }
}

export default ToolBar;