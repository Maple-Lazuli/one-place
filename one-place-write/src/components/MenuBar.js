import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import Backend from '../api/backend';
class MenuBar extends React.Component {

    sendSaveCommand = async () => {
        const response = await Backend.get(
            '/save', {
            params: {}
        });
        if (response.status !== 200) {
        }
    }


    render() {
        return (
            <div>
                <div className="ui secondary  menu" style={{ margin: "2px", zIndex: 10099, height: "3vh" }}>
                    <a className="item" onClick={this.props.toggleBar} >
                        X
                    </a>
                    <a className="item">
                        {this.props.currentPage['title']}
                    </a>
                    <a className="item">
                        {this.props.currentWriting['title']}
                    </a>
                    <div className="right menu">
                        <a className="ui item" onClick={this.sendSaveCommand}>
                            Save
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}

export default MenuBar;