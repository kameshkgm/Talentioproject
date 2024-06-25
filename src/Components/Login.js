import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './login.css';
import * as Components from './Components';
import axios from 'axios';

const Login = () => {
  const [signIn, setSignIn] = useState(true);
  const [phoneno, setPhoneno] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const headers = {
    'Content-Type': 'application/json',
  };

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      console.log("Login Request Payload:", { email, password });
      const response = await axios.post(`http://localhost:5000/login`, {
        email,
        password
      }, { headers });
      if (!response.data.success) {
        throw new Error(response.data.message);
      }
      console.log('Login successful', response.data);
      navigate('/home');
    } catch (error) {
      console.error('Error:', error.response ? error.response.data.message : error.message);
      setErrorMessage(error.response ? error.response.data.message : error.message);
    }
  };

  const handleSignUp = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(`http://localhost:5000/signup`, {
        name,
        email,
        phoneno,
        password,
      }, { headers });
      if (!response.data.success) {
        throw new Error(response.data.message);
      }
      console.log('Signup successful', response.data);
      setName('');
      setEmail('');
      setPhoneno('');
      setPassword('');
      setSignIn(true);
    } catch (error) {
      console.error('Error:', error.response ? error.response.data.message : error.message);
      setErrorMessage(error.response ? error.response.data.message : error.message);
    }
  };

  return (
    <div className="body1">
      <Components.Container>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <Components.SignUpContainer signingIn={signIn}>
          <Components.Form onSubmit={handleSignUp}>
            <Components.Title>Create Account</Components.Title>
            <Components.Input
              type="text"
              placeholder="Name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              autoComplete="name"
            />
            <Components.Input
              type="email"
              placeholder="Email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              autoComplete="email"
            />
            <Components.Input
              type="text"
              placeholder="Phone no"
              name="phoneno"
              value={phoneno}
              onChange={(e) => setPhoneno(e.target.value)}
              required
              autoComplete="username"
            />
            <Components.Input
              type="password"
              placeholder="Password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              autoComplete="new-password"
            />
            <Components.Button type="submit">Sign Up</Components.Button>
          </Components.Form>
        </Components.SignUpContainer>
        <Components.SignInContainer signingIn={signIn}>
          <Components.Form onSubmit={handleLogin}>
            <Components.Title>Sign in</Components.Title>
            <Components.Input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              autoComplete="email"
            />
            <Components.Input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              autoComplete="current-password"
            />
            <Components.Anchor href="#">Forgot your password?</Components.Anchor>
            <Components.Button type="submit">Sign In</Components.Button>
          </Components.Form>
        </Components.SignInContainer>
        <Components.OverlayContainer signingIn={signIn}>
          <Components.Overlay signingIn={signIn}>
            <Components.LeftOverlayPanel signingIn={signIn}>
              <Components.Title>Welcome Back!</Components.Title>
              <Components.Paragraph>
                To keep connected with us please login with your personal info
              </Components.Paragraph>
              <Components.GhostButton onClick={() => setSignIn(true)}>Sign In</Components.GhostButton>
            </Components.LeftOverlayPanel>
            <Components.RightOverlayPanel signingIn={signIn}>
              <Components.Title>Hello, Friend!</Components.Title>
              <Components.Paragraph>
                Enter your personal details and start journey with us
              </Components.Paragraph>
              <Components.GhostButton onClick={() => setSignIn(false)}>Sign Up</Components.GhostButton>
            </Components.RightOverlayPanel>
          </Components.Overlay>
        </Components.OverlayContainer>
      </Components.Container>
    </div>
  );
};

export default Login;
