import React from 'react';
import 'semantic-ui-css/semantic.min.css'
import Backend from '../../api/backend'

class ModifyProject extends React.Component {
    //Re work this to recieve the project to
    state = {
        projectName:this.props.project['title'],
        projectPurpose: this.props.project['purpose'],
        projectCategory: this.props.project['category'],
    }

    preventDefaultAction = (e) => {
        e.preventDefault();
    }

    sendUpdateProject = async (e) => {
        e.preventDefault();
        const response = await Backend.put(
            '/project', {
            data: {
                "title": this.state.projectName,
                "purpose": this.state.projectPurpose,
                "category": this.state.projectCategory,
                "id": this.props.project['id'],
            }
        });
        this.props.toggleComplete()
    }

    updatePurpose = () => {
        this.setState({ projectPurpose: document.getElementById("modify-purpose").value })
    }
    updateName = () => {
        this.setState({ projectName: document.getElementById("modify-project-name").value })
    }
    updateCategory = () => {
        this.setState({ projectCategory: document.getElementById("modify-category").value })
    }

    render() {
        return (
                <form className="ui form" onSubmit={this.preventDefaultAction}>
                    <div className="field">
                        <label>Project Title</label>
                        <input type="text" id="modify-project-name" name="modify-project-name" value={this.props.project['title']} onChange={this.updateName} />
                    </div>
                    <div className="field">
                        <label>Project Category</label>
                        <input type="text" id='modify-category' name="modify-category" value={this.props.project['category']} onChange={this.updateCategory} />
                    </div>
                    <div className="field">
                        <label>Project Purpose</label>
                        <input type="text" id='modify-purpose' name="modify-purpose" value={this.props.project['purpose']} onChange={this.updatePurpose} />
                    </div>
                    <button className="ui button" type="submit" onClick={this.sendUpdateProject}>Submit</button>
                    <button className="ui red button" type="button" onClick={this.sendUpdateProject}>Cancel</button>
                    
                </form>
        )
    }
}

export default ModifyProject;