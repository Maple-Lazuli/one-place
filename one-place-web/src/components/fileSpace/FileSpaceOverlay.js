import React from 'react';
import 'semantic-ui-css/semantic.min.css';

import Backend from "../../api/backend"
import FileUpload from './FileUpload';
import FileCard from './FileCard';
class FileSpaceOverlay extends React.Component {

    state = {
        displayFiles: "",
        displayUpload: "None"
    }

    populateGrid = () => {
        let snippets = [];
        let i = 0

        // for (const [key, value] of Object.entries(this.props.currentProject['files'])) {
        //     snippets.push(<FileCard key={i++}
        //         file={value} />)
        // }
        return snippets
    }

    showUpload = () => {
        if (this.state.displayUpload === "None") {
            this.setState({
                displayFiles: "None",
                displayUpload: ""
            })
        } else {
            this.setState({
                displayFiles: "",
                displayUpload: "None"
            })
        }
    }

    render() {

        return (
            <div>
                <div>
                    <div className="ui grid">
                        <div className="eight wide column">
                            <button className="ui button small" onClick={this.showUpload}>Upload File</button>
                        </div>
                        <div className="four wide column">
                            <div className="ui label large">
                                Files
                                <div className="detail">343</div>
                            </div>
                        </div>
                        <div className="four wide column">
                            <div className="ui label large">
                                Last Upload
                                <div className="detail">316</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="ui cards" style={{ display: this.state.displayFiles }}>
                    {this.populateGrid()}
                </div>
                <div style={{ display: this.state.displayUpload }}>
                    <FileUpload currentProject={this.props.currentProject} refreshProject={this.props.refreshProject} />
                </div>
            </div>
        )
    }
}

export default FileSpaceOverlay;