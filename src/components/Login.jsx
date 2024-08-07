import React, { useState } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login submitted:', { email, password });
  };

  return (
    <div className="auth-wrapper">
      <div className="auth-inner">
        <Form onSubmit={handleSubmit}>
          <h3>Sign In</h3>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Remember me" />
          </Form.Group>

          <Form.Group className="mb-3">
            <Link to="/forgot-password">Forgot Password?</Link>
          </Form.Group>

          <Row>
            <Col>
              <Button variant="primary" type="submit" className="w-100">
                Sign In
              </Button>
            </Col>
            <Col>
              <Link to="/register" className="btn btn-secondary w-100">
                Sign Up
              </Link>
            </Col>
          </Row>
        </Form>
      </div>
    </div>
  );
};

export default Login;