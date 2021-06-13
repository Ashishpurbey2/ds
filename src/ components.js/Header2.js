import React from 'react'

const Header2 = () => {
    return (
       
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
        // zIndex:"10"
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
    )
}

export default Header2
