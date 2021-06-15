import React, { useState, useEffect } from 'react'
import '../assets/css/HomeScreen.css'
import Header1 from '../ components.js/Header1'
import Header2 from '../ components.js/Header2'
import Dropdown1 from '../ components.js/Dropdown1'
import AsideLeft from '../ components.js/AsideLeft'
import AsideRight from '../ components.js/AsideRight'
import Canvas from '../ components.js/Canvas'
import Modal from 'react-modal'
Modal.setAppElement('#root')

const HomeScreen = () => {
  const [id, setId] = useState(0)
  const [color, setColor] = useState({})
  const [visible, setVisible] = useState(true)
  const [penVisible, setPenVisible] = useState(false)
  const [eraserVisible, setEraserVisible] = useState(false)
  const [modalLayerisOpen, setmodalLayerisOpen] = useState(false)
  const [modalLibraryisOpen, setmodalLibraryisOpen] = useState(false)
  const [modalTransformisOpen, setmodalTransformisOpen] = useState(false)
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

  function onEraserVisible(eraserVisible) {
    setEraserVisible(!eraserVisible)
  }

  function modalLayer(data) {
    setmodalLayerisOpen(data)
    console.log('ashish', data)
  }

  function modalLibrary(data) {
    setmodalLibraryisOpen(data)
  }
  function modalTransform(data) {
    setmodalTransformisOpen(data)
  }

  return (
    <div
      className='body1'
      style={{ color: '#9B9B9B', position: 'relative' }}
      className='dropdown2'
    >
      <Dropdown1 />
      <Header1 />
      <Header2
        onModalLayer={modalLayer}
        onModalLibrary={modalLibrary}
        onModalTransform={modalTransform}
      />
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
        <Modal
          isOpen={
            modalLayerisOpen || modalLibraryisOpen || modalTransformisOpen
          }
          onRequestClose={() => {
            setmodalLayerisOpen(false)
            setmodalLibraryisOpen(false)
            setmodalTransformisOpen(false)
          }}
          style={{
            overlay: {
              backgroundColor: 'transparent',
              zIndex: '1',
            },
            content: {
              display: 'absolute',
              position: 'fixed',
              color: 'orange',
              backgroundColor: 'rgb(245,245,245)',
              left: '51px',
              bottom: '0px',
              width: '300px',
              marginRight: '35px',
              top: '82px',
            },
          }}
        >
          {modalLayerisOpen ? (
            <div>
            <h2 style={{color:"black", textAlign:"center", fontWeight:"lighter"}}>Layers</h2>

            <span style={{color:"black", display:"flex"}}><img src='./images/picture@1X (1).png' style={{margin:"1% 2% 0 0"}}></img>Picture</span>
	    <br/>
            <span style={{color:"black", display:"flex"}}><img src='./images/text-button@1X.png' style={{margin:"1% 2% 0 1%"}}></img>Text</span>
            <br/>
            <span style={{color:"black", display:"flex"}}><img src='./images/picture@1X (1).png' style={{margin:"1% 2% 0 0"}}></img>Picture</span>
	    <br/>
            <span style={{color:"black", display:"flex"}}><img src='./images/picture@1X (1).png' style={{margin:"1% 2% 0 0"}}></img>Picture</span>
	    <br/>
	    <span style={{color:"black", display:"flex"}}><img src='./images/text-button@1X.png' style={{margin:"1% 2% 0 1%"}}></img>Text</span>
            </div>
          ) :
           modalLibraryisOpen ? (
             <div>
            <h2 style={{color:"black", textAlign:"center", fontWeight:"lighter"}}>Library</h2>
            <span style={{color:"black", display:"flex"}}><img src='./images/picture@1X (1).png' style={{margin:"1% 2% 0 0"}}></img>Picture</span>
	    <br/>
            <span style={{color:"black", display:"flex"}}><img src='./images/text-button@1X.png' style={{margin:"1% 2% 0 1%"}}></img>Text</span>
            <br/>
            <span style={{color:"black", display:"flex"}}><img src='./images/picture@1X (1).png' style={{margin:"1% 2% 0 0"}}></img>Picture</span>
	    <br/>
            <span style={{color:"black", display:"flex"}}><img src='./images/picture@1X (1).png' style={{margin:"1% 2% 0 0"}}></img>Picture</span>
	    <br/>
	    <span style={{color:"black", display:"flex"}}><img src='./images/text-button@1X.png' style={{margin:"1% 2% 0 1%"}}></img>Text</span>
            </div>
          ) : (<div>
            <h2 style={{color:"black", textAlign:"center", fontWeight:"lighter"}}>Transform</h2>

            <span style={{color:"black", display:"flex"}}><img src='./images/picture@1X (1).png' style={{margin:"1% 2% 0 0"}}></img>Picture</span>
	    <br/>
            <span style={{color:"black", display:"flex"}}><img src='./images/text-button@1X.png' style={{margin:"1% 2% 0 1%"}}></img>Text</span>
            <br/>
            <span style={{color:"black", display:"flex"}}><img src='./images/picture@1X (1).png' style={{margin:"1% 2% 0 0"}}></img>Picture</span>
	    <br/>
            <span style={{color:"black", display:"flex"}}><img src='./images/picture@1X (1).png' style={{margin:"1% 2% 0 0"}}></img>Picture</span>
	    <br/>
	    <span style={{color:"black", display:"flex"}}><img src='./images/text-button@1X.png' style={{margin:"1% 2% 0 1%"}}></img>Text</span>
            </div>
          )}
          {/* <h1>Layer</h1> */}
        </Modal>
        <AsideRight />
      </div>
    </div>
  )
}

export default HomeScreen
