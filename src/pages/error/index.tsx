import { Link } from "react-router-dom";
import "./styles.css";

const ErrorPage = () => {
  return (
    <div className="error-page">
      <h1 className="heading">404</h1>
      <p className="subheading">Page not found</p>
      <Link className="btn" to="/">
        Go back to home
      </Link>
    </div>
  );
};

export default ErrorPage;
