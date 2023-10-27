import React from 'react'
import logowhite from '../Assets/Movie App Logo white.png';
import search from '../Assets/Search.png';

const Header = (props) => {

  const { handleInputChange } = props;

  return (
    <header className='w-[100vw] h-28 p-3 flex items-center justify-between bg-gray-950'>
      <img src={logowhite} alt="logo" className=' w-72 pt-4' />
      <div className='input  w-[50%] flex justify-start items-center ' >
        <img src={search} alt="" className='w-16 px-3 z-50 ml-14' />

        <input type="text" value={props.value} placeholder='Search Movie' className=' w-[80%] ml-[-45px] rounded-lg px-7 border-[.3px] 
        border-black py-2  text-black focus:outline-none ' onChange={handleInputChange} />

      </div>
    </header>
  )
}

export default Header