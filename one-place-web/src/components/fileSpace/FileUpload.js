import React from 'react';
import 'semantic-ui-css/semantic.min.css';

import Backend from "../../api/backend"
class FileUpload extends React.Component {

    state = {
        fileTitle: "",
        fileDesc: "",
        filefile: ""
    }

    preventDefaultAction = (e) => {
        e.preventDefault();
    }

    sendNewFile = async (e) => {
        e.preventDefault();
        var formData = new FormData();
        formData.append('file', this.state.filefile);
        formData.append('title', this.state.fileTitle);
        formData.append('description', this.state.fileDesc);
        formData.append('project_id', this.props.currentProject['id']);
        formData.append('upload_date', Date.now());
        const response = await Backend.post(
            '/files', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
        this.props.refreshProject()
        this.props.showUpload()
    }

    updateTitle = () => {
        this.setState({ fileTitle: document.getElementById("file-title").value })
    }
    updateDescription = () => {
        this.setState({ fileDesc: document.getElementById("file-desc").value })
    }

    updateFile = (e) => {
        this.setState({ filefile: e.target.files[0] })
    }

    render() {
        return (
            <form className="ui form" onSubmit={this.preventDefaultAction}>
                <div className="field">
                    <label>Title</label>
                    <input type="text" id="file-title" name="file-title" placeholder="Title" onChange={this.updateTitle} />
                </div>
                <div className="field">
                    <label>Description</label>
                    <input type="text" id="file-desc" name="file-desc" placeholder="Description" onChange={this.updateDescription} />
                </div>
                <div className="field">
                    <label>File</label>
                    <input type="file" id="file-file" name="filename" onChange={this.updateFile} />
                </div>
                <button className="ui button" type="submit" onClick={this.sendNewFile}>Submit</button>
            </form>
        )
    }
}

export default FileUpload;