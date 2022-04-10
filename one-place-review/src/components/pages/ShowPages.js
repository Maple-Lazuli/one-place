import React from 'react';
import 'semantic-ui-css/semantic.min.css'
import PageCard from './PageCard'

class ShowPages extends React.Component {

    populateGrid = () => {
        let pages = [];
        for (let i = 0; i < this.props.pageList.length; i++) {
            pages.push(<PageCard key={i} pageDict={this.props.pageList[i]} updatePage={this.props.updatePage} refreshPages = {this.props.refreshPages} refreshProject={this.props.refreshProject}/>)
        }
        return pages
    }

    render() {
        
        return (
            <div className="ui cards">
                {this.populateGrid()}
            </div>
        )
    }
}

export default ShowPages;