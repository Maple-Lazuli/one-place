import React from "react";
import 'semantic-ui-css/semantic.min.css';
import CanvasDraw from "react-canvas-draw";


class WritingArea extends React.Component {


    updateData = () => {
        this.props.updateImageData(this.saveableCanvas, this.saveableCanvas.getDataURL(), this.saveableCanvas.getSaveData())
    }


    getImageURL = () => {
        if (this.props.currentWriting['image_name'] == 'None') {
            return ""
        } else {
            return "http://" + window.location.hostname + ":3001/images?image=" + this.props.currentWriting['image_name']
        }
    }

    clearCanvas = (e) => {
        this.saveableCanvas.eraseAll();

    }

    loadData = () => {
        this.saveableCanvas.loadSaveData(this.props.loadData)
    }

    render() {
        return (

            <div className="pusher" >

                <div>
                    <div style={{ 'display': this.props.displayDraw }}>
                        <button className="ui negative small basic button" onClick={this.clearCanvas}>Clear</button>
                        <button className="ui negative small basic button" onClick={this.loadData}>Load</button>
                        <button className="ui positive small basic button" onClick={this.updateData}>Send</button>
                        <CanvasDraw
                            ref={canvasDraw => (this.saveableCanvas = canvasDraw)}
                            brushColor={"white"}
                            backgroundColor={"black"}
                            brushRadius={this.props.brushRadius}
                            lazyRadius={this.props.lazyRadius}
                            loadTimeOffset={1}
                            canvasWidth={window.window.innerWidth}
                            canvasHeight={Math.floor(window.innerHeight * .965)}
                        />
                    </div>
                    <div style={{ 'display': this.props.displayImage }}>
                        <img src={this.getImageURL()} />
                    </div>
                </div>
            </div>
        )
    }
}

export default WritingArea;
