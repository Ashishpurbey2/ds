import React from 'react'
import { useState, useEffect } from 'react'

const AsideLeft = () => {
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
      <img style={{cursor:"pointer"}} src='./images/move@1X.png' alt="" ></img>
      <img style={{cursor:"pointer"}} src='./images/crop (1)@1X.png' alt=""></img>
      <img style={{cursor:"pointer"}} src='./images/line@1X.png' alt=""></img>
      <img style={{cursor:"pointer"}} src='./images/img5.png' alt=""></img>
      <img style={{cursor:"pointer"}} src='./images/pen-tool@1X.png' alt=""></img>
      <img style={{cursor:"pointer"}} src='./images/img3.png' alt=""></img>
      <img style={{cursor:"pointer"}} src='./images/text@1X.png' alt=""></img>
      <img style={{cursor:"pointer"}} src='./images/paintbrush@1X.png' alt=""></img>
      <img style={{cursor:"pointer"}} src='./images/pallete@1X.png' alt=""></img>
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
