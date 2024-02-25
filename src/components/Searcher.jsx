import React, { useEffect, useState } from 'react'
import Planet from "./Planet"
import planetsJSON from "../data/planets"
import "./styles.css"

const Searcher = () => {
    const [planets, setPlanets] = useState([]);
    const [search, setSearcher] = useState("");

    const searcher = (e) => {
        setSearcher(e.target.value);
    }

    const results = !search ? planets : planets.filter((dato) => dato.name.toLowerCase().includes(search.toLowerCase()) )

    useEffect(() => {
        setPlanets(planetsJSON);
        console.log(planets);
    }, [])

    return (
        <section id='search' className='about__section flex flex-col justify-center items-center relative mt-12 '>
            <div className='flex flex-col px-6 lg:px-0 lg:w-1/3 justify-center items-center relative'>
                <h4 className='text-5xl font-semibold title-gold text-center'>Solar System</h4>
                <p className='text-center mt-4 text-lg text-gray-300'>Take a look of the solar system planets</p>

                
                <div className='flex searcher__container'>
                    <div className='flex justify-center items-center px-2'>
                        <span class="icon-[material-symbols--search] text-xl"></span>
                    </div>
                    <input
                    value={search}
                    onChange={searcher}
                    type='search' className='bg-transparent focus:outline-none' placeholder="Search..." />
                </div>

            </div>
            <div className='flex justify-center flex-col items-center lg:items-start px-16 gap-4 mt-12 w-full'>
                {
                    results.map((planet, index) => (
                        <article className='planet__container flex justify-between items-center flex-col'>
                            <h5 className='text-3xl mb-6 font-semibold title-gold text-center mt-6  lg:hidden '>{planet.name}</h5>
                            <div className='flex flex-col lg:flex-row'>
                                <div className='w-96 lg:w-1/2'>
                                    <img src={planet.image} alt={`planet ${index}`} />
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
                            </div>
                        </article>

                    ))
                }
                {
                    results.length === 0 && <p className='text-center text-lg text-gray-300 underline'>No results found</p>
                }
            </div>
        </section>
    )
}

export default Searcher