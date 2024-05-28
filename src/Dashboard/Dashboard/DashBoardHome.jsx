import useAdmin from "../../Hooks/useAdmin";
import AdminHome from "../Admin/AdminHome";
import UserHome from "../User/UserHome";

const DashBoardHome = () => {
    const [isAdmin] = useAdmin();
    
    return (
     <div>
        {
            isAdmin ? <AdminHome/> : <UserHome/>
        }
     </div>
    );
};

export default DashBoardHome;