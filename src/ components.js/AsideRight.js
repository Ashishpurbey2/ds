import React from 'react'
import Modal from 'react-modal'
import { useState, useEffect } from 'react'
Modal.setAppElement('#root')
const AsideRight = () => {
  const [width, setWidth] = useState(window.innerWidth - 90)
  const [modalisOpen, setmodalisOpen] = useState(false)
  const [width1, setWidth1] = useState(window.innerWidth - 90)
  function myFunction() {
    setWidth(window.innerWidth - 90)
    setWidth1(window.innerWidth - 90)
    console.log('heeh', width1, width)
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
        zIndex: '1000',
      }}
      className='asideRight'
    >
      <div>
        <img src='./images/img4.png' onClick={() => setmodalisOpen(true)}></img>
        <p>Templates</p>
      </div>
      <div>
        <img src='./images/img4.png' onClick={() => setmodalisOpen(true)}></img>
        <p className='extraMargin'>uploads</p>
      </div>
      <div>
        <img src='./images/img4.png' onClick={() => setmodalisOpen(true)}></img>
        <p className='extraMargin'>Pictures</p>
      </div>
      <div>
        <img
          src='./images/Videos@1X.png'
          onClick={() => setmodalisOpen(true)}
        ></img>
        <p className='extraMargin'>Videos</p>
      </div>
      <div>
        <Modal
          isOpen={modalisOpen}
          onRequestClose={() => setmodalisOpen(false)}
          style={{
            overlay: {
              backgroundColor: 'transparent',
              zIndex: '10000',
            },
            content: {
              display: 'absolute',
              position: 'fixed',
              color: 'orange',
              backgroundColor: 'rgb(245,245,245)',
              left: { width1 },
              bottom: '0px',
              width: '300px',
              marginRight: '35px',
              top: '82px',
            },
          }}
        >
          <h2>Upload File Here</h2>
          <button>Upload File</button>
          <button onClick={() => setmodalisOpen(false)}>Close</button>
        </Modal>
      </div>
    </div>
  )
}

export default AsideRight
