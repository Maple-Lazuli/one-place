import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import ProjectOverlay from './projects/ProjectOverlay';
import PagesOverlay from './pages/PageOverlay';
import RestoreOverlay from './restore/RestoreOverlay';
import Backend from '../api/backend';
class MenuBar extends React.Component {

    state = {
        overlay: "None",
        pageoverlay: "None",
        restoreOverlay: "None"
    }

    toggleProjectsOverlay = () => {
        if (this.state.overlay === "None") {
            this.setState({ overlay: "" })
        } else {
            this.setState({ overlay: "None" })
        }
    }

    toggleRestoreOverlay = () => {
        if (this.state.restoreOverlay === "None") {
            this.setState({ restoreOverlay: "" })
        } else {
            this.setState({ restoreOverlay: "None" })
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
                <div className="ui secondary  menu" style={{ margin: "2px", zIndex: 10099, height: '2vh' }}>
                    <a className="item" onClick={this.props.toggleBar} >
                        X
                    </a>
                    <a className="item" onClick={this.toggleProjectsOverlay} >
                        Projects
                    </a>
                    <a className="item" onClick={this.togglePagesOverlay} >
                        Pages
                    </a>
                    <div className="right menu">
                        <a className="item" onClick={this.toggleRestoreOverlay} >
                            Restore
                        </a>
                        <a className="ui item" onClick={this.sendSaveCommand}>
                            Save
                        </a>
                        <a className="ui item" onClick={this.sendBackupCommand}>
                            Backup
                        </a>
                        <div className='item'>
                            <b>
                                v1.5
                            </b>

                        </div>
                    </div>
                </div>
                <ProjectOverlay overlay={this.state.overlay} updateProject={this.props.updateProject} toggleProjectsOverlay={this.toggleProjectsOverlay} />
                <PagesOverlay overlay={this.state.pageoverlay} currentProject={this.props.currentProject} updatePage={this.props.updatePage} refreshProject={this.props.refreshProject} />
                <RestoreOverlay overlay={this.state.restoreOverlay}/>

            </div>
        )
    }
}

export default MenuBar;