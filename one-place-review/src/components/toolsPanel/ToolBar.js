import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import './toolbar.css';
class ToolBar extends React.Component {

    state = {
        overlayActive: "None",
        snippetsOverlay: "None",
        filesOverlay: "None"
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
                                LAST REVIEWED - {this.props.currentPage['title']}
                            </b>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default ToolBar;