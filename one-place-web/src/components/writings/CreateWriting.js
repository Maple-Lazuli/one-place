import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import Backend from "../../api/backend"
class CreateWriting extends React.Component {
    state = {
        writingTitle: "",
        imageDataURL: null,
        imageSaveData: null
    }

    preventDefaultAction = (e) => {
        e.preventDefault();
    }

    sendNewWriting = async (e) => {

        e.preventDefault();
        const response = await Backend.post(
            '/writing', {
            data: {
                "title": this.state.writingTitle,
                "pageID":this.props.currentPage.id,
                "creation_date": Date.now(),
            }
        });
        this.props.refreshPage()
        this.props.complete()

        window.open("http://"+ window.location.hostname +":3003/" + response.data['writingID'] + ":" + response.data['pageID'], "_blank")
    }

    updateTitle = () => {
        this.setState({ writingTitle: document.getElementById("writing-title").value })
    }

    updateImageData = (ref, dataURL, saveData) => {
        this.setState({imageDataURL : dataURL, imageSaveData : saveData, cavasRef: ref })
    }



    render() {
        return (
            <form className="ui form" onSubmit={this.preventDefaultAction}>
                <div className="field">
                    <label>Title</label>
                    <input type="text" id="writing-title" name="writing-title" placeholder="Title" onChange={this.updateTitle} />
                </div>
                {/* <WritingArea updateImageData={this.updateImageData} getImageLoadData={this.state.imageSaveData}/> */}
                <button className="ui button" type="submit" onClick={this.sendNewWriting}>Submit</button>

            </form>
        )
    }
}
export default CreateWriting