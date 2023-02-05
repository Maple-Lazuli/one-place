import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import Backend from '../../api/backend'
import './snippetstyles.css'

class EditCodeSnippet extends React.Component {

    state = {
        snippetTitle: this.props.currentSnippet['title'],
        snippetDesc: this.props.currentSnippet['description'],
        snippetLang: this.props.currentSnippet['language'],
        snippetCode: this.props.currentSnippet['raw'],
        snippetID: this.props.currentSnippet['id']
    }

    preventDefaultAction = (e) => {
        e.preventDefault();
    }

    sendSnippetUpdate = async (e) => {
        e.preventDefault();
        const response = await Backend.put(
            '/snippets', {
            data: {
                "title": this.state.snippetTitle,
                "description": this.state.snippetDesc,
                "language": this.state.snippetLang,
                "code": this.state.snippetCode,
                "pageID": this.props.currentPage['id'],
                "snippetID": this.props.currentSnippet['id']
            }
        });
        this.props.refreshPage()
        this.props.closeSnippet()
    }

    populateFields = () => {
        if (this.state.snippetID !== this.props.currentSnippet['id']) {
            this.setState({
                snippetTitle: this.props.currentSnippet['title'],
                snippetDesc: this.props.currentSnippet['description'],
                snippetLang: this.props.currentSnippet['language'],
                snippetCode: this.props.currentSnippet['raw'],
                snippetID: this.props.currentSnippet['id']
            })
        }
    }

    updateTitle = () => {
        this.setState({ snippetTitle: document.getElementById("modify-snippet-title").value })
    }
    updateDescription = () => {
        this.setState({ snippetDesc: document.getElementById("modify-snippet-desc").value })
    }
    updateLanguage = () => {
        this.setState({ snippetLang: document.getElementById("modify-snippet-lang").value })
    }
    updateCode = () => {
        this.setState({ snippetCode: document.getElementById("modify-snippet-code").value })
    }

    render() {
        return (
            <form className="ui form" onSubmit={this.preventDefaultAction}>

                <div className="field">
                    <label>Title</label>
                    <input type="text" id="modify-snippet-title" name="modify-snippet-title" placeholder={this.props.currentSnippet['title']} value={this.state.snippetTitle} onChange={this.updateTitle} onClick={this.populateFields}/>
                </div>
                <div className="field">
                    <label>Description</label>
                    <input type="text" id="modify-snippet-desc" name="modify-snippet-desc" placeholder={this.props.currentSnippet['description']} value={this.state.snippetDesc} onChange={this.updateDescription} onClick={this.populateFields} />
                </div>
                <div className="field">
                    <label>Language</label>
                    <input type="text" id="modify-snippet-lang" name="modify-snippet-lang" placeholder={this.props.currentSnippet['language']} value={this.state.snippetLang} onChange={this.updateLanguage} onClick={this.populateFields}/>
                </div>
                <div className="field">
                    <label>Code</label>
                    <textarea type="text" id="modify-snippet-code" name="modify-snippet-code" placeholder={this.props.currentSnippet['raw']} value={this.state.snippetCode} onChange={this.updateCode} onClick={this.populateFields}/>
                </div>
                <button className="ui yellow button" type="submit" onClick={this.sendSnippetUpdate}>Update</button>

            </form>
        )
    }
}

export default EditCodeSnippet;