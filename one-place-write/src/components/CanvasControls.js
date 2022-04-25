import React from "react";
import 'semantic-ui-css/semantic.min.css';


class CanvasControls extends React.Component {

    clearCanvas = (e) => {
        e.preventDefault();
        this.props.canvasRef.eraseAll();

    }

    loadData = () => {
        this.saveableCanvas.loadSaveData(this.props.getImageLoadData)
    }

    increaseBrushRadius = () => {
        this.props.mutateBrushRadius(2)
    }


    decreaseBrushRadius = () => {
        this.props.mutateBrushRadius(-2)
    }


    increaseLazyRadius = () => {
        this.props.mutateLazyRadius(2)
    }

    decreaseLazyhRadius = () => {
        this.props.mutateLazyRadius(-2)
    }

    sendData = () => {
        this.props.sendData()
    }


    mode = () => {
        if (this.props.displayDraw == ""){
            return "View"
        } else {
            return "Write"
        }
    }

    render() {
        return (

            <div className={this.props.bar} id="projectbar">
                <div>
                    <div>
                        <div className="item">
                            <button className="ui negative small basic button" onClick={this.clearCanvas}>Clear</button>
                            <button className="ui negative small basic button" onClick={this.props.toggleData}>{this.mode()}</button>
                            <button className="ui positive small basic button" onClick={this.sendData}>Send</button>
                            
                        </div>
                        <div className="item">
                            <button className="ui primary basic button" onClick={this.increaseBrushRadius}>B+</button>
                            <button className="ui primary basic button" onClick={this.decreaseBrushRadius}>B-</button>
                        </div>
                        <div className="item">
                            <button className="ui primary basic button" onClick={this.increaseLazyRadius}>L+</button>
                            <button className="ui primary basic button" onClick={this.decreaseLazyhRadius}>L-</button>
                        </div>
                    </div>
                </div >
            </div>
        )
    }
}

export default CanvasControls;
