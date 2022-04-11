import React from 'react';
import 'semantic-ui-css/semantic.min.css'
import Answer from "./Answer"
class AnswerBank extends React.Component {


    PopulateAnswer = () => {

        let elements = []

        for (let i = 0; i < this.props.answerbank['word_bank'].length; i++) {
            elements.push(<Answer word={this.props.answerbank['word_bank'][i]} key={i} index={i} correctindex={this.props.answerbank['answer_idx']} />)
        }

        return elements
    }

    render() {
        return (
            <div className="field">
                <div className="ui twelve column grid">
                    <div className="row">
                        <div className="column">
                            <label style={{color:"white"}}>{this.props.index+1}</label>
                        </div>
                        {this.PopulateAnswer()}
                    </div>
                </div>
            </div>
        )
    }

} export default AnswerBank;