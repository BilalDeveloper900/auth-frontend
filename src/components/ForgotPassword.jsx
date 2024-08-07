import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Forgot password submitted:', { email });
  };

  return (
    <div className="auth-wrapper">
      <div className="auth-inner">
        <Form onSubmit={handleSubmit}>
          <h3>Forgot Password</h3>

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

          <Button variant="primary" type="submit" className="w-100">
            Reset Password
          </Button>

          <p className="forgot-password text-right">
            Remember your password? <Link to="/">Sign in</Link>
          </p>
        </Form>
      </div>
    </div>
  );
};

export default ForgotPassword;