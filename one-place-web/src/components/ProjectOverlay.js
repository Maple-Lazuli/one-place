import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import './ProjectOverlay.css'
class ProjectOverlay extends React.Component {

    render() {
        return (
            <div id="shader" style={{display: this.props.overlay}}>
                <div id="projectholder">

                </div>
            </div >
        )
    }
}

export default ProjectOverlay;