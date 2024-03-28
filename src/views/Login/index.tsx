import React from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useNavigate} from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();

    const handleLogin = () => {
        navigate('/dashboard');
    };

    return (
        <>
            <div className='d-flex'>
                <div>Login Page</div>
                <Button variant="primary" onClick={handleLogin}>
                    Login
                </Button>
            </div>
        </>
    );
};

export default Login;