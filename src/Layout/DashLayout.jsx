import { Outlet } from "react-router-dom";
import DashboardSide from "../Dashboard/Dashboard/DashboardSide";

const DashLayout = () => {
    return (
        <div className="w-full flex">
                <div>
                    <DashboardSide />
                </div>
                <div className=" flex-1 ml-64 w-full">
                    <Outlet />
                </div>
        </div>
    );
};

export default DashLayout;