import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../Hooks/useAdmin";
import useAuth from "../Hooks/useAuth";
import Loading from "../Component/Loading";

const AdminRoute = ({children}) => {
    const [isAdmin, isPending] = useAdmin();
    const { user, stateLoader,loader } = useAuth();
    const location = useLocation();
  
    if (isPending || loader) {
      return <Loading />;
    }
  
    if (isAdmin && user) {
      return children;
    }
  
    return <Navigate to="/login" state={{ from: location }} replace />;
};

export default AdminRoute;