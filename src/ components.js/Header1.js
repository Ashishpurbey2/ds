import React from 'react'

const Header1 = () => {
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
      <p>File</p>
      <p>Edit</p>
      <p>View</p>
      <p>Window</p>
      <p>Help</p>
    </section>
  )
}

export default Header1
