import { Outlet } from "react-router-dom";
import Nav from "../Shared/Nav";
import Footer from "../Shared/Footer";

const Main = () => {
    return (
        <div className="mx-20">
            <Nav />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Main;