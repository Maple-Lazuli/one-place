import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import Backend from "../../api/backend"
class CreateCodeSnippet extends React.Component {
    state = {
        snippetTitle: "",
        snippetDesc: "",
        snippetLang: "",
        snippetCode:""
    }

    preventDefaultAction = (e) => {
        e.preventDefault();
    }

    sendNewSnippet = async (e) => {
        e.preventDefault();
        const response = await Backend.post(
            '/snippets', {
            data: {
                "title": this.state.snippetTitle,
                "description": this.state.snippetDesc,
                "language": this.state.snippetLang,
                "code": this.state.snippetCode,
                "pageID":this.props.currentPage.id,
                "creation_date": Date.now(),
            }
        });
        this.props.refreshPage()
        this.props.complete()
    }

    updateTitle = () => {
        this.setState({ snippetTitle: document.getElementById("snippet-title").value })
    }
    updateDescription = () => {
        this.setState({ snippetDesc: document.getElementById("snippet-desc").value })
    }
    updateLanguage = () => {
        this.setState({ snippetLang: document.getElementById("snippet-lang").value })
    }
    updateCode = () => {
        this.setState({ snippetCode: document.getElementById("snippet-code").value })
    }


    render() {
        return (
            <form className="ui form" onSubmit={this.preventDefaultAction}>
                <div className="field">
                    <label>Title</label>
                    <input type="text" id="snippet-title" name="snippet-title" placeholder="Title" onChange={this.updateTitle} />
                </div>
                <div className="field">
                    <label>Description</label>
                    <input type="text" id="snippet-desc" name="snippet-desc" placeholder="Description" onChange={this.updateDescription} />
                </div>
                <div className="field">
                    <label>Language</label>
                    <input type="text" id="snippet-lang" name="snippet-lang" placeholder="Language" onChange={this.updateLanguage} />
                </div>
                <div className="field">
                    <label>Code</label>
                    <textarea type="text" id="snippet-code" name="snippet-code" placeholder="Source Code" onChange={this.updateCode} />
                </div>
                <button className="ui button" type="submit" onClick={this.sendNewSnippet}>Submit</button>
            </form>
        )
    }
}
export default CreateCodeSnippet