import React from 'react'

import HeaderLeft from './HeaderLeft'
import HeaderCenter from './HeaderCenter'
import HeaderRight from './HeaderRight'

export default function Header() {
  return (
    <div className='header'>
      <HeaderLeft />
      <HeaderCenter />
      <HeaderRight />
    </div>
  )
}
