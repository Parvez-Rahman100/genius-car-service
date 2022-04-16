import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Service = ({service}) => {
    const {name,img,description , price,id} = service;
    const navigate = useNavigate();
    const navigateToService = id =>{
        navigate(`/service/${id}`)
    }
    return (
        <div id='services' className="col-lg-4 col-sm-12 col-md-6" >
            <div >
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={img} />
            <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>{price}</Card.Text>
            <Card.Text>{description}</Card.Text>
         <Button onClick={()=>navigateToService(id)} variant="primary">{name}</Button>
        </Card.Body>
      </Card>
            </div>
        </div>
    );
};

export default Service;