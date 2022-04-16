import React from 'react';
import { Button, Card } from 'react-bootstrap';

const Mechanic = ({mechanic}) => {
    const {name,img,description} = mechanic;
    return (
        <div id='mechanic' className="col-lg-4 col-sm-12 col-md-6" >
            <div >
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={img} />
            <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>{description}</Card.Text>
             <Button variant="primary">{name}</Button>
         </Card.Body>
      </Card>
            </div>
        </div>
    );
};

export default Mechanic;