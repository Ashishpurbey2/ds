import React from 'react'
import { DropdownButton, Dropdown } from 'react-bootstrap'

const Dropdown1 = () => {
  return (
    <DropdownButton id='dropdown-item-button' title='View' className='drop' style={{position:"fixed"}}>
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
  )
}

export default Dropdown1
