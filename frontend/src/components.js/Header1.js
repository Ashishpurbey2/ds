import React, {useState} from 'react'
import Model from '../screens/Model'
import Model1 from '../screens/Model1'
import Model2 from '../screens/Model2'
import Model3 from '../screens/Model3'
import Model4 from '../screens/Model4'

const Header1 = () => {
  const [ view, setView ] = useState(false)
  const [ view1, setView1 ] = useState(false)
  const [ view2, setView2 ] = useState(false)
  const [ view3, setView3 ] = useState(false)
  const [ view4, setView4 ] = useState(false)
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
        setView1(!view1)
      }}>Edit</p>
      <div style={{display:view1 ? "block":"none"}}>
        <Model1 />
      </div>
      <p style={{cursor:"pointer"}}  onClick={()=>{
        setView2(!view2)
      }}>View</p>
      <div style={{display:view2 ? "block":"none"}}>
        <Model2/>
      </div>
      <p style={{cursor:"pointer"}} onClick={()=>{
        setView3(!view3)
      }}>Window</p>
      <div style={{display:view3 ? "block":"none"}}>
        <Model3/>
      </div>
      <p style={{cursor:"pointer"}} onClick={()=>{
        setView4(!view4)
      }}>More</p>
      <div style={{display:view4 ? "block":"none"}}>
        <Model4/>
      </div>
    </section>
  )
}

export default Header1
