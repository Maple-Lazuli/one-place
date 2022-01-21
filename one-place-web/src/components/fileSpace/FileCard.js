import React from 'react';
import 'semantic-ui-css/semantic.min.css';

import Backend from "../../api/backend"
class FileCard extends React.Component {

    deleteFile = async () => {
        const response = await Backend.get(
            '/delete', {
            params: {
                "id": this.props.file['id'],
            }
        });
        this.props.refreshProject()
    }
    
    fileLink = ()=> {
        return "http://localhost:3001/files?project_id="+this.props.currentProject['id']+"&file_id="+this.props.file['id']
    }

    render() {

        return (
            <div className="card">
                <div className='content'>
                    <div className='header'>
                        {this.props.file['title']}
                    </div>
                    <div className='meta'>
                        {this.props.file['original_file_name']}
                    </div>
                    <div className='description'>
                        {this.props.file['description']}
                    </div>

                    <div className="extra content">
                        <div className="ui two buttons">
                            <a className="ui basic green button" href={this.fileLink()}>Download</a>
                            <div className="ui basic red button" onClick={this.deleteFile}>Delete</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default FileCard;