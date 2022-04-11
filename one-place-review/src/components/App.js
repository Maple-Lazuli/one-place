import React from "react";
import 'semantic-ui-css/semantic.min.css';
import MenuBar from "./MenuBar";
import ReviewPage from "./reviewer/ReviewPage";

import ProjectBar from "./projectPanel/ProjectBar";
import ToolBar from "./toolsPanel/ToolBar";
import Backend from "../api/backend";
import './App.css'
class App extends React.Component {

    state = {
        currentProject: {
            'Title': 'No Project Selected',
            'id': 'None',
            'pages': {},
            'files': {}
        },
        currentPage: {
            'Title': 'No Page Selected',
            'id': 'None',
            'code_snippets': []
        },
        lastUpdate: 0,
        barState: "visible",
        bar: "ui visible inverted left vertical sidebar menu",
        questionList: []
    }

    updateProject = (projectDict) => {
        this.setState({ currentProject: projectDict })
    }

    updatePageTime = (time) => {
        this.setState({ lastUpdate: time })
    }

    refreshProject = async () => {
        if (this.state.currentProject['id'] !== "None") {
            const response = await Backend.get(
                '/project', {
                params: { "id": this.state.currentProject['id'] }
            });
            this.setState({ currentProject: response.data['project'] })
        }
    }

    refreshPage = async () => {
        if (this.state.currentPage['id'] !== "None") {
            const response = await Backend.get(
                '/page', {
                params: { "id": this.state.currentPage['id'] }
            });
            this.setState({ currentPage: response.data['page'] })
        }
    }

    updatePage = (pageDict) => {
        this.setState({ currentPage: pageDict, lastUpdate: pageDict['lastUpdate'] }, () => {
        })

    }

    updateQuestions = (questions) => {
        this.setState({ questionList: questions})

    }

    toggleBar = () => {
        if (this.state.barState === "visible") {
            this.setState({ barState: "", bar: "ui inverted left vertical sidebar menu" })
        } else {
            this.setState({ barState: "visible", bar: "ui visible inverted left vertical sidebar menu" })
        }
    }

    render() {
        return (
            <div style={{ height: "100%", width: "100%" }}>
                <div>
                    <MenuBar updateProject={this.updateProject} updatePage={this.updatePage} currentProject={this.state.currentProject} refreshProject={this.refreshProject} toggleBar={this.toggleBar} />
                    <ToolBar currentProject={this.state.currentProject} currentPage={this.state.currentPage} refreshPage={this.refreshPage} refreshProject={this.refreshProject} />
                </div>
                <div id="appArea" className="ui bottom attached segment pushable" style={{ height: "91vh", width: "100%" }}>
                    <ProjectBar currentProject={this.state.currentProject} currentPage={this.state.currentPage} updatePage={this.updatePage} bar={this.state.bar}  updateQuestions={this.updateQuestions}/>
                    <ReviewPage questionList={this.state.questionList}/>
                </div>
            </div >)
    }
}

export default App;


