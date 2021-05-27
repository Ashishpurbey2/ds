import logo from './logo.svg'
import './App.css'

function App() {
  return (
    <div className='body1'>
      <section
        className='section1'
        style={{
          width: '100%',
          height: '41px',
          backgroundColor: '#E4E4E4',
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
        }}
        className='top2'
      >
        <img src='./images/home@1X.png'></img>
        <p>Layers</p>
        <p>Library</p>
        <p>Transform</p>
        <div className='container'>
        <img src='./images/img1.png'className='container'></img>
        <img src='./images/object-alignment-horizontal@1X.png'className='container'></img>
        <img src='./images/object-alignment-to-the-left@1X.png'className='container'></img>
        <img src='./images/horizontal-alignment@1X (1).png'className='container'></img>
       
       
        <img src='./images/object-alignment-at-the-bottom@1X.png'className='container'></img>
        <img src='./images/object-alignment-to-the-center@1X.png'className='container'></img>
        <img src='./images/object-alignment-to-the-top@1X.png'className='container'></img>
        <img src='./images/horizontal-alignment@1X.png'className='container'></img>
        </div>
      </section>
      <div
        style={{
          backgroundColor: '#E4E4E4',
          width: '100%',
          height: '100vh-61px',
        }}
        className='aside'
      >
        <div
          style={{
            width: '40px',
            height: '100vh',
            backgroundColor: '#F5F5F5',
            marginTop: '1px',
          }}
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
         <div class="abc"> <img src='./images/presentation@1X.png'></img></div>
        </div>
        <canvas
          style={{ width: '70vw', height: '100vh', backgroundColor: '#E4E4E4' }}
        ></canvas>
        <div
          style={{
            width: '70px',
            height: '100vh',
            backgroundColor: '#F5F5F5',
            marginTop: '1px',
          }}
        >
          <div>
            <img src='./images/img1.png'></img>
            <p>Templates</p>
          </div>
          <div>
            <img src='./images/img4.png'></img>
            <p>Templates</p>
          </div>
          <div>
            <img src='./images/img4.png'></img>
            <p>Templates</p>
          </div>
          <div>
            <img src='./images/Videos@1X.png'></img>
            <p>Videos</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
