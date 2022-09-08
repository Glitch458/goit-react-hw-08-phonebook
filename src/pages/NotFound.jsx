import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div>
      <h1 className="nf">Page Not Found</h1>
      <Link className="link" to="/">
        To Homepage
      </Link>
    </div>
  );
};
export default NotFound;
