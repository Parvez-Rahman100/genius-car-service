import React from 'react';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <div>
            <h2 className='text-center text-primary mt-5'>Copyright &copy; {year}</h2>
        </div>
    );
};

export default Footer;