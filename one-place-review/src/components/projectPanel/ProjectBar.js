import React from "react";
import 'semantic-ui-css/semantic.min.css';
import '../projects/ProjectOverlay.css'
import PageEntry from "./PageEntry";
class ProjectBar extends React.Component {

    state  = {
        class: "ui inverted left vertical sidebar menu"
    }
    
    enumeratePages = () => {
        let pages = [];
        let i = 0
        for (const [key, value] of Object.entries(this.props.currentProject['pages'])) {
            pages.push(<PageEntry key={i++} pageDict={value} updatePage={this.props.updatePage} currentPage={this.props.currentPage} updateQuestions={this.props.updateQuestions}/>)
        }

        return pages
    }

    displayType = () => {
        console.log("toggle")
        if (this.props.bar == "visible"){
            this.setState({class: "ui visible inverted left vertical sidebar menu"})
        } else {
            this.setState({class: "ui inverted left vertical sidebar menu"})
        }
    }
    

    render() {
        return (
            <div className={this.props.bar} id="projectbar">
                <div>
                    <div className="ui medium yellow header" onDoubleClick={this.toggleAddProjectsDisplay}>
                        {this.props.currentProject['title']}
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