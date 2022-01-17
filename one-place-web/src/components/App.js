import React from "react";
import 'semantic-ui-css/semantic.min.css';
import MenuBar from "./MenuBar";
import PageContent from "./editor/PageContent";
import ProjectBar from "./projectPanel/ProjectBar";
import ToolBar from "./toolsPanel/ToolBar";
import Backend from "../api/backend";
import './App.css'
class App extends React.Component {

    state = {
        currentProject: {
            'Title': 'No Project Selected',
            'id': 'None',
            'pages': {}
        },
        currentPage: {
            'Title': 'No Page Selected',
            'id': 'None'
        }
    }

    updateProject = (projectDict) => {
        this.setState({currentProject: projectDict})
    }

    refreshProject = async () => {
        if (this.state.currentProject['id'] !== "None") {
            const response = await Backend.get(
                '/project', {
                params: { "id": this.state.currentProject['id'] }
            });
            this.setState({currentProject: response.data['project']})
        }
    }

    updatePage = (pageDict) => {
        this.setState({currentPage: pageDict})
    }

    render() {
        return (
            <div style={{}}>
                <MenuBar updateProject={this.updateProject} updatePage={this.updatePage} currentProject={this.state.currentProject} refreshProject={this.refreshProject}/>
                <div id="appArea" className="ui bottom attached segment pushable">
                    <ProjectBar currentProject={this.state.currentProject} currentPage={this.state.currentPage} updatePage={this.updatePage}/>
                    <PageContent currentProject={this.state.currentProject}/>
                    <ToolBar />
                </div>
            </div>)
    }
}

export default App;


