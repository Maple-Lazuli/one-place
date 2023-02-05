import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import Backend from '../../api/backend'

class WritingCard extends React.Component {

    selectWriting = () => {
        "Open new window"
        window.open("http://"+ window.location.hostname +":3003/" + this.props.writing['id'] + ":" + this.props.currentPage['id'], "_blank")
    }

    deleteWriting = async () => {
        const response = await Backend.get(
            '/delete', {
            params: {
                "id": this.props.writing['id'],
            }
        });
        this.props.refreshPage()
    }
    render() {
        return (
            <div className="card">
                <div className='content'>
                    <div className='header'>
                        {this.props.writing['title']}
                    </div>
                    <div className="extra content">
                        <div className="ui two buttons">
                            <div className="ui basic green button" onClick={this.selectWriting}>View</div>
                            <div className="ui basic red button" onClick={this.deleteWriting}>Delete</div>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default WritingCard;