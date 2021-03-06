import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import Backend from '../../api/backend'

class ProjectCard extends React.Component {

    selectProject = () => {
        this.props.updateProject(this.props.projectDict)
        this.props.toggleProjectsOverlay()
    }



    render() {
        return (
            <div className="card">
                <div className='content'>
                    <div className='header'>
                        {this.props.projectDict['title']}
                    </div>
                    <div className='meta'>
                        {this.props.projectDict['category']}
                    </div>
                    <div className='description'>
                        {this.props.projectDict['purpose']}
                    </div>
                    <div className="extra content">
                        <div className="ui three buttons">
                            <div className="ui basic green button" onClick={this.selectProject}>Open</div>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ProjectCard;