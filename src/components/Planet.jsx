import React from 'react'

const Planet = ({index, name, size, material, physical_characteristics, orbit_time, fun_fact}) => {
    return (
        <div key={index} className='flex px-6 lg:px-0 text-gray-300 flex-col justify-center items-center lg:items-start'>
            <h5 className='text-3xl mb-6 font-semibold title-gold text-center mt-12 hidden lg:block'>{name}</h5>
            <div className='flex gap-1 justify-center items-center text-xl'>
                <span className="icon-[mdi--world]"></span>
                <p>{size}</p>
            </div>
            <div className='flex gap-1 justify-center items-center text-xl'>
                <span className="icon-[lets-icons--materials]"></span>
                <p>{material}</p>
            </div>
            <div className='flex gap-1 justify-center items-center text-xl'>
                <span className="icon-[mingcute--time-line]"></span>
                <p>{orbit_time}</p>
            </div>
            <div className='flex gap-1 justify-center items-center text-xl'>
                <span className="icon-[material-symbols--info-outline] hidden lg:block"></span>
                <p className='text-center lg:text-left'>{physical_characteristics}</p>
            </div>
            <div className='flex gap-1 justify-center items-center text-xl'>
                <span className="icon-[material-symbols--fact-check-outline] hidden lg:block"></span>
                <p className='text-center lg:text-left'>{fun_fact}</p>
            </div>
        </div>
    )
}

export default Planet