import React from "react";
import Backend from '../../api/backend';
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
        this.pullQuestions()
    // send page review update here

    }

    pullQuestions = async () => {
            console.log("Sent Review Request")
            const response = await Backend.get(
                '/review', {
                params: {
                    id: this.props.pageDict['id']
                }
            });
            this.props.updateQuestions(response.data['questions'])
            console.log("Request Done")
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