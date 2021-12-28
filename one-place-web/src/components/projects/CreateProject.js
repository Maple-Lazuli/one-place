import React from 'react';
import 'semantic-ui-css/semantic.min.css'
import Backend from '../../api/backend'

class CreateProject extends React.Component {

    state = {
        projectName: "",
        projectPurpose: "",
        projectCategory: ""
    }

    preventDefaultAction = (e) => {
        e.preventDefault();
    }

    sendNewProject = async (e) => {
        e.preventDefault();
        const response = await Backend.post(
            '/projects', {
            data: {
                projectName: this.state.projectName,
                projectPurpose: this.state.projectPurpose,
                projectCategory: this.state.projectCategory
            }
        });
        this.props.toggleComplete()
    }

    updatePurpose = () => {
        this.setState({ projectPurpose: document.getElementById("purpose").value })
    }
    updateName = () => {
        this.setState({ projectName: document.getElementById("project-name").value })
    }
    updateCategory = () => {
        this.setState({ projectName: document.getElementById("category").value })
    }

    render() {
        return (
            <form className="ui form" onSubmit={this.preventDefaultAction}>
                <div className="field">
                    <label>Project Title</label>
                    <input type="text" id="project-name" name="project-name" placeholder="Project Name" onChange={this.updateName} />
                </div>
                <div className="field">
                    <label>Project Category</label>
                    <input type="text" id='category' name="category" placeholder="Category" onChange={this.updateCategory} />
                </div>
                <div className="field">
                    <label>Project Purpose</label>
                    <input type="text" id='purpose' name="purpose" placeholder="Purpose" onChange={this.updatePurpose} />
                </div>
                <button className="ui button" type="submit" onClick={this.sendNewProject}>Submit</button>
            </form>
        )
    }
}

export default CreateProject;