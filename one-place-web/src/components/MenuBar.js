import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import ProjectOverlay from './projects/ProjectOverlay';
class MenuBar extends React.Component {

    state = {
        overlay: "None"
    }

    toggleProjectsOverlay = () => {
        if (this.state.overlay === "None") {
            this.setState({ overlay: "" })
        } else {
            this.setState({ overlay: "None"})
        }
    }

    render() {
        return (
            <div>
                <div className="ui secondary  menu" style={{ margin: "2px", zIndex:10099 }}>
                <a className="item" onClick={this.toggleProjectsOverlay} >
                        Projects
                    </a>
                    <a className="item">
                        Calendar
                    </a>
                    <a className="item">
                        To Do List
                    </a>
                    <div className="right menu">
                        <div className="item">
                            <div className="ui icon input">
                                <input type="text" placeholder="Search..." />
                                <i className="search link icon"></i>
                            </div>
                        </div>
                        <a className="ui item">
                            App Settings
                        </a>
                    </div>
                </div>
                    <ProjectOverlay overlay={this.state.overlay} updateProject={this.updateProject}/>
            </div>
        )
    }
}

export default MenuBar;