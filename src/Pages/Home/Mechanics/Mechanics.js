import React, { useEffect, useState } from 'react';
import Mechanic from '../Mechanic/Mechanic';

const Mechanics = () => {
    const [mechanics,setMechanics] = useState([]);
    useEffect(()=>{
        fetch('mechanics.json')
        .then(res => res.json())
        .then(data => setMechanics(data))
    },[])
    return (
        <div>
            <h1 className='text-center text-primary my-5'>Our Mechanics : {mechanics.length}</h1>
            <div className='container'>
               <div className="row g-5">
               {
                mechanics.map(mechanic => <Mechanic key={mechanic.id} mechanic = {mechanic}></Mechanic>)
            }
              </div> 
            </div>
        </div>
    );
};

export default Mechanics;