import React from 'react'
import PhotosFlex from "./PhotosFlex"
import PhotosGrid from "./PhotosGrid"
import "./styles.css"

const Gallery = () => {
    return (
        <section id='gallery' className='about__section flex flex-col justify-center items-center'>
            <h4 className='text-5xl font-semibold title-gold text-center mt-12'>GALLERY</h4>
            <div className="flex flex-col gap-6">
                <PhotosFlex />
                <PhotosGrid />
            </div>
        </section>
    )
}

export default Gallery