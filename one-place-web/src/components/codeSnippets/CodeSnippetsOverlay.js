import React from 'react';
import 'semantic-ui-css/semantic.min.css';

import Backend from "../../api/backend"
import CreateCodeSnippet from "./CreateCodeSnippet"
import CodeSnippetCard from "./CodeSnippetCard"
import ViewCodeSnippet from './ViewCodeSnippet';
class CodeSnippetsOverlay extends React.Component {

    state = {
        displaySnippets: "",
        displayCreateSnippet: "None",
        displayModifySnippet: "None",
        displaySnippet: "None",
        currentSnippet: {
            marked: ""
        }
    }

    completeCreation = () => {
        this.setState({
            displayCreateSnippet: "None",
            displaySnippets: "",
            displaySnippet: "None"
        })
    }
    showCreateSnippet = () => {
        if (this.state.displayCreateSnippet !== "None") {
            this.completeCreation()
        } else {
            this.setState({
                displayCreateSnippet: "",
                displaySnippets: "None",
                displaySnippet: "None"
            })
        }
    }

    setCurrentSnippet = (snippet) => {
        this.setState({
            currentSnippet: snippet,
            displayCreateSnippet: "None",
            displaySnippets: "None",
            displaySnippet: ""
        })
    }

    closeSnippet = () => {
        this.setState({
            displayCreateSnippet: "None",
            displaySnippets: "",
            displaySnippet: "None"
        })
    }

    populateGrid = () => {
        let snippets = [];
        let i = 0

        for (const [key, value] of Object.entries(this.props.currentPage['code_snippets'])) {
            snippets.push(<CodeSnippetCard key={i++}
                refreshPage={this.props.refreshPage}
                setCurrentSnippet={this.setCurrentSnippet}
                snippet={value} />)
        }
        return snippets
    }

    render() {

        return (
            <div>
                <div>
                    <div className="ui grid">
                        <div className="eight wide column">
                            <button className="ui button small" onClick={this.showCreateSnippet}>Create Snippet</button>
                        </div>
                        <div className="four wide column">
                            <div className="ui label large">
                                Snippets
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
                <div style={{ display: this.state.displayCreateSnippet }}>
                    <CreateCodeSnippet currentPage={this.props.currentPage} complete={this.completeCreation}
                        refreshPage={this.props.refreshPage} />
                </div>
                <div style={{ display: this.state.displaySnippet }}>
                    <ViewCodeSnippet currentSnippet={this.state.currentSnippet} closeSnippet={this.closeSnippet}/>
                </div>
                <div className="ui cards" style={{ display: this.state.displaySnippets }}>
                    {this.populateGrid()}
                </div>
            </div>

        )
    }
}

export default CodeSnippetsOverlay;