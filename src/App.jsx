import { Routes, Route } from 'react-router-dom';
import AppBar from 'pages/AppBar';
import ContactsPage from 'pages/ContactsPage';
import LoginPage from 'pages/LoginPage';
import RegisterPage from 'pages/RegisterPage';
import NotFound from 'pages/NotFound';
import PrivateRoutes from 'components/PrivateRoutes';

const App = () => {
  return (
    <>
      <AppBar />
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/contacts" element={<PrivateRoutes />}>
          <Route index element={<ContactsPage />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
