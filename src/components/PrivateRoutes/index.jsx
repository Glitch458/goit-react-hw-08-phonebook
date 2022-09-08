import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoutes = () => {
  const { token } = useSelector(state => state.auth);

  return token ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoutes;
