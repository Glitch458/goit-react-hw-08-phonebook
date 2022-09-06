import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useRegisterMutation } from 'redux/auth/authAPI';

const RegisterPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [register, { isSuccess }] = useRegisterMutation();

  const handleInputChange = evt => {
    const { name, value } = evt.target;
    switch (name) {
      case 'name':
        setName(value);
        break;

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
    setName('');
    setEmail('');
    setPassword('');
  };

  const handleFormSubmit = evt => {
    evt.preventDefault();
    const newUser = {
      name,
      email,
      password,
    };
    register(newUser);
    resetForm();
  };

  return (
    <>
      <form onSubmit={handleFormSubmit}>
        <label>
          Name
          <input
            type="text"
            name="name"
            required
            value={name}
            onChange={handleInputChange}
          />
        </label>
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
        <button type="submit">SignUp</button>
      </form>
      {isSuccess && <Navigate to="/" />}
    </>
  );
};

export default RegisterPage;
