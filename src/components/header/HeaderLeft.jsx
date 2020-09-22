import React from 'react'
import Logo from '../../images/logo.svg'

export default function Headerleft() {
  return (
    <div className='header__left'>
      <img src={Logo} alt='Logo' className='header__left--image' />
    </div>
  )
}
