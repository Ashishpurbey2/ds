import React from 'react'
import { useState, useEffect } from 'react'
import { ColorPicker , useColor } from 'react-color-palette'
import "react-color-palette/lib/css/styles.css";
import LineDropdown from './Buttons/lineDropdown';
import LineKonva from './shapes/line';


const AsideLeft = (props) => {
  const [color, setColor] = useColor("hex", "#121212");

  useEffect(()=>{
    props.onColorChange(color)
  })

  const [ visible, setVisible ] = useState(true)
  const [height, setHeight] = useState(window.innerHeight - 140)
  function myFunction() {
    setHeight(window.innerHeight - 140)
  }
  window.onresize = myFunction
  return (
    <div
      style={{
        width: '50px',
        height: '100vh',
        backgroundColor: '#F5F5F5',
        marginTop: '85px',
        position: 'fixed',
      }}
      className='asideLeft'
    >
      <div style={{position:"absolute",left:"3.1vw",bottom:"10vh",display:!visible ? "block":"none",zIndex:"10000000"}}>
        <ColorPicker width={300} height={200} style={{position:"absolute", left:"100vh"}} 
        color={color} 
        onChange={setColor} hideHSV dark/>;
      </div>
      <img style={{cursor:"pointer"}} src='./images/move@1X.png' alt="" ></img>
      <img style={{cursor:"pointer"}} src='./images/crop (1)@1X.png' alt=""></img>
      <img style={{cursor:"pointer"}} src='./images/line@1X.png' alt=""></img>
      <LineDropdown/>
      <img style={{cursor:"pointer"}} src='./images/img5.png' alt=""></img>
      <img style={{cursor:"pointer"}} src='./images/pen-tool@1X.png' alt="" ></img>
      <img style={{cursor:"pointer"}} src='./images/img3.png' alt="" 
        onClick={()=>{
          props.onSelect(color)
        }}
      ></img>
      <img style={{cursor:"pointer"}} src='./images/text@1X.png' alt=""></img>
      <img style={{cursor:"pointer"}} src='./images/paintbrush@1X.png' alt=""></img>
      <img style={{cursor:"pointer"}} src='./images/pallete@1X.png' onClick={()=>{
        setVisible(!visible)
        props.isVisible(visible)
      }}alt="" />
      <img style={{cursor:"pointer"}} src='./images/paint-bucket@1X.png' alt=""></img>
      <img style={{cursor:"pointer"}} src='./images/zoom (1)@1X.png' alt=""></img>
      <img style={{cursor:"pointer"}} src='./images/img5.png' alt=""></img>
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
