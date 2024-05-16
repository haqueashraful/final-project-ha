import { Outlet } from "react-router-dom";
import Nav from "../Shared/Nav";

const Main = () => {
    return (
        <div className="mx-20">
            <Nav />
            <Outlet />
        </div>
    );
};

export default Main;