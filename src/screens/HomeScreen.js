import React, { useState,useEffect } from 'react'
import '../assets/css/HomeScreen.css'
import Header1 from '../ components.js/Header1'
import Header2 from '../ components.js/Header2'
import Dropdown1 from '../ components.js/Dropdown1'
import AsideLeft from '../ components.js/AsideLeft'
import AsideRight from '../ components.js/AsideRight'
import Canvas from '../ components.js/Canvas'

const HomeScreen = () => {
  const [id, setId] = useState(0)
  const [color, setColor] = useState({})
  const [visible, setVisible] = useState(true)
  const [penVisible, setPenVisible] = useState(false)
  const [eraserVisible,setEraserVisible] = useState(false)
 

 

  const [rects, setRect] = useState([
    // {
    //   x:10,
    //   y:10,
    //   width:200,
    //   height:200,
    //   fill:"blue"
    // }
  ])

  function selectShape(color) {
    console.log(color)
    setId(id + 1)
    setRect(
      rects.concat({
        x: 10,
        y: 10,
        width: 100,
        height: 100,
        fill: color,
        id: `rect${id}`,
      })
    )
  }

  function onColorChange(color) {
    setColor(color)
  }

  function isVisible(visible) {
    console.log(visible)
    setVisible(!visible)
  }
  function onPenVisible(penVisible) {
    setPenVisible(!penVisible)
  }
  
  function onEraserVisible(eraserVisible){
    setEraserVisible(!eraserVisible)
  }


  return (
    <div
      className='body1'
      style={{ color: '#9B9B9B', position: 'relative' }}
      className='dropdown2'
    >
      <Dropdown1 />
      <Header1 />
      <Header2 />
      <div
        style={{
          backgroundColor: '#E4E4E4',
          width: '100%',
        }}
        className='aside'
      >
        <Canvas
          rects={rects}
          setRect={setRect}
          color={color}
          visible={visible}
          penVisible={penVisible}
          eraserVisible={eraserVisible}
        />

        <AsideLeft
          onSelect={selectShape}
          isVisible={isVisible}
          onColorChange={onColorChange}
          PenVisible={onPenVisible}
          EraserVisible={onEraserVisible}
        />

        <AsideRight />
      </div>
    </div>
  )
}

export default HomeScreen
