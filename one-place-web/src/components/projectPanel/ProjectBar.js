import React from "react";
import 'semantic-ui-css/semantic.min.css';
import '../projects/ProjectOverlay.css'
class ProjectBar extends React.Component {


    render() {
        return (
            <div className="ui visible inverted left vertical sidebar menu">
                <div>
                    <div className="ui medium yellow header" onDoubleClick={this.toggleAddProjectsDisplay}>
                        Open: {this.props.currentProject['title']}
                    </div>
                    <div>
                        {/* Code to render all of the pages */}
                    </div>
                </div>
            </div >
        )
    }
}
export default ProjectBar;