import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import './toolbar.css';
class ToolBar extends React.Component {

    state = {
        overlayActive: "None",
        snippetsOverlay: "None",
        filesOverlay: "None"
    }


    getReviewTime = () => {
        let date = new Date(this.props.currentPage['last_review'] * 1000)
        return date.toDateString();

    }

    render() {
        return (
            <div style={{ backgroundColor: 'gold' }}>
                <div className="ui secondary menu" style={{ margin: "2px", zIndex: 10099 }}>
                    <div className='item'>
                        <b>
                            {this.props.currentProject['title']} - {this.props.currentPage['title']}
                        </b>
                    </div>
                    <div className="right menu">
                        <div className='item'>
                            <b>
                                Last Reviewed: {this.getReviewTime()} &emsp;-&emsp;  Current Score: {this.props.currentPage['score']}
                            </b>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default ToolBar;