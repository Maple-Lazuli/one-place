import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import './ProjectOverlay.css'
import CreateProject from './CreateProject'
class ProjectOverlay extends React.Component {

    render() {
        return (
            <div id="shader" style={{ display: this.props.overlay }}>
                <div id="projectholder">
                    <div id='create-projects-div'>
                        <div className="ui grid">
                            <div className="eight wide column">
                                <button className="ui button small">Create Project</button>
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
                        <CreateProject />
                    </div>
                </div>
            </div >
        )
    }
}

export default ProjectOverlay;