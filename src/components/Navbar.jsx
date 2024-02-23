import React from 'react'
import "./styles.css"

const Navbar = () => {
    return (
        <navbar className="navbar flex-row justify-center items-center flex gap-2 lg:gap-10 pt-6 pb-4">
            <div className='flex w-1/2 gap-6 justify-center items-center'>
            <a href="#home">Home</a>
            <a href="#search">Search</a>
            <a href="#gallery">Gallery</a>
            <a href="#about">About</a>
            </div>
        </navbar>
    )
}

export default Navbar