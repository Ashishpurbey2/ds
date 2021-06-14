

import React, { Component } from 'react'
import { render } from "react-dom";
import { Stage, Layer, Rect, Text } from "react-konva";

export class TextKonva extends Component {
    state = {
        newTextObj: {
          textEditVisible: false,
          textX: 0,
          fill: "black",
          textY: 0,
          textValue: "double click to edit\n\nand enter to finish",
          fontSize: 8,
          width: 400,
          fontStyle: "normal",
          align: "left",
          id: 0
        }
      };
    
      handleTextareaKeyDown = e => {
        if (e.keyCode === 13) {
          let { newTextObj } = this.state;
    
          newTextObj.textEditVisible = false;
          this.setState({
            newTextObj
          });
        }
      };
    
      handleTextEdit = e => {
        let { newTextObj } = this.state;
        newTextObj.textValue = e.target.value;
        this.setState({
          newTextObj
        });
      };
    
      handleTextDblClick = e => {
        const absPos = e.target.getAbsolutePosition();
        let { newTextObj } = this.state;
        newTextObj.textEditVisible = true;
        newTextObj.textX = absPos.x;
        newTextObj.textY = absPos.y;
        this.setState({
          newTextObj
        });
      };
      render() {
        return (
          <div>
            <Stage width={window.innerWidth} height={window.innerHeight}>
              <Layer>
                <Text
                  fontSize={20}
                  align={"left"}
                  fontStyle={20}
                  draggable
                  text={this.state.newTextObj.textValue}
                  x={100}
                  y={100}
                  wrap="word"
                  width={this.state.newTextObj.width}
                  onDblClick={e => this.handleTextDblClick(e)}
                />
              </Layer>
            </Stage>
            <textarea
              value={this.state.newTextObj.textValue}
              style={{
                display: this.state.newTextObj.textEditVisible ? "block" : "none",
                position: "absolute",
                top: this.state.newTextObj.textY + "px",
                left: this.state.newTextObj.textX + "px"
              }}
              onChange={e => this.handleTextEdit(e)}
              onKeyDown={e => this.handleTextareaKeyDown(e)}
            />
          </div>
        );
      }
}

export default TextKonva;
