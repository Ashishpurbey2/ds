import React from 'react'
import Modal from 'react-modal'
import { useState, useEffect } from 'react'
Modal.setAppElement('#root')
const AsideRight = () => {
  const [width, setWidth] = useState(window.innerWidth - 90)
  const [modalisOpen, setmodalisOpen] = useState(false);
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
        <img src='./images/img4.png' onClick={()=>setmodalisOpen(true)}></img>
        <p>Templates</p>
      </div>
      <div>
        <img src='./images/img4.png' onClick={()=>setmodalisOpen(true)}></img>
        <p className='extraMargin'>uploads</p>
      </div>
      <div>
        <img src='./images/img4.png' onClick={()=>setmodalisOpen(true)}></img>
        <p className='extraMargin'>Pictures</p>
      </div>
      <div>
        <img src='./images/Videos@1X.png' onClick={()=>setmodalisOpen(true)}></img>
        <p className='extraMargin'>Videos</p>
      </div>
      <Modal isOpen={modalisOpen} onRequestClose={()=>setmodalisOpen(false)}
      style={
        {
          overlay: {
            backgroundColor: 'white',
            
          },
          content: {
            color: 'orange',
            backgroundColor: 'grey',
            top: '120px',
            left: '300px',
            right: '300px',
            bottom: '100px'
          }
        }
      }>
        <h2>Upload File Here</h2>
        <button>Upload File</button>
        <button onClick={()=>setmodalisOpen(false)}>Close</button>
      </Modal>
    </div>
  )
}

export default AsideRight
