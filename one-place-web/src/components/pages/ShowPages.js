import React from 'react';
import 'semantic-ui-css/semantic.min.css'
import PageCard from './PageCard'

class ShowPages extends React.Component {

    populateGrid = () => {
        let projects = [];
        for (let i = 0; i < this.props.projectList.length; i++) {
            projects.push(<PageCard key={i} projectDict={this.props.projectList[i]} updateProject={this.props.updateProject} refreshProjects = {this.props.refreshProjects}/>)
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

export default ShowPages;