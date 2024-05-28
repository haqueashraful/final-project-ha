import { useContext } from "react";
import { MyContext } from "../Context/MyContext";
import { Navigate, useLocation } from "react-router-dom";
import Loading from "./Loading";
import PropTypes from "prop-types";

const PrivateRoute = ({ children }) => {
  const { user, stateLoader } = useContext(MyContext);
  const location = useLocation();

  console.log(user, stateLoader);

  if (stateLoader) {
    return <Loading />;
  }

  if (user) {
    return children;
  }

  return <Navigate to="/login" state={location.pathname} replace />;
};

PrivateRoute.propTypes = {
  children: PropTypes.element.isRequired,
};

export default PrivateRoute;