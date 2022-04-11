import React from 'react';
import 'semantic-ui-css/semantic.min.css'
import Backend from '../../api/backend';
class Answer extends React.Component {

    state = {
        correct: "ui button brown",
        clicked: false
    }


    preventDefaultAction = (e) => {
        e.preventDefault();
    }

    RevealAnswer = (e) => {
        e.preventDefault();

        if (!this.state.clicked) {
            if (this.props.index == this.props.correctindex) {
                this.setState({ correct: "ui button green", clicked: true })
                this.props.increaseCorrect()
                this.sendScoreIncrement(1)
            } else {
                this.setState({ correct: "ui button red", clicked: true })
                this.sendScoreIncrement(-1)
            }

        }
    }

    sendScoreIncrement = async (ammount) => {
        if (this.props.currentPage['id'] !== "None") {
            const response = await Backend.post(
                '/score', {
                data: {
                    pageID: this.props.currentPage['id'],
                    score: ammount
                }
            });
            if (response.status !== 200) {
            }
        }
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