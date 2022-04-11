import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import './ProjectOverlay.css'

import ShowProjects from './ShowProjects'

import Backend from "../../api/backend"
class ProjectOverlay extends React.Component {

    state = {
        createProjectDisplay: "None",
        showProjectsDisplay: "None",
        modifyProjectDisplay: "None",
        projectList: [],
        modifyIndex: -1,
        modifyProject: {
            title: "",
            category: "",
            id: "",
            purpose: ""
        }
    }

    componentDidMount() {
        this.fetchProjects()
    }

    fetchProjects = async () => {
        const response = await Backend.get(
            '/projects', {
            params: {}
        });
        this.setState({ projectList: response.data['projects'] }, () => {
            this.setState({ showProjectsDisplay: "" }, () => {
            })
        })
    }

    toggleCreateProject = () => {
        if (this.state.createProjectDisplay === 'None') {
            this.setState({ createProjectDisplay: "", showProjectsDisplay: "None", modifyProjectDisplay: "None" })
        } else {
            this.setState({ createProjectDisplay: "None" })
            this.fetchProjects()

        }
    }
    render() {
        return (
            <div className="shader" style={{ display: this.props.overlay }}>
                <div className="projectholder">
                    <div id='create-projects-div'>
                        <div className="ui grid">
                            <div className="four wide column">
                                <div className="ui label large">
                                    Projects
                                    <div className="detail">214</div>
                                </div>
                            </div>
                            <div className="four wide column">
                                <div className="ui label large">
                                    Last Updated
                                    <div className="detail">214</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id='access-projects-div'>
                        <div style={{ display: this.state.showProjectsDisplay }}>
                            <ShowProjects projectList={this.state.projectList}
                                updateProject={this.props.updateProject}
                                refreshProjects={this.fetchProjects}
                                toggleProjectsOverlay={this.props.toggleProjectsOverlay} />
                        </div>
                    </div>
                </div>
            </div >
        )
    }
}

export default ProjectOverlay;