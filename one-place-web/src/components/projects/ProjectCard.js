import React from 'react';
import 'semantic-ui-css/semantic.min.css';

class ProjectCard extends React.Component {

    selectProject = () => {
        this.props.updateProject(this.props.projectDict)
    }

    render() {
        return (
            <div className="card">
                <div className='content'>
                    <div className='header'>
                        {this.props.projectDict['Title']}
                    </div>
                    <div className='meta'>
                        {this.props.projectDict['Category']}
                    </div>
                    <div className='description'>
                        {this.props.projectDict['Purpose']}
                    </div>
                    <div className="extra content">
                        <div className="ui two buttons">
                            <div className="ui basic green button" onClick={this.selectProject}>Open</div>
                            <div className="ui basic red button">Delete</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ProjectCard;