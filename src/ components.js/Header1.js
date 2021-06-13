import React, {useState} from 'react'
import Model from '../screens/Model'

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
      <p style={{cursor:"pointer"}}>Edit</p>
      <p style={{cursor:"pointer"}}>View</p>
      <p style={{cursor:"pointer"}}>Window</p>
      <p style={{cursor:"pointer"}}>Help</p>
    </section>
  )
}

export default Header1
