import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import '../projects/ProjectOverlay.css'
import Backend from "../../api/backend"
class RestoreOverlay extends React.Component {

    state = {
        filefile: ""
    }

    preventDefaultAction = (e) => {
        e.preventDefault();
    }

    sendNewFile = async (e) => {
        e.preventDefault();
        var formData = new FormData();
        formData.append('file', this.state.filefile);
        const response = await Backend.post(
            '/restore', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
        window.location.reload()
    }


    updateFile = (e) => {
        this.setState({ filefile: e.target.files[0] })
    }
    render() {
        return (
            <div className="shader" style={{ display: this.props.overlay }}>
                <div className="projectholder">

                    <form className="ui form" onSubmit={this.preventDefaultAction}>
                        <div className="field">
                            <label>File</label>
                            <input type="file" id="file-file" name="filename" onChange={this.updateFile} />
                        </div>
                        <button className="ui button" type="submit" onClick={this.sendNewFile}>Submit</button>
                    </form>
                </div>
            </div >
        )
    }
}

export default RestoreOverlay;