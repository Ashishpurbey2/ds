import React from 'react'
import '../assets/css/HomeScreen.css'
import Header1 from '../ components.js/Header1'
import Header2 from '../ components.js/Header2'
import Dropdown1 from '../ components.js/Dropdown1'
import AsideLeft from '../ components.js/AsideLeft'
import AsideRight from '../ components.js/AsideRight'
import Canvas from '../ components.js/Canvas'

const HomeScreen = () => {
  return (
    <div
      className='body1'
      style={{ color: '#9B9B9B', position: 'relative' }}
      className='dropdown2'
    >
      <Dropdown1 />
      <Header1 />
      <Header2 />
      <div
        style={{
          backgroundColor: '#E4E4E4',
          width: '100%',
        }}
        className='aside'
      >
        <AsideLeft />
        <Canvas />
        <AsideRight />
      </div>
    </div>
  )
}

export default HomeScreen
