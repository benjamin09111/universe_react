import React from 'react'
import portada from "../assets/port.png"
import planet1 from "../assets/planet1.png"
import planet2 from "../assets/sideplanet.png"
import "./styles.css"

const Header = () => {
    return (
        <>
        <header id='home' className='header flex flex-col gap-2 justify-center items-center relative'>
            <div className='text_container p-4 rounded-xl'>
                <h1 className='title-gold text-6xl lg:text-8xl text-center font-bold '>THE UNIVERSE</h1>
            </div>
            <div className='text-b absolute bottom-24 opacity-85 text-lg w-1/2 lg:w-1/4 rounded p-4'>
                <p className='text-center parraf'>"Discover your favorites planets and search around the universe, locking and observing different and amazing worlds."</p>
            </div>
            <div className='absolute img w-96 lg:w-1/2 2xl:w-1/3'>
                <img src={portada} alt="" />
            </div>
        </header>
        </>
    )
}

export default Header