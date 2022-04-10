import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import '../projects/ProjectOverlay.css'
import CreatePage from './CreatePage'
import ShowPages from './ShowPages'

import Backend from "../../api/backend"
class PagesOverlay extends React.Component {

    state = {
        createPageDisplay: "None",
        showPagesDisplay: "",
        pageList: [],
    }

    componentDidMount() {
        this.fetchPages()
    }
    // To get this to work properly, update the page list when a project is selected
    fetchPages = async () => {
        if (this.props.currentProject['id'] !== "None") {
            const response = await Backend.get(
                '/pages', {
                params: { "id": this.props.currentProject['id'] }
            });
            this.setState({ pageList: response.data['pages'] }, () => {
                this.setState({ showPagesDisplay: "" }, () => {
                })
            })
        }
    }

    toggleCreatePage = () => {
        if (this.state.createPageDisplay === 'None') {
            this.setState({ createPageDisplay: "", showPagesDisplay: "None" })
        } else {
            this.setState({ createPageDisplay: "None" })
            this.fetchPages()

        }
    }

    render() {
        return (
            <div className="shader" style={{ display: this.props.overlay }}>
                <div className="projectholder">
                    <div id='create-projects-div'>
                        <div className="ui grid">
                            <div className="eight wide column">
                                <button className="ui button small" onClick={this.toggleCreatePage}>Create Page</button>
                            </div>
                            <div className="four wide column">
                                <div className="ui label large">
                                    Pages
                                    <div className="detail">343</div>
                                </div>
                            </div>
                            <div className="four wide column">
                                <div className="ui label large">
                                    Last Updated
                                    <div className="detail">316</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id='access-projects-div'>
                        <div style={{ display: this.state.createPageDisplay }}>
                        {/* Use current project for the id to assign the page too */}
                            <CreatePage toggleComplete={this.toggleCreatePage} currentProject={this.props.currentProject} refreshProject={this.props.refreshProject}/> 
                        </div>
                        <div style={{ display: this.state.showPagesDisplay }}>
                            <ShowPages pageList={this.state.pageList} updatePage={this.props.updatePage} refreshPages={this.fetchPages} refreshProject={this.props.refreshProject}/>
                        </div>
                    </div>
                </div>
            </div >
        )
    }
}

export default PagesOverlay;