import React from 'react';
import 'semantic-ui-css/semantic.min.css'
import ProjectCard from './ProjectCard'

class ShowProjects extends React.Component {

    populateGrid = () => {
        let projects = [];
        for (let i = 0; i < this.props.projectList.length; i++) {
            projects.push(<ProjectCard key={i}
                projectDict={this.props.projectList[i]}
                updateProject={this.props.updateProject}
                refreshProjects={this.props.refreshProjects}
                toggleProjectsOverlay={this.props.toggleProjectsOverlay} 
                index={i}
                setModify={this.props.setModify}/>)
        }
        return projects
    }

    render() {

        return (
            <div className="ui cards">
                {this.populateGrid()}
            </div>
        )
    }
}

export default ShowProjects;