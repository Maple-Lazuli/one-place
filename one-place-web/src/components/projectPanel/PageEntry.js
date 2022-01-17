import React from "react";
import 'semantic-ui-css/semantic.min.css';
import './page.css';

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
    }

    render() {
        return (
            <div className="item page"  onClick={this.selectPage}>
                <div className="content">
                    <div className="header" style = {{color: this.setcolor()}}>{this.props.pageDict['title']}</div>
                </div>
            </div>
        )
    }
}
export default PageEntry;