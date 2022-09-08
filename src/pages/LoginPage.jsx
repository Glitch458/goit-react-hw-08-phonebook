import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, Navigate } from 'react-router-dom';
import { useLoginMutation } from 'redux/auth/authAPI';

const LoginPage = () => {
  const [login, { isLoading }] = useLoginMutation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleInputChange = evt => {
    const { name, value } = evt.target;
    switch (name) {
      case 'email':
        setEmail(value);
        break;

      case 'password':
        setPassword(value);
        break;

      default:
        return;
    }
  };

  const handleFormSubmit = evt => {
    evt.preventDefault();
    const credentials = { email, password };
    login(credentials);
  };
  const { token } = useSelector(state => state.auth);

  return (
    <div className="login">
      <form className="form" onSubmit={handleFormSubmit}>
        <label>
          Email
          <input
            className="input"
            type="email"
            name="email"
            required
            value={email}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Password
          <input
            className="input"
            type="password"
            name="password"
            required
            value={password}
            onChange={handleInputChange}
          />
        </label>
        <button className="button" type="submit" disabled={isLoading}>
          LogIn
        </button>
        <p>
          Have no account?{' '}
          <Link className="link" to="/register">
            Sign Up
          </Link>
        </p>
      </form>
      {token && <Navigate to="/contacts">Contacts</Navigate>}
    </div>
  );
};

export default LoginPage;
