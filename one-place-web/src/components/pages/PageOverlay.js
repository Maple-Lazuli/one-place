import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import '../projects/ProjectOverlay.css'
import CreatePage from './CreatePage'
import ShowPages from './ShowPages'

import Backend from "../../api/backend"
class PagesOverlay extends React.Component {

    state = {
        createProjectDisplay: "None",
        showProjectsDisplay: "None",
        pageList: []
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
            this.setState({showProjectsDisplay: ""}, () =>{
            })
        })
    }

    toggleCreateProject = () => {
        if (this.state.createProjectDisplay === 'None') {
            this.setState({ createProjectDisplay: "", showProjectsDisplay: "None" })
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
                            <div className="eight wide column">
                                <button className="ui button small" onClick={this.toggleCreateProject}>Create Project</button>
                            </div>
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
                        <div style={{ display: this.state.createProjectDisplay }}>
                            <CreatePage toggleComplete={this.toggleCreateProject} />
                        </div>
                        <div style={{ display: this.state.showProjectsDisplay}}>
                            <ShowPages projectList={this.state.projectList} updateProject={this.props.updateProject} refreshProjects={this.fetchProjects}/>
                        </div>
                    </div>
                </div>
            </div >
        )
    }
}

export default PagesOverlay;