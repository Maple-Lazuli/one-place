import React from "react";
import 'semantic-ui-css/semantic.min.css';
import CanvasDraw from "react-canvas-draw";


class WritingArea extends React.Component {


    updateData = () => {
        this.props.updateImageData(this.saveableCanvas, this.saveableCanvas.getDataURL(), this.saveableCanvas.getSaveData())
    }


    getImageURL = () => {
        if (this.props.currentWriting['id'] == 'None') {
            return ""
        } else {
            return "http://"+ window.location.hostname +":3001/images?image=" + this.props.currentWriting['image_name']
        }
    }

    render() {
        return (

            <div className="pusher" >

                <div>
                    <div onMouseUp={this.updateData} style={{ 'display': this.props.displayDraw }}>
                        <CanvasDraw
                            ref={canvasDraw => (this.saveableCanvas = canvasDraw)}
                            brushColor={"black"}
                            backgroundColor={'gold'}
                            brushRadius={this.props.brushRadius}
                            lazyRadius={this.props.lazyRadius}
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
