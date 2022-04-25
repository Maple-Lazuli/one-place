import React from "react";
import 'semantic-ui-css/semantic.min.css';
import CanvasDraw from "react-canvas-draw";


class WritingArea extends React.Component {

    state = {
        brushRadius: 1,
        lazyRadius: 3,
    }


    clearCanvas = (e) => {
        e.preventDefault();
        this.saveableCanvas.eraseAll();

    }


    updateData = () => {
        this.props.updateImageData(this.saveableCanvas, this.saveableCanvas.getDataURL(), this.saveableCanvas.getSaveData())
    } 

    loadData = () => {
        this.saveableCanvas.loadSaveData(this.props.getImageLoadData)
    }

    increaseBrushRadius = () => {
        this.setState({ brushRadius: this.state.brushRadius + 1 })
    }


    decreaseBrushRadius = () => {
        this.setState({ brushRadius: this.state.brushRadius - 1 })
    }


    increaseLazyRadius = () => {
        this.setState({ lazyRadius: this.state.lazyRadius + 1 })
    }

    decreaseLazyhRadius = () => {
        this.setState({ lazyRadius: this.state.lazyRadius - 1 })
    }

    render() {
        return (

            <div>

                <div className="ui horizontal list">
                <div className="item">
                        <button className="ui negative basic button" onClick={this.clearCanvas}>Clear</button>
                    </div>
                    <div className="item">
                        <button className="ui negative button" onClick={this.loadData}>Load</button>
                    </div>
                    <div className="item">
                        <button className="ui secondary basic button" onClick={this.increaseBrushRadius}>B+</button>
                    </div>
                    <div className="item">
                        <button className="ui secondary basic button" onClick={this.decreaseBrushRadius}>B-</button>
                    </div>
                    <div className="item">
                        <button className="ui secondary basic button" onClick={this.increaseLazyRadius}>L+</button>
                    </div>
                    <div className="item">
                        <button className="ui secondary basic button" onClick={this.decreaseLazyhRadius}>L-</button>
                    </div>
                </div>
                <div onMouseUp={this.updateData}>
                    <CanvasDraw
                        ref={canvasDraw => (this.saveableCanvas = canvasDraw)}
                        brushColor={"white"}
                        backgroundColor={'black'}
                        brushRadius={this.state.brushRadius}
                        lazyRadius={this.state.lazyRadius}
                        canvasWidth={this.state.width}
                        canvasHeight={this.state.height}
                    />
                </div>
            </div>
        )
    }
}

export default WritingArea;
