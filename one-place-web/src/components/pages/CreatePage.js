import React from 'react';
import 'semantic-ui-css/semantic.min.css'
import Backend from '../../api/backend'

class CreatePage extends React.Component {

    state = {
        pageName: "",
        pageParent: "",
    }

    preventDefaultAction = (e) => {
        e.preventDefault();
    }

    sendNewProject = async (e) => {
        e.preventDefault();
        const response = await Backend.post(
            '/pages', {
            data: {
                "pageName": this.state.pageName,
                "pageParent": this.props.currentProject.id,
                "pageCreationTime": Date.now(),
            }
        });
        this.props.toggleComplete()
    }

    updateTitle = () => {
        this.setState({ pageName: document.getElementById("page-name").value })
    }


    render() {
        return (
            <form className="ui form" onSubmit={this.preventDefaultAction}>
                <div className="field">
                    <label>Page Name</label>
                    <input type="text" id="page-name" name="page-name" placeholder="Page Name" onChange={this.updateTitle} />
                </div>
                <button className="ui button" type="submit" onClick={this.sendNewProject}>Submit</button>
            </form>
        )
    }
}

export default CreatePage;