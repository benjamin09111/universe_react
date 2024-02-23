import React from 'react'
import back from "../assets/planet4.png"
import "./styles.css"

const About = () => {
    return (
        <section id='about' className='about__section flex flex-col justify-center items-center relative mt-12 overflow-hidden'>
            <div className='flex flex-col px-6 lg:px-0 lg:w-1/3 justify-center items-center relative'>
                <img src={back} alt="" className='img2 absolute'/>
                <h4 className='text-5xl font-semibold title-gold text-center'>About</h4>
                <div className='flex flex-col gap-6 py-6 text-gray-400 text-xl justify-center items-center'>
                <p className='text-center lg:text-left'>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque quaerat deserunt adipisci facilis. Blanditiis iste placeat dolorum amet exercitationem natus.
                </p>
                <p className='text-center lg:text-left'>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque quaerat deserunt adipisci facilis. Blanditiis iste placeat dolorum amet exercitationem natus.
                </p>
                <a href="/" className='custom-btn'>Search for more</a>
                </div>
            </div>
        </section>
    )
}

export default About