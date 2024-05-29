import { useContext } from "react";
import { MyContext } from "../Context/MyContext";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import Loading from "../Component/Loading";

const PrivateRoute = ({ children }) => {
  const { user, loader } = useContext(MyContext);
  const location = useLocation();

  if (loader) {
    return <Loading />;
  }

  if (user) {
    return children;
  }

  return <Navigate to="/login" state={{ from: location }} replace />;
};

PrivateRoute.propTypes = {
  children: PropTypes.element.isRequired,
};

export default PrivateRoute;