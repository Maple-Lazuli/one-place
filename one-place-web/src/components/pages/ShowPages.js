import React from 'react';
import 'semantic-ui-css/semantic.min.css'
import PageCard from './PageCard'

class ShowPages extends React.Component {

    populateGrid = () => {
        let projects = [];
        for (let i = 0; i < this.props.pageList.length; i++) {
            projects.push(<PageCard key={i} pageDict={this.props.pageList[i]} updatePage={this.props.updatePage} refreshPages = {this.props.refreshPages}/>)
        }
        return projects
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