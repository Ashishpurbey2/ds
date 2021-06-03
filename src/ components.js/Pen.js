import React from 'react'
import { render } from 'react-dom'
import { Stage, Layer, Line, Text } from 'react-konva'
import { useState, useRef } from 'react'
const Pen = (props) => {
  const [tool, setTool] = React.useState('pen')
  const [lines, setLines] = React.useState([])
  const isDrawing = React.useRef(false)

  const handleMouseDown = (e) => {
    isDrawing.current = props.penVisible
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

  return (
    <div
      style={{
        zIndex: '1',
      }}
    >
      <Stage
        width={window.innerWidth - 180}
        height={window.innerHeight}
        onMouseDown={handleMouseDown}
        onMousemove={handleMouseMove}
        onMouseup={handleMouseUp}
        style={{
          marginLeft: '60px',
          marginRight: '100px',
          marginTop: '100px',
          marginLeft: 'auto',
          marginRight: 'auto',
          marginLeft: '70px',
          maxWidth: `${window.innerWidth - 150}`,
          backgroundColor: 'white',
        }}
      >
        <Layer>
          {lines.map((line, i) => (
            <Line
              key={i}
              points={line.points}
              stroke='#df4b26'
              strokeWidth={10}
              tension={0.5}
              lineCap='round'
              globalCompositeOperation={
                line.tool === 'eraser' ? 'destination-out' : 'source-over'
              }
            />
          ))}
        </Layer>
      </Stage>
      {/* <select
        value={tool}
        onChange={(e) => {
          setTool(e.target.value)
        }}
        style={{}}
      >
        <option value='pen'>Pen</option>
        <option value='eraser'>Eraser</option>
        <option value='none'>None</option>
      </select> */}
    </div>
  )
}

export default Pen
