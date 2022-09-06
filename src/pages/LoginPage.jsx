import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, Navigate } from 'react-router-dom';
import { useLoginMutation } from 'redux/auth/authAPI';

const LoginPage = () => {
  const [login, status] = useLoginMutation();
  const { isLoading } = status;
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

  const resetForm = () => {
    setEmail('');
    setPassword('');
  };

  const handleFormSubmit = evt => {
    evt.preventDefault();
    const credentials = { email, password };
    login(credentials);
    resetForm();
  };
  const { token } = useSelector(state => state.auth);

  return (
    <>
      <form onSubmit={handleFormSubmit}>
        <label>
          Email
          <input
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
            type="password"
            name="password"
            required
            value={password}
            onChange={handleInputChange}
          />
        </label>
        <button type="submit" disabled={isLoading}>
          LogIn
        </button>
      </form>
      <p>
        Have no account? <Link to="/register">Sign Up</Link>
      </p>
      {token && <Navigate to="/contacts">Contacts</Navigate>}
    </>
  );
};

export default LoginPage;
