import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';
import axios from 'axios'; // Import axios
import { jwtDecode } from 'jwt-decode';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css';

const Login = () => {
  const [formType, setFormType] = useState('login');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('Username:', username);
    console.log('Password:', password);
  };

  const handleGoogleSuccess = (response) => {
    const decodedUser = jwtDecode(response.credential);
    console.log('Google User Info:', decodedUser);
    navigate('/dashboard');
  };

  const handleGoogleError = () => {
    console.log('Google Sign-In Failed');
  };

  const toggleForm = (form) => {
    setFormType(form);
  };

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      // Send POST request to backend API
      const response = await axios.post('http://localhost:8081/register', {
        email,
        password,
        firstname,
        lastname
      });

      // Show success message or navigate to login
      alert(response.data.message);
      navigate('/login'); // Redirect to login after successful signup
    } catch (error) {
      console.error('Error signing up:', error);
      alert('Signup failed. Please try again.');
    }
  };

  return (
    <GoogleOAuthProvider clientId="622012839307-3qdtdmte0lpd4lqd8qkje6qlpj906sga.apps.googleusercontent.com">
      <div className="container">
        {/* Promo Section */}
        <div className="promo-section">
          <h2>Join the Carpooling Community!</h2>
          <ul>
            <li>Save money on daily commutes</li>
            <li>Reduce carbon footprint</li>
            <li>Meet new people</li>
            <li>Contribute to a cleaner environment</li>
            <li>Safe and reliable</li>
          </ul>
        </div>

        {/* Login Form */}
        <div id="loginForm" className={`form-section ${formType === 'login' ? 'active' : ''}`}>
          <h2>Log In</h2>
          <form className="login-form" onSubmit={handleLogin}>
            <div className="form-group">
              <input
                type="email"
                placeholder="Email Address"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <button type="submit">Login</button>
            </div>
          </form>

          <GoogleLogin onSuccess={handleGoogleSuccess} onError={handleGoogleError} />

          <div className="form-footer">
            <a href="#">Forgot Password?</a>
            <p>
              Don't have an account?{' '}
              <a href="#" onClick={() => toggleForm('signup')}>
                Sign up
              </a>
            </p>
          </div>
        </div>

        {/* Signup Form */}
        <div id="signupForm" className={`form-section ${formType === 'signup' ? 'active' : ''}`}>
          <h2>Sign Up</h2>
          <form className="signup-form" onSubmit={handleSignup}>
            <div className="form-group">
              <input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                placeholder="First Name"
                value={firstname}
                onChange={(e) => setFirstname(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                placeholder="Last Name"
                value={lastname}
                onChange={(e) => setLastname(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <button type="submit">Sign Up</button>
            </div>
          </form>

          <div className="terms">
            By signing up, you agree to our <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>.
          </div>

          <div className="form-footer">
            <p>
              Already have an account?{' '}
              <a href="#" onClick={() => toggleForm('login')}>
                Log in
              </a>
            </p>
          </div>
        </div>
      </div>
    </GoogleOAuthProvider>
  );
};

export default Login;
