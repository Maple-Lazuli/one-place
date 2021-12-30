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
            '/projects', {
            data: {
                "pageName": this.state.pageName,
                "pageParent": this.state.pageParent,
                "pageCreationTime": Date.now(),
            }
        });
        this.props.toggleComplete()
    }

    updateTitle = () => {
        this.setState({ projectName: document.getElementById("page-name").value })
    }
    updateParent = () => {
        this.setState({ pageParent: document.getElementById("page-name").value })
    }


    render() {
        return (
            <form className="ui form" onSubmit={this.preventDefaultAction}>
                <div className="field">
                    <label>Parent</label>
                    <input type="text" id='category' name="category" placeholder="Category" onChange={this.updateParent} />
                </div>
                <div className="field">
                    <label>Project Title</label>
                    <input type="text" id="page-name" name="page-name" placeholder="Page Name" onChange={this.updateTitle} />
                </div>
                <button className="ui button" type="submit" onClick={this.sendNewProject}>Submit</button>
            </form>
        )
    }
}

export default CreatePage;