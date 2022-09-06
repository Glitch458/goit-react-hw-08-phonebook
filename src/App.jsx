import { Routes, Route } from 'react-router-dom';
import AppBar from 'pages/AppBar';
import ContactsPage from 'pages/ContactsPage';
import LoginPage from 'pages/LoginPage';
import RegisterPage from 'pages/RegisterPage';
import PrivateRoutes from 'components/PrivateRoutes';

const App = () => {
  return (
    <>
      <AppBar />
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/" element={<PrivateRoutes />}>
          <Route path="/contacts" element={<ContactsPage />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
