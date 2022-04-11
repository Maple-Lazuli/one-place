import React from 'react';
import 'semantic-ui-css/semantic.min.css'

class Answer extends React.Component {

    state = {
        correct: "ui button brown"
    }


    preventDefaultAction = (e) => {
        e.preventDefault();
    }

    RevealAnswer = (e) => {
        e.preventDefault();
    // TODO Send updates to the server about performance on this page
        if (this.props.index == this.props.correctindex) {
            this.setState({ correct: "ui button green" })
        } else
            this.setState({ correct: "ui button red" })
    }

    render() {
        return (
            <div className="column">
                <button className={this.state.correct} onClick={this.RevealAnswer}>
                    {this.props.word}
                </button>
            </div>
        )
    }

} export default Answer;