import React, { useEffect, useState } from 'react';
import planetsJSON from "../data/planets.json";

const PlanetsComponent = () => {
    const [planets, setPlanets] = useState([]);

    useEffect(()=> {
        setPlanets(planetsJSON);
        console.log(planets);
    }, [])

    return (
        <div className='flex flex-col justify-center items-center relative'>
            <h1 className='text-4xl font-semibold'>Planets</h1>
            <ul>
                {planets.map((planet, index) => (
                    <li key={index}>{planet.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default PlanetsComponent;
