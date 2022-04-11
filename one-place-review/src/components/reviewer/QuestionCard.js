import React from 'react';
import 'semantic-ui-css/semantic.min.css'
import AnswerBank from "./AnswerBank"
class QuestionCard extends React.Component {

    PopulateAnswerButtons = () => {

        let elements = []
        for (let i = 0; i < this.props.question['question_banks'].length; i++) {
            elements.push(<AnswerBank key={i} answerbank={this.props.question['question_banks'][i]} index={i}/>)
        }
        return elements
    }

    render() {
        return (
            <form className="ui form" style={{color:"white"}}>
                <div className="field">
                    <label style={{color: "white"}}>Question: {this.props.index+1}</label>
                    {this.props.question['blank_sentence']}
                </div>
                {this.PopulateAnswerButtons()}
            </form>
        )
    }
}

export default QuestionCard;