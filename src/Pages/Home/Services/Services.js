import React, { useEffect, useState } from 'react';
import Mechanics from '../Mechanics/Mechanics';
import Service from '../Service/Service';

const Services = () => {
    const [services,setServices] = useState([]);
    useEffect(()=>{
        fetch('services.json')
        .then(res => res.json())
        .then(data => setServices(data))
    },[]);
    return (
        <div className='container'>
            <h1 className='text-center text-primary my-5'>Our Services</h1>
            <div className="row g-5">
            {
                services.map(service =><Service key={service.id} service = {service}></Service>)
            }
            </div>
            <Mechanics></Mechanics>
        </div>
    );
};

export default Services;