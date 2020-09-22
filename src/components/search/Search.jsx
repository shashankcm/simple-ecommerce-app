import React from 'react'
import {IoIosSearch} from 'react-icons/io'

const Search = () => {
  return (
    <form className='search__form'>
      <IoIosSearch className='search__form--icon' />
      <input type='text' className='search__form--search' placeholder='search' />
    </form>
  )
}

export default Search
