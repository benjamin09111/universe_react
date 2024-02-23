import React from 'react'

const Planet = ({index, name, size, material, physical_characteristics, orbit_time, fun_fact}) => {
    return (
        <div key={index} className='flex flex-col justify-center items-start'>
            <h5>{name}</h5>
            <p>{size}</p>
            <p>{material}</p>
        </div>
    )
}

export default Planet