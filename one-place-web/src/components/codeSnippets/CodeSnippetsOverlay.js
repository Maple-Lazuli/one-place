import React from 'react';
import 'semantic-ui-css/semantic.min.css';

import Backend from "../../api/backend"
import CreateCodeSnippet from "./CreateCodeSnippet"
class CodeSnippetsOverlay extends React.Component {

    state = {
        displaySnippets: "",
        displayCreateSnippet: "None",
        displayModifySnippet: "None",
        displaySnippet: "None"

    }

    completeCreation = () => {
        this.setState({ displayCreateSnippet: "None" })
    }
    showCreateSnippet = () => {
        this.setState({ displayCreateSnippet: "" })
    }

    populateGrid = () => {
        let snippets = [];
        // for (let i = 0; i < this.props.currentPage['code_snippets'].length; i++) {
        //     snippets.push(<div key={i} />)
        // }
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
                <div className="" style={{ display: this.state.displayCreateSnippet }}>
                    <CreateCodeSnippet currentPage={this.props.currentPage} complete={this.completeCreation} refreshPage={this.props.refreshPage}/>                </div>
                <div className="ui cards" style={{ display: this.state.displaySnippets }}>
                    {this.populateGrid()}
                </div>
            </div>

        )
    }
}

export default CodeSnippetsOverlay;