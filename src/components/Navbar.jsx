import React, {useState} from 'react'
import "./styles.css"

const Navbar = () => {
    const [open, setOpen] = useState(false);

    return (
        <navbar className="navbar w-full lg:w-auto flex-row justify-center items-center gap-2 lg:gap-10 pt-6 pb-4">
            <div className='hidden lg:flex gap-6 justify-center items-center'>
            <a href="#home">Home</a>
            <a href="#search">System</a>
            <a href="#gallery">Gallery</a>
            <a href="#about">About</a>
            </div>
            <div className='flex lg:hidden w-full justify-between items-center px-6 text-2xl'>
                <p className='text-bold'>BMP</p>
                {
                    open ?
                    <span class="icon-[jam--menu] cursor-pointer text-3xl" onClick={()=> setOpen(!open)}></span>
                    :
                    <span class="icon-[gg--menu-right-alt] cursor-pointer" onClick={()=> setOpen(!open)}></span>
                }
            </div>
            {
                open && 
                <div className='navbar__overlay flex flex-col justify-center items-center w-full lg:hidden'>
                <a href="#home" className='w-full py-16 hover:bg-black  text-center' onClick={()=> setOpen(!open)}>Home</a>
                <a href="#search" className='w-full py-16 hover:bg-black  text-center' onClick={()=> setOpen(!open)}>System</a>
                <a href="#gallery" className='w-full py-16 hover:bg-black  text-center' onClick={()=> setOpen(!open)}>Gallery</a>
                <a href="#about" className='w-full py-16 hover:bg-black  text-center' onClick={()=> setOpen(!open)}>About</a>
                </div>
            }
        </navbar>
    )
}

export default Navbar