import React from "react";
import 'semantic-ui-css/semantic.min.css';
import MenuBar from "./MenuBar";
import PageContent from "./editor/PageContent";
import ProjectBar from "./projectPanel/ProjectBar";
import ToolBar from "./toolsPanel/ToolBar";
import './App.css'
class App extends React.Component {


    render() {
        return (
            <div style={{}}>
                <MenuBar/>
                <div id="appArea" className="ui bottom attached segment pushable">
                    <ProjectBar />
                    <PageContent />
                    <ToolBar />
                </div>
            </div>)
    }
}

export default App;