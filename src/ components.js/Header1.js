import React, {useState} from 'react'
import Model from '../screens/Model'
import Model1 from '../screens/Model1'
import Model2 from '../screens/Model2'
import Model3 from '../screens/Model3'
import Model4 from '../screens/Model4'

const Header1 = () => {
  const [ view, setView ] = useState(false)
  return (
    <section
      className='section1'
      style={{
        width: '100%',
        height: '41px',
        backgroundColor: '#E4E4E4',
        position: 'fixed',
        zIndex:"10"
      }}
      className='top1'
    >
      <img src='./images/img2.png'></img>
      <p style={{cursor:"pointer"}} onClick={()=>{
        setView(!view)
      }}>Files</p>
      <div style={{display:view ? "block":"none"}}>
        <Model />
      </div>
      <p style={{cursor:"pointer"}} onClick={()=>{
        setView(!view)
      }}>Edit</p>
      <div style={{display:view ? "block":"none"}}>
        <Model1 />
      </div>
      <p style={{cursor:"pointer"}}  onClick={()=>{
        setView(!view)
      }}>View</p>
      <div style={{display:view ? "block":"none"}} onClick={()=>{
        setView(!view)
      }}>
        <Model2/>
      </div>
      <p style={{cursor:"pointer"}} onClick={()=>{
        setView(!view)
      }}>Window</p>
      <div style={{display:view ? "block":"none"}}>
        <Model3/>
      </div>
      <p style={{cursor:"pointer"}} onClick={()=>{
        setView(!view)
      }}>Help</p>
      <div style={{display:view ? "block":"none"}}>
        <Model4/>
      </div>
    </section>
  )
}

export default Header1
