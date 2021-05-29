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
      <img src='./images/move@1X.png'></img>
      <img src='./images/crop (1)@1X.png'></img>
      <img src='./images/line@1X.png'></img>
      <img src='./images/img5.png'></img>
      <img src='./images/pen-tool@1X.png'></img>
      <img src='./images/img3.png'></img>
      <img src='./images/text@1X.png'></img>
      <img src='./images/paintbrush@1X.png'></img>
      <img src='./images/pallete@1X.png'></img>
      <img src='./images/paint-bucket@1X.png'></img>
      <img src='./images/zoom (1)@1X.png'></img>
      <img src='./images/img5.png'></img>
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
