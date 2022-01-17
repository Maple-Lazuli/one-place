import React from "react";
import 'semantic-ui-css/semantic.min.css';

class PageEntry extends React.Component {
    state = {}

    setcolor = () => {
        if (this.props.pageDict['id'] !== this.props.currentPage['id']) {
            return "white"
        } else {
            return "yellow"
        }
    }

    selectPage = () => {
        this.props.updatePage(this.props.pageDict)
        alert("selected page "+ this.props.pageDict['title'])
    }

    render() {
        return (
            <div className="item"  onClick={this.selectPage}>
                <div className="content">
                    <div className="header" style = {{color: this.setcolor()}}>{this.props.pageDict['title']}</div>
                </div>
            </div>
        )
    }
}
export default PageEntry;