import React from 'react'

function Navbar() {
  return (
    <div className='flex justify-center items-center selection:text-orange-500'>
        <div className='flex justify-between bg-zinc-500 p-5 rounded-4xl w-[90%] m-3 shadow-xl shadow-zinc-400 hover:py-7 duration-500'>
        <div className='text-2xl font-bold '>
            iTask
        </div>
        <div className='text-zinc-800 text-4xl font-extrabold'>
            To Dos.
        </div>
        <nav className='flex gap-7 text-xl'>
            <a className='hover:font-bold duration-300 hover:text-zinc-300' href="">Home</a>
            <a className='hover:font-bold duration-300 hover:text-zinc-300' href="">About</a>
        </nav>
    </div>
    </div>
  )
}

export default Navbar
