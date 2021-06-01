import React from 'react'
import { useState, useEffect } from 'react'

const AsideRight = () => {
  const [width, setWidth] = useState(window.innerWidth - 90)

  function myFunction() {
    setWidth(window.innerWidth - 90)
    console.log(window.innerHeight)
  }
  window.onresize = myFunction
  return (
    <div
      style={{
        width: '80px',
        height: '100vh',
        backgroundColor: '#F5F5F5',
        marginTop: '85px',
        position: 'fixed',
        left: `${width + 'px'}`,
      }}
      className='asideRight'
    >
      <div>
        <img src='./images/img4.png'></img>
        <p>Templates</p>
      </div>
      <div>
        <img src='./images/img4.png'></img>
        <p className='extraMargin'>uploads</p>
      </div>
      <div>
        <img src='./images/img4.png'></img>
        <p className='extraMargin'>Pictures</p>
      </div>
      <div>
        <img src='./images/Videos@1X.png'></img>
        <p className='extraMargin'>Videos</p>
      </div>
    </div>
  )
}

export default AsideRight