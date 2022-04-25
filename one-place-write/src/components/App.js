import React from "react";
import 'semantic-ui-css/semantic.min.css';
import MenuBar from "./MenuBar";
import Backend from "../api/backend";
import CanvasControls from "./CanvasControls";
import WritingArea from "./WritingArea";
import './App.css'
class App extends React.Component {

    state = {
        currentPage: {
            'Title': 'No Page Selected',
            'id': 'None',
            'writings': []
        },
        barState: "visible",
        bar: "ui visible inverted left vertical sidebar menu",
        currentWriting: {
            'title': "None",
            'id': "None",
            'save_data': "None"
        },
        pageID: "None",
        writingID: "None",
        brushRadius: 1,
        lazyRadius: 3,
        canvasRef: null,
        color: "black",
        displayDraw: "None",
        displayImage: ""
    }



    fetchPage = async () => {
        const response = await Backend.get(
            '/writing', {
            params: {
                "pageId": this.state.pageID,
                "writingId": this.state.writingID
            }
        });
        this.setState({
            currentPage: response.data['page'],
            currentWriting: response.data['writing']
        }, () => {
            if (this.state.currentWriting['image_name'] == "None") {
                this.setState({ displayDraw: "", displayImage: "None" })
            } else {
                this.setState({ displayDraw: "None", displayImage: "" })
            }
        })
        console.log("done")
    }

    toggleBar = () => {
        if (this.state.barState === "visible") {
            this.setState({ barState: "", bar: "ui inverted left vertical sidebar menu" })
        } else {
            this.setState({ barState: "visible", bar: "ui visible inverted left vertical sidebar menu" })
        }
    }

    sendData = async () => {
        const response = await Backend.put(
            '/writing', {
            data: {
                "pageID": this.state.currentPage['id'],
                "writingID": this.state.currentWriting['id'],
                "imageData": this.state.imageDataURL,
                "imageSaveData": this.state.imageSaveData
            }
        });
        this.setState({ currentWriting: response.data['writing'] })
    }


    componentDidMount() {
        let path = window.location.pathname.substring(1)
        let writingId = path.split(":")[0]
        let pageId = path.split(":")[1]
        this.setState({ pageID: pageId, writingID: writingId }, () => { this.fetchPage() })
    }

    toggleData = () => {
        if (this.state.displayDraw == "None") {
            this.setState({ displayDraw: "", displayImage: "None" })
        } else {
            this.setState({ displayDraw: "None", displayImage: "" })
        }
    }


    mutateLazyRadius = (change) => {
        if ((this.state.lazyRadius + change) > 0) {
            this.setState({ lazyRadius: this.state.lazyRadius + change })
        }
    }

    mutateBrushRadius = (change) => {
        if ((this.state.brushRadius + change) > 0) {
            this.setState({ brushRadius: this.state.brushRadius + change })
        }
    }

    mutateColor = (change) => {
        this.setState({ color: change })
    }


    updateImageData = (ref, dataURL, saveData) => {
        this.setState({ canvasRef: ref, imageDataURL: dataURL, imageSaveData: saveData })
    }




    render() {
        return (
            <div style={{ height: "100%", width: "100%" }}>
                <div>
                    <MenuBar currentPage={this.state.currentPage} currentWriting={this.state.currentWriting} toggleBar={this.toggleBar} />
                </div>
                <div id="appArea" className="ui bottom attached segment pushable" style={{ height: "97vh", width: "100%" }}>
                    <CanvasControls bar={this.state.bar}
                        mutateLazyRadius={this.mutateLazyRadius}
                        mutateBrushRadius={this.mutateBrushRadius}
                        mutateColor={this.mutateColor}
                        canvasRef={this.state.canvasRef}
                        sendData={this.sendData}
                        displayDraw={this.state.displayDraw}
                        toggleData={this.toggleData} />
                    <WritingArea brushRadius={this.state.brushRadius}
                        lazyRadius={this.state.lazyRadius}
                        color={this.state.color}
                        updateImageData={this.updateImageData}
                        mode={this.state.mode}
                        currentWriting={this.state.currentWriting}
                        displayDraw={this.state.displayDraw}
                        displayImage={this.state.displayImage} />
                </div>
            </div >)
    }
}

export default App;


