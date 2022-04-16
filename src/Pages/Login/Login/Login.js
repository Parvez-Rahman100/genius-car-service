import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';

const Login = () => {
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";

  const [
    signInWithEmailAndPassword,
    user
  ] = useSignInWithEmailAndPassword(auth);


  

    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    const handleSubmit = event =>{
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        signInWithEmailAndPassword(email,password);
    }

    const handleRegister = () =>{
            navigate('/register');
    }
    if(user){
      navigate(from, { replace: true });
    }
    return (
        <div className='container'>
           <h1 className='text-center text-primary my-3'>Please Login</h1> 
           <Form onClick={handleSubmit} className='w-50 mx-auto'>
            <Form.Group className="mb-3" controlId="formBasicEmail">
             <Form.Label>Email address</Form.Label>
             <Form.Control ref={emailRef} type="email" placeholder="Enter email" required/>
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
<p className='text-center'>New to Genius Car? <span className='text-danger' role='button' onClick={handleRegister}> Register Now</span></p>
        </div>
    );
};

export default Login;