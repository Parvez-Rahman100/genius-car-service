import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const ServiceDetail = () => {
    const {serviceId} = useParams();
    const navigate = useNavigate();
    const handleCheckOut = ()=>{
        navigate('/checkout')
    }
    return (
        <div>
            <h1>Welcome to detail : {serviceId}</h1>
            <div>
                <button onClick={handleCheckOut} className='btn btn-primary'>Proceed Checkout</button>
            </div>
        </div>
    );
};

export default ServiceDetail;