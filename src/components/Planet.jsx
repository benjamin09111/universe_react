import React from 'react'

const Planet = ({index, name, size, material, physical_characteristics, orbit_time, fun_fact}) => {
    return (
        <div key={index} className='flex text-gray-300 flex-col justify-center items-start'>
            <h5 className='text-4xl font-bold mb-4 hidden lg:block text-white'>{name}</h5>
            <div className='flex gap-1 justify-center items-center text-xl'>
                <span class="icon-[mdi--world]"></span>
                <p>{size}</p>
            </div>
            <div className='flex gap-1 justify-center items-center text-xl'>
                <span class="icon-[lets-icons--materials]"></span>
                <p>{material}</p>
            </div>
            <div className='flex gap-1 justify-center items-center text-xl'>
                <span class="icon-[mingcute--time-line]"></span>
                <p>{orbit_time}</p>
            </div>
            <div className='flex gap-1 justify-center items-center text-xl'>
                <span class="icon-[material-symbols--info-outline]"></span>
                <p>{physical_characteristics}</p>
            </div>
            <div className='flex gap-1 justify-center items-center text-xl'>
                <span class="icon-[material-symbols--fact-check-outline]"></span>
                <p>{fun_fact}</p>
            </div>
        </div>
    )
}

export default Planet