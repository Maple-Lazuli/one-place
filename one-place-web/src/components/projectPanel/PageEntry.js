import React from "react";
import 'semantic-ui-css/semantic.min.css';
import './page.css';
import Backend from '../../api/backend';

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
        this.updateRenderTime()
    }

    updateRenderTime = async () => {
        const response = await Backend.get(
            '/render', {
            params: {
                pageID: this.props.pageDict['id'],
                time: Date.now()
            }
        });
        if (response.status !== 200) {
        }

    }

    render() {
        return (
            <div className="item page" onClick={this.selectPage}>
                <div className="content">
                    <div className="header" style={{ color: this.setcolor() }}>{this.props.pageDict['title']}</div>
                </div>
            </div>
        )
    }
}
export default PageEntry;