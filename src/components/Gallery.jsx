import React from 'react'
import PhotosFlex from "./PhotosFlex"
import "./styles.css"

const Gallery = () => {
    return (
        <section id='gallery' className='about__section flex flex-col w-full justify-center items-center'>
            <h4 className='text-5xl font-semibold title-gold text-center mt-12'>GALLERY</h4>
            <div className='mt-6 px-3'>
                <PhotosFlex />
            </div>
        </section>
    )
}

export default Gallery