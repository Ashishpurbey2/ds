import React, {
  useRef,
  useContext,
  useState,
  createContext,
  useEffect,
} from 'react'
import { Layer, Rect, Stage, Line, Text } from 'react-konva'
import { render } from 'react-dom'

import Rectangle from './shapes/rectangle'
import { propTypes } from 'react-bootstrap/esm/Image'

export default function Canvas(props) {
  const { rects, setRect, color, visible, penVisible } = props
  const [selectedId, selectShape] = React.useState(null)
  
  const checkDeselect = (e) => {
    // deselect when clicked on empty area
    const clickedOnEmpty = e.target === e.target.getStage()
    if (clickedOnEmpty) {
      selectShape(null)
    }


    // Ashish
    isDrawing.current = !props.penVisible || !props.eraserVisible
    const pos = e.target.getStage().getPointerPosition()
    setLines([...lines, { tool, points: [pos.x, pos.y] }])
  }

  // const [eraserTool, setEraserTool] = React.useState('eraser')
  const [tool, setTool] = React.useState('pen')
  const [lines, setLines] = React.useState([])
  const isDrawing = React.useRef(false)

  const handleMouseDown = (e) => {
    isDrawing.current = !props.penVisible || !props.eraserVisible
    const pos = e.target.getStage().getPointerPosition()
    setLines([...lines, { tool, points: [pos.x, pos.y] }])
  }
  

  const handleMouseMove = (e) => {
    // no drawing - skipping
    if (!isDrawing.current) {
      return
    }
    const stage = e.target.getStage()
    const point = stage.getPointerPosition()
    let lastLine = lines[lines.length - 1]
    // add point
    lastLine.points = lastLine.points.concat([point.x, point.y])

    // replace last
    lines.splice(lines.length - 1, 1, lastLine)
    setLines(lines.concat())
  }

  const handleMouseUp = () => {
    isDrawing.current = false
  }
  useEffect(() => {
    !props.penVisible ? setTool('pen') : setTool('eraser')
    console.log(penVisible, props.eraserVisible)
  })
  useEffect(function () {
    if (!props.penVisible && !props.eraserVisible) {
      setTool('eraser')
    }
  })

  return (
    <>
      <Stage
        width={window.innerWidth}
        height={window.innerHeight}
        style={{
          width: '70vw',
          height: '200vh',
          // zIndex:-10,
          backgroundColor: 'white',
          marginLeft: 'auto',
          marginRight: 'auto',
          marginTop: '100px',
          marginBottom: '20px',
        }}
        className='canvas'
        onMouseDown={checkDeselect}
        onTouchStart={checkDeselect}
        // onMouseDown={handleMouseDown}
        onMousemove={handleMouseMove}
        onMouseup={handleMouseUp}
      >
        <Layer>
          {rects.map((rect, i) => {
            return (
              <Rectangle
                visible={visible}
                key={i}
                color={color}
                shapeProps={rect}
                isSelected={rect.id === selectedId}
                onSelect={() => {
                  selectShape(rect.id)
                }}
                onChange={(newAttrs) => {
                  const r = rects.slice()
                  r[i] = newAttrs
                  setRect(r)
                }}
              />
            )
          })}
          {/* pen */}
          {lines.map((line, i) => (
            <Line
              key={i}
              points={line.points}
              stroke='red'
              strokeWidth={5}
              tension={0.5}
              lineCap='round'
              globalCompositeOperation={
                line.tool === 'eraser' ? 'destination-out' : 'source-over'
              }
            />
          ))}
        </Layer>
      </Stage>
    </>
  )
}
