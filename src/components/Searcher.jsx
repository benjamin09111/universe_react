import React, {useEffect, useState} from 'react'
import Planet from "./Planet"
import planetsJSON from "../data/planets"
import "./styles.css"

const Searcher = () => {
    const [planets, setPlanets] = useState([]);

    useEffect(()=> {
        setPlanets(planetsJSON);
        console.log(planets);
    }, [])

    return (
        <section id='search' className='about__section flex flex-col justify-center items-center relative mt-12 overflow-hidden'>
            <div className='flex flex-col px-6 lg:px-0 lg:w-1/3 justify-center items-center relative'>
                <h4 className='text-5xl font-semibold title-gold text-center'>Solar System</h4>
                <input type='search' className='mt-6 rounded focus:outline-none px-4 py-2' />
            </div>
            <div className='flex flex-col flex-wrap mt-12 w-fullgap-6'>
            {
                    planets.map((planet, index) => (
                        <article className='flex justify-between items-center'>
                            <div className=''>
                            <img className={`w-32`} src={planet.image} alt={`planet ${index}`} />
                            </div>
                            <Planet
                            index={index}
                            name={planet.name}
                            size={planet.size}
                            material={planet.material}
                            physical_characteristics={planet.physical_characteristics}
                            orbit_time={planet.orbit_time}
                            fun_fact={planet.fun_fact}
                            />
                        </article>
                        
                    ))
                }
            </div>
        </section>
    )
}

export default Searcher