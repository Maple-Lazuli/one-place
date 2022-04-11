import React from 'react';
import ReactDom from 'react-dom';
import 'semantic-ui-css/semantic.min.css';
import Backend from '../../api/backend';
import QuestionCard from './QuestionCard'


import 'katex/dist/katex.min.css' // `rehype-katex` does not import the CSS for you


class ReviewPage extends React.Component {

    populateGrid = () => {
        let questions = [];
        for (let i = 0; i < this.props.questionList.length; i++) {
            questions.push(<QuestionCard key={i}
                question={this.props.questionList[i]}
                index={i} />)
        }
        return questions
    }

    render() {

        return (
            <div className="pusher">
                {this.populateGrid()}
            </div>
        )
    }
}

export default ReviewPage;


