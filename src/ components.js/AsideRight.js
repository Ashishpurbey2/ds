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
        textAlign:"center"
      }}
      className='asideRight'
    >
      <div style={{position:"relative", right:"12px"}}>
      <div class="image-upload">
        <label for="file-input" style={{cursor:"pointer"}}>
            <img src="./images/img4.png"/>
        </label>
        <input id="file-input" type="file" accept="image/*" style={{ display:"none" }}/>
        <p className='extraMargin'>Templates</p>
      </div>
      </div>
      <div style={{position:"relative", right:"12px"}}>
      <div class="image-upload" >
        <label for="file-input" style={{cursor:"pointer"}}>
            <img src="./images/img4.png"/>
        </label>
        <input id="file-input" type="file" accept="image/*" style={{ display:"none" }}/>
        <p className='extraMargin'>Uploads</p>
      </div>
      </div>
      <div style={{position:"relative", right:"12px"}}>
      <div class="image-upload">
        <label for="file-input" style={{cursor:"pointer"}}>
            <img src="./images/img4.png"/>
        </label>
        <input id="file-input" type="file" accept="image/*" style={{ display:"none" }}/>
        <p className='extraMargin'>Pictures</p>
      </div>
      </div>
      <div style={{position:"relative", right:"12px"}}>
      <div class="image-upload">
        <label for="file-input" style={{cursor:"pointer"}}>
            <img src="./images/Videos@1X.png"/>
        </label>
        <input id="file-input" type="file" accept="image/*" style={{ display:"none" }}/>
        <p className='extraMargin'>Videos</p>
      </div>
      </div>
    </div>
  )
}

export default AsideRight
