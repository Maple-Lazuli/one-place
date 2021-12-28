import React from "react";
import 'semantic-ui-css/semantic.min.css';
class ProjectBar extends React.Component {

    render() {
        return (
            <div className="ui visible inverted left vertical sidebar menu">
                <div className="ui medium yellow header">{this.props.currentProject['Title']}</div>
            </div>
        )
    }
}
export default ProjectBar;