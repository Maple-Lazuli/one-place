import React from "react";
import 'semantic-ui-css/semantic.min.css';
import '../projects/ProjectOverlay.css'
import PageEntry from "./PageEntry";
class ProjectBar extends React.Component {

    enumeratePages = () => {
        let pages = [];
        let i = 0
        for (const [key, value] of Object.entries(this.props.currentProject['pages'])) {
            pages.push(<PageEntry key={i++} pageDict={value} updatePage={this.props.updatePage} currentPage={this.props.currentPage}/>)
        }

        return pages
    }


    render() {
        return (
            <div className="ui visible inverted left vertical sidebar menu">
                <div>
                    <div className="ui medium yellow header" onDoubleClick={this.toggleAddProjectsDisplay}>
                        Open: {this.props.currentProject['title']}
                    </div>
                    <div>
                        <div className="ui list left">
                            {this.enumeratePages()}
                        </div>
                    </div>
                </div >
            </div>
        )
    }
}
export default ProjectBar;