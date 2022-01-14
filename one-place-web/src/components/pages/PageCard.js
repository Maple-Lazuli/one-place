import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import Backend from '../../api/backend'

class PageCard extends React.Component {

    selectPage = () => {
        this.props.updatePage(this.props.pageDict)
    }

    deletePage = async () => {
        const response = await Backend.get(
        '/delete', {
            params: { "id":this.props.pageDict['id'] }
        });
        this.props.refreshPages()
    }

render() {
    return (
        <div className="card">
            <div className='content'>
                <div className='header'>
                    {this.props.pageDict['title']}
                </div>
                <div className="extra content">
                    <div className="ui two buttons">
                        <div className="ui basic green button" onClick={this.selectPage}>Select</div>
                        <div className="ui basic red button" onClick={this.deletePage}>Delete</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
}

export default PageCard;