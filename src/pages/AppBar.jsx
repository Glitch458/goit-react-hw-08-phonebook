import { useSelector } from 'react-redux';
import { useLogoutMutation } from 'redux/auth/authAPI';

const AppBar = () => {
  const { user, isLoggedIn } = useSelector(state => state.auth);
  const [logout] = useLogoutMutation();

  const handleLogout = () => {
    logout();
  };

  return (
    <header>
      {isLoggedIn && (
        <div>
          <span>Welcome, {user.name}</span>
          <button type="button" onClick={handleLogout}>
            LogOut
          </button>
        </div>
      )}
      <hr />
    </header>
  );
};

export default AppBar;
