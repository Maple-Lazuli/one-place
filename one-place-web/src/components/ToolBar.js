import React from 'react';
import 'semantic-ui-css/semantic.min.css';
class ToolBar extends React.Component {
    render() {
        return (
            <div className="ui visible inverted right vertical sidebar menu">
                <div className="ui medium yellow header">Tools</div>
            </div>
        )
    }
}

export default ToolBar;