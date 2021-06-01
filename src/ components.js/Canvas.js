import React, {useContext, useState, createContext, useEffect} from 'react'
import { Layer, Rect, Stage } from 'react-konva'

import Rectangle from './shapes/rectangle'


export default function Canvas(props){

  const { rects , setRect, color, visible } = props;
  
  
  const [selectedId, selectShape] = React.useState(null);

  const checkDeselect = (e) => {
    // deselect when clicked on empty area
    const clickedOnEmpty = e.target === e.target.getStage();
    if (clickedOnEmpty) {
      selectShape(null);
    }
  };


  return (
    <Stage width={window.innerWidth} height={window.innerHeight}
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
    >
      <Layer>
        {rects.map((rect,i)=>{
          return(
            <Rectangle
            visible = {visible}
              key={i}
              color = {color}
              shapeProps={rect}
              isSelected={rect.id === selectedId}
              onSelect={() => {
                selectShape(rect.id);
              }}
              onChange={(newAttrs) => {
                const r = rects.slice();
                r[i] = newAttrs;
                setRect(r);
              }}
            />
          )}
        )}
      </Layer>
    </Stage>
  )
}


