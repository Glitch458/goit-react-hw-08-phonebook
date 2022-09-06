import { useSelector } from 'react-redux';
import { useLogoutMutation } from 'redux/auth/authAPI';

const AppBar = () => {
  const { user, isLoggedIn } = useSelector(state => state.auth);
  const [logout] = useLogoutMutation();

  const handleLogout = () => {
    logout();
  };

  return (
    <>
      {isLoggedIn && (
        <header className="header">
          <h1>Phonebook</h1>
          <div className="welcome">
            <span>Welcome, {user.name}</span>
            <button className="button" type="button" onClick={handleLogout}>
              LogOut
            </button>
          </div>
        </header>
      )}
    </>
  );
};

export default AppBar;
