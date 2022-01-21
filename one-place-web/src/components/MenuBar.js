import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import ProjectOverlay from './projects/ProjectOverlay';
import PagesOverlay from './pages/PageOverlay';
import Backend from '../api/backend';
class MenuBar extends React.Component {

    state = {
        overlay: "None",
        pageoverlay: "None"
    }

    toggleProjectsOverlay = () => {
        if (this.state.overlay === "None") {
            this.setState({ overlay: "" })
        } else {
            this.setState({ overlay: "None" })
        }
    }

    togglePagesOverlay = () => {
        if (this.props.currentProject.id === "None") {
            alert("Select a project First")
        } else {
            if (this.state.pageoverlay === "None") {
                this.setState({ pageoverlay: "" })
            } else {
                this.setState({ pageoverlay: "None" })
            }
        }

    }

    sendSaveCommand = async () => {
        const response = await Backend.get(
            '/save', {
            params: {}
        });
        if (response.status !== 200) {
        }
    }
    sendBackupCommand = async () => {
        const response = await Backend.get(
            '/backup', {
            params: {}
        });
        if (response.status !== 200) {
        }
    }

    render() {
        return (
            <div>
                <div className="ui secondary  menu" style={{ margin: "2px", zIndex: 10099 }}>
                    <a className="item" onClick={this.toggleProjectsOverlay} >
                        Projects
                    </a>
                    <a className="item" onClick={this.togglePagesOverlay} >
                        Pages
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
                        <a className="ui item" onClick={this.sendSaveCommand}>
                            Save
                        </a>
                        <a className="ui item" onClick={this.sendBackupCommand}>
                            Backup
                        </a>
                    </div>
                </div>
                <ProjectOverlay overlay={this.state.overlay} updateProject={this.props.updateProject} toggleProjectsOverlay={this.toggleProjectsOverlay} />
                <PagesOverlay overlay={this.state.pageoverlay} currentProject={this.props.currentProject} updatePage={this.props.updatePage} refreshProject={this.props.refreshProject} />
            </div>
        )
    }
}

export default MenuBar;