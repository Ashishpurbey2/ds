import logo from './logo.svg'
import './App.css'
import { useState, useEffect } from 'react'
import { DropdownButton, Dropdown } from 'react-bootstrap'

function App() {
  const [width, setWidth] = useState(window.innerWidth - 90)
  const [height, setHeight] = useState(window.innerHeight - 140)

  function myFunction() {
    setWidth(window.innerWidth - 90)
    setHeight(window.innerHeight - 140)
    console.log(window.innerHeight)
  }
  window.onresize = myFunction
  return (
    <div
      className='body1'
      style={{ color: '#9B9B9B', position: 'relative' }}
      className='dropdown2'
    >
      <DropdownButton id='dropdown-item-button' title='Hello' className='drop'>
        <Dropdown.Item as='button' className='dropitem1'>
          <img src='./images/img1.png'></img>
        </Dropdown.Item>
        <Dropdown.Item as='button' className='dropitem1'>
          <img src='./images/object-alignment-horizontal@1X.png'></img>
        </Dropdown.Item>
        <Dropdown.Item as='button' className='dropitem1'>
          <img src='./images/object-alignment-to-the-left@1X.png'></img>
        </Dropdown.Item>
        <Dropdown.Item as='button' className='dropitem1'>
          <img src='./images/horizontal-alignment@1X (1).png'></img>
        </Dropdown.Item>
        <Dropdown.Item as='button' className='dropitem1'>
          <img src='./images/object-alignment-at-the-bottom@1X.png'></img>
        </Dropdown.Item>
        <Dropdown.Item as='button' className='dropitem1'>
          <img src='./images/object-alignment-to-the-center@1X.png'></img>
        </Dropdown.Item>
        <Dropdown.Item as='button' className='dropitem1'>
          <img src='./images/object-alignment-to-the-top@1X.png'></img>
        </Dropdown.Item>
        <Dropdown.Item as='button' className='dropitem1'>
          <img src='./images/horizontal-alignment@1X.png'></img>
        </Dropdown.Item>
        <Dropdown.Item as='button' className='dropitem1'>
          <img
            src='./images/img4.png'
            style={{ width: '20px', height: '20px' }}
          ></img>
        </Dropdown.Item>
        <Dropdown.Item as='button' className='dropitem1'>
          <img
            src='./images/img4.png'
            style={{ width: '20px', height: '20px' }}
          ></img>
        </Dropdown.Item>
        <Dropdown.Item as='button' className='dropitem1'>
          <img
            src='./images/img4.png'
            style={{ width: '20px', height: '20px' }}
          ></img>
        </Dropdown.Item>
        <Dropdown.Item as='button' className='dropitem1'>
          <img
            src='./images/Videos@1X.png'
            style={{ width: '20px', height: '20px' }}
          ></img>
        </Dropdown.Item>
      </DropdownButton>

      <section
        className='section1'
        style={{
          width: '100%',
          height: '41px',
          backgroundColor: '#E4E4E4',
          position: 'fixed',
        }}
        className='top1'
      >
        <img src='./images/img2.png'></img>
        <p>File</p>
        <p>Edit</p>
        <p>View</p>
        <p>Window</p>
        <p>Help</p>
      </section>

      <section
        className='section2'
        style={{
          width: '100%',
          height: '41px',
          backgroundColor: '#F5F5F5',
          top: '41px',
          position: 'fixed',
          display: 'flex',
          flexDirection: 'row',
        }}
        className='top2'
      >
        <img src='./images/home@1X.png'></img>
        <p>Layers</p>
        <p>Library</p>
        <p>Transform</p>

        <div
          style={{ display: 'flex', flexDirection: 'row' }}
          className='top2_inside'
        >
          <img src='./images/img1.png'></img>
          <img src='./images/object-alignment-horizontal@1X.png'></img>
          <img src='./images/object-alignment-to-the-left@1X.png'></img>
          <img src='./images/horizontal-alignment@1X (1).png'></img>
          <div
            style={{
              width: '0px',
              height: '35px',
              border: '1px solid #6E6E6E',
              marginTop: '2px',
              marginLeft: '13px',
              marginRight: '10px',
            }}
            className='border1'
          ></div>
          <img
            src='./images/object-alignment-at-the-bottom@1X.png'
            className='special'
          ></img>
          <img src='./images/object-alignment-to-the-center@1X.png'></img>
          <img src='./images/object-alignment-to-the-top@1X.png'></img>
          <img src='./images/horizontal-alignment@1X.png'></img>
        </div>
      </section>

      <div
        style={{
          backgroundColor: '#E4E4E4',
          width: '100%',
        }}
        className='aside'
      >
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
        <canvas
          style={{
            width: '70vw',
            height: '200vh',
            backgroundColor: 'white',
            marginLeft: 'auto',
            marginRight: 'auto',
            marginTop: '100px',
          }}
          className='canvas'
        ></canvas>
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
      </div>
    </div>
  )
}

export default App
