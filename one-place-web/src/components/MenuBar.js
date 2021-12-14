import React from 'react';
import 'semantic-ui-css/semantic.min.css';
class MenuBar extends React.Component {
    render() {
        return (
            <div className="ui secondary  menu" style={{margin:"2px"}}>
                <a className="active item">
                    Projects
                </a>
                <a className="item">
                    Calendar
                </a>
                <a className="item">
                    To Do List
                </a>
                <div className="right menu">
                    <div className="item">
                        <div className="ui icon input">
                            <input type="text" placeholder="Search..." />
                            <i className="search link icon"></i>
                        </div>
                    </div>
                    <a className="ui item">
                        App Settings
                    </a>
                </div>
            </div>
        )
    }
}

export default MenuBar;