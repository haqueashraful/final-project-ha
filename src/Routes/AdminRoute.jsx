import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../Hooks/useAdmin";
import useAuth from "../Hooks/useAuth";
import Loading from "../Component/Loading";

const AdminRoute = ({children}) => {
    const [isAdmin, isPending] = useAdmin();
    const { user, loader } = useAuth();
    const location = useLocation();
  
    if (isPending || loader) {
      return <Loading />;
    }
  
    if (isAdmin && user) {
      return children;
    }
  
    return <Navigate to="/" state={{ from: location }} replace />;
};

export default AdminRoute;