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
        <img src='./images/img3.png'></img>
        <p>Layers</p>
        <p>Library</p>
        <p>Transform</p>
        <img src='./images/img1.png'></img>
        <img src='./images/img1.png'></img>
        <img src='./images/img1.png'></img>
        <img src='./images/img1.png'></img>
        <div
          style={{ width: '0px', height: '33px', border: '2px solid black' }}
        ></div>
        <img src='./images/img1.png'></img>
        <img src='./images/img1.png'></img>
        <img src='./images/img1.png'></img>
        <img src='./images/img1.png'></img>
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
          <img src='./images/img5.png'></img>
          <img src='./images/img5.png'></img>
          <img src='./images/img5.png'></img>
          <img src='./images/img5.png'></img>
          <img src='./images/img5.png'></img>
          <img src='./images/img5.png'></img>
          <img src='./images/img5.png'></img>
          <img src='./images/img5.png'></img>
          <img src='./images/img5.png'></img>
          <img src='./images/img5.png'></img>
          <img src='./images/img5.png'></img>
          <img src='./images/img5.png'></img>
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
            <img src='./images/img4.png'></img>
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
            <img src='./images/img4.png'></img>
            <p>Templates</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
