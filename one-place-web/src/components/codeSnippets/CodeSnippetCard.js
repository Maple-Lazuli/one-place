import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import Backend from '../../api/backend'

class CodeSnippetCard extends React.Component {

    selectSnippet = () => {
        this.props.updatePage(this.props.pageDict)
    }

    deleteSnippet = async () => {
        const response = await Backend.get(
            '/delete', {
            params: {
                "id": this.props.snippet['id'],
            }
        });
        this.props.refreshPage()
    }

    render() {
        return (
            <div className="card">
                <div className='content'>
                    <div className='header'>
                        {this.props.snippet['title']}
                    </div>
                    <div className='meta'>
                        {this.props.snippet['language']}
                    </div>
                    <div className='description'>
                        {this.props.snippet['description']}
                    </div>
                    <div className="extra content">
                        <div className="ui three buttons">
                            <div className="ui basic green button" onClick={this.selectSnippet}>View</div>
                            <div className="ui basic yellow button" onClick={this.modifiySnippet}>Modify</div>
                            <div className="ui basic red button" onClick={this.deleteSnippet}>Delete</div>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CodeSnippetCard;