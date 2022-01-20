import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import Backend from '../../api/backend'
import './snippetstyles.css'

class ViewCodeSnippet extends React.Component {

    selectSnippet = () => {
        this.props.updatePage(this.props.pageDict)
    }

    render() {
        return (
            <div>
                <div className="ui grid">
                    <div className="two wide column">
                        <button className="ui button small" onClick={this.props.closeSnippet}>Close</button>
                    </div>
                    <div className="two wide column">
                        <button className="ui yellow button small" onClick={this.showCreateSnippet}>Modify</button>
                    </div>
                    
                </div>
                <div id="snippetdiv" dangerouslySetInnerHTML={{__html: this.props.currentSnippet['marked']}}>

                </div>



            </div>
        )
    }
}

export default ViewCodeSnippet;