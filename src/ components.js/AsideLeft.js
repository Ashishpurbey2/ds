import React from 'react'
import { useState, useEffect } from 'react'
import { ColorPicker, useColor } from 'react-color-palette'
import 'react-color-palette/lib/css/styles.css'
// import {Button} from 'react-bootstrap'

const AsideLeft = (props) => {
  const [color, setColor] = useColor('hex', '#121212')
  const [pen, setPen] = useState(false)
  const [eraser,setEraser] = useState(false)
  useEffect(() => {
    props.onColorChange(color)
    props.PenVisible(pen)
    props.EraserVisible(eraser)
  })

  const [visible, setVisible] = useState(true)
  const [penVisible, setPenVisible] = useState('false')
  const [height, setHeight] = useState(window.innerHeight - 140)
  function myFunction() {
    setHeight(window.innerHeight - 140)
  }
  window.onresize = myFunction

  function myFunction2() {
    pen ? setPen(false) : setPen(true)
  }

  function myFunction3() {
    eraser?setEraser(false):setEraser(true)
  }



  return (
    <div
      style={{
        width: '50px',
        height: '100vh',
        backgroundColor: '#F5F5F5',
        marginTop: '85px',
        position: 'fixed',
        zIndex: '200',
      }}
      className='asideLeft'
    >
      <div
        style={{
          position: 'absolute',
          left: '3.1vw',
          bottom: '10vh',
          display: !visible ? 'block' : 'none',
          zIndex: '10000000',
        }}
      >
        <ColorPicker
          width={300}
          height={200}
          style={{ position: 'absolute', left: '100vh' }}
          color={color}
          onChange={setColor}
          hideHSV
          dark
        />
        ;
      </div>
      <img
        style={{ cursor: 'pointer' }}
        src='./images/move@1X.png'
        alt=''
      ></img>
      <img
        style={{ cursor: 'pointer' }}
        src='./images/crop (1)@1X.png'
        alt=''
      ></img>
      <img
        style={{ cursor: 'pointer' }}
        src='./images/line@1X.png'
        alt=''
      ></img>
      <img style={{ cursor: 'pointer' }} onClick={myFunction3} src='./images/img5.png' alt=''></img>

      <img
        style={{ cursor: 'pointer' }}
        onClick={myFunction2}
        src='./images/pen-tool@1X.png'
        alt=''
      ></img>

      <img
        style={{ cursor: 'pointer' }}
        src='./images/img3.png'
        alt=''
        onClick={() => {
          props.onSelect(color)
        }}
      ></img>

      <img
        style={{ cursor: 'pointer' }}
        src='./images/text@1X.png'
        alt=''
      ></img>
      <img
        style={{ cursor: 'pointer' }}
        src='./images/paintbrush@1X.png'
        alt=''
      ></img>
      <img
        style={{ cursor: 'pointer' }}
        src='./images/pallete@1X.png'
        onClick={() => {
          setVisible(!visible)
          props.isVisible(visible)
        }}
        alt=''
      />
      <img
        style={{ cursor: 'pointer' }}
        src='./images/paint-bucket@1X.png'
        alt=''
      ></img>
      <img
        style={{ cursor: 'pointer' }}
        src='./images/zoom (1)@1X.png'
        alt=''
      ></img>
      <div
        style={{
          // marginTop: `${height + 'px'}`,
          position: 'absolute',
          top: `${height + 'px'}`,
        }}
        className='asideBottom'
      >
        <img src='./images/presentation@1X.png'></img>
      </div>
    </div>
  )
}

export default AsideLeft
