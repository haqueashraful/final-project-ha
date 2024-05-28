import { useContext } from "react";
import { MyContext } from "../Context/MyContext";

const useAuth = () => {
    return useContext(MyContext);
};

export default useAuth;