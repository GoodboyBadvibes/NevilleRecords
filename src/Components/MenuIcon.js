'use client'

import React, { useState } from 'react'
import { Spin as Hamburger } from 'hamburger-react'
// import UseAnimations from 'react-useanimations';
// import menu from 'react-useanimations/lib/menu2'

const MenuIcon = ({color, setOpen, isOpen}) => {

  

  return (
    <>
      <div className='px-5 md:px-10 lg:px-20'>

        <Hamburger toggled={isOpen} toggle={setOpen} size={30} color={color}/>


















        {/* <UseAnimations animation={menu} strokeColor={color} size={50}
        onClick={() => {
          // eslint-disable-next-line
          console.log('additional onClick cb is working');
          setClick(!click)
        }}
        render={(eventProps, animationProps) => (
          <button type="button" {...eventProps}>
            <div {...animationProps} />
          </button>
        )}
        /> */}
      </div>
    </>
  )
}

export default MenuIcon