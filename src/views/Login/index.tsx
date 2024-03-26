// import React from 'react';
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { useNavigate } from 'react-router-dom';

// const Login = () => {
//     const navigate = useNavigate();

//     const handleLogin = () => {
//         navigate('/dashboard');
//     };

//     return (
//         <Container fluid className="vh-100 d-flex align-items-center justify-content-center bg-light">
//             <Row>
//                 <Col md={20} lg={20} xl={20} className="mx-auto p-5 rounded shadow-lg">
//                     <div className="text-center mb-4">
//                         <h1>Login Page</h1>
//                     </div>
//                     <Form>
//                         <Form.Group controlId="formBasicEmail">
//                             <Form.Label>Email address</Form.Label>
//                             <Form.Control type="email" placeholder="Enter email" className="mb-3" />
//                         </Form.Group>

//                         <Form.Group controlId="formBasicPassword">
//                             <Form.Label>Password</Form.Label>
//                             <Form.Control type="password" placeholder="Password" className="mb-4" />
//                         </Form.Group>

//                         <Button variant="primary" onClick={handleLogin}>
//                             Login
//                         </Button>
//                     </Form>
//                 </Col>
//             </Row>
//         </Container>
//     );
// };

// export default Login;

import React, { useState } from 'react';
//import firebase from 'firebase/app';
//import 'firebase/auth';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaGoogle, FaFacebook } from 'react-icons/fa';
import './index.css';


// Firebase configuration
// const firebaseConfig = {
//     // Your Firebase project configuration
// };

// Initialize Firebase
//firebase.initializeApp(firebaseConfig);

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);

    //   const handleEmailChange = (e) => setEmail(e.target.value);
    //   const handlePasswordChange = (e) => setPassword(e.target.value);

    //   const handleEmailLogin = async () => {
    //     try {
    //       await firebase.auth().signInWithEmailAndPassword(email, password);
    //       // Login successful, you can redirect to another page or do something else
    //     } catch (error) {
    //       setError(error.message);
    //     }
    //   };

    //   const handleGoogleLogin = async () => {
    //     try {
    //       const provider = new firebase.auth.GoogleAuthProvider();
    //       await firebase.auth().signInWithPopup(provider);
    //       // Login successful, you can redirect to another page or do something else
    //     } catch (error) {
    //       setError(error.message);
    //     }
    //   };

    //   const handleFacebookLogin = async () => {
    //     try {
    //       const provider = new firebase.auth.FacebookAuthProvider();
    //       await firebase.auth().signInWithPopup(provider);
    //       // Login successful, you can redirect to another page or do something else
    //     } catch (error) {
    //       setError(error.message);
    //     }
    //   };

    return (
        <div className="login-container">
            <h2>Login</h2>
            {error && <p className="error-message">{error}</p>}
            <div className="input-group">
                <label>Email:</label>
                <input type="email" value={email} />
            </div>
            <div className="input-group">
                <label>Password:</label>
                <input type="password" value={password} />
            </div>
            <button className="login-button" >Login with Email</button>
            <hr />
            <button className="google-login-button" >
                <FaGoogle />
                <span>Login with Google</span>
            </button>
            <button className="facebook-login-button" >
                <FaFacebook />
                <span>Login with Facebook</span>
            </button>
        </div>
    );
};

export default Login;

