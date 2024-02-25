import React from 'react'
import back from "../assets/planet4.png"
import "./styles.css"

const About = () => {
    return (
        <section id='about' className='about__section flex flex-col justify-center items-center relative mt-12 overflow-hidden'>
            <div className='flex flex-col px-6 lg:px-0 lg:w-1/3 justify-center items-center relative'>
                <img src={back} alt="" className='img2 absolute' />
                <h4 className='text-5xl font-semibold title-gold text-center'>About</h4>
                <div className='flex flex-col gap-6 py-6 text-gray-300 text-xl justify-center items-center'>
                    <p className='text-center lg:text-left'>
                    Explore the planets of our solar system in this React project. With stunning visuals and easy navigation, you can learn about each planet's unique features and view captivating images of the cosmos. Whether you're a space enthusiast or just curious, this project offers an engaging experience.
                    </p>
                    <p className='text-center lg:text-left'>
                    Combining my technical skills with a passion for space, I've created an interactive platform that brings the universe to life. From Venus to Saturn, each planet is detailed with information and imagery from reputable sources. I hope this project sparks your curiosity and encourages further exploration.
                    </p>
                    <p className='text-gray-300 text-md text-center lg:text-right w-full'>All Rights Reserved - BMP</p>
                    <p className='text-gray-300 text-md text-center lg:text-right w-full'>PixelSquid Images</p>
                    <a target='_blank' href="https://theuniverseproject.netlify.app" className='custom-btn'>Search for more</a>
                </div>
            </div>
        </section>
    )
}

export default About