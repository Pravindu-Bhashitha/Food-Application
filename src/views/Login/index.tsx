import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();

    const handleLogin = () => {
        navigate('/dashboard');
    };

    return (
        <Container fluid className="vh-100 d-flex align-items-center justify-content-center bg-light">
            <Row>
                <Col md={20} lg={20} xl={20} className="mx-auto p-5 rounded shadow-lg">
                    <div className="text-center mb-4">
                        <h1>Login Page</h1>
                    </div>
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" className="mb-3" />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" className="mb-4" />
                        </Form.Group>

                        <Button variant="primary" onClick={handleLogin}>
                            Login
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default Login;
