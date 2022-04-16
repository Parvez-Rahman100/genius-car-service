import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const Register = () => {
  const [
    createUserWithEmailAndPassword,
    user
  ] = useCreateUserWithEmailAndPassword(auth);

      const emailRef = useRef();
      const passwordRef = useRef();
      const nameRef = useRef();


    const handleRegister = event =>{
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        createUserWithEmailAndPassword(email,password);
    }

    
    const navigate = useNavigate();
    const handleLogin = () =>{
        navigate('/login')
    }

    if(user){
      navigate('/');
    }
    return (
        <div className='container'>
            <h1 className='text-center text-primary my-3'>Please Register</h1>
            <Form onClick={handleRegister} className='w-50 mx-auto my-5'>
            <Form.Group className="mb-3" >
            <Form.Label>Your Name</Form.Label>
              <Form.Control ref={nameRef} type="text" placeholder="Enter Your Name" />
              <Form.Group className="mb-3" controlId="formBasicEmail"></Form.Group>
              <Form.Label>Email address</Form.Label>
              <Form.Control ref={emailRef} type="email" placeholder="Enter email"  required/>
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
           </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
<p className='text-center'>Already have an account? <span className='text-danger' role='button' onClick={handleLogin}> Please Login</span></p>
        </div>
    );
};

export default Register;