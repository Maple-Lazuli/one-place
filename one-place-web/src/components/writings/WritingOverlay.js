import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import WritingCard from './WritingCard';
import CreateWriting from './CreateWriting'
import Backend from "../../api/backend"
class WritingOverlay extends React.Component {

    state = {
        displayCreateWriting: "None",
        displayWritings: ""
    }
    completeCreation = () => {
        this.setState({
            displayCreateWriting: "None",
            displayWritings: "",

        })
    }
    showCreateWriting = () => {
        if (this.state.displayCreateWriting !== "None") {
            this.completeCreation()
        } else {
            this.setState({
                displayCreateWriting: "",
                displayWritings: "None",
            })
        }
    }

    populateGrid = () => {
        let writings = [];
        let i = 0

        for (const [key, value] of Object.entries(this.props.currentPage['writings'])) {
            writings.push(<WritingCard key={i++}
                refreshPage={this.props.refreshPage}
                currentPage={this.props.currentPage}
                writing={value} />)
        }
        return writings
    }

    render() {

        return (
            <div>
                <div>
                    <div className="ui grid">
                        <div className="eight wide column">
                            <button className="ui button small" onClick={this.showCreateWriting}>Create Writing</button>
                        </div>
                        <div className="four wide column">
                            <div className="ui label large">
                                Writings
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
                <div style={{ display: this.state.displayCreateWriting }}>
                    <CreateWriting currentPage={this.props.currentPage} complete={this.completeCreation}
                        refreshPage={this.props.refreshPage} />
                </div>
                <div className="ui cards" style={{ display: this.state.displayWritings }}>
                    {this.populateGrid()}
                </div>
            </div>

        )
    }
}

export default WritingOverlay;