import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";

const axiosSecure = axios.create({
    baseURL: `${import.meta.env.VITE_API_URL}`,
    withCredentials: true,
});

const useAxiosSecure = () => {
    const navigate = useNavigate();
    const { logOutUser } = useAuth();

    axiosSecure.interceptors.response.use((response) => response, async (error) => {
        const status = error.response?.status;
        if (status === 403 || status === 401) {
            await logOutUser();
            navigate('/login', { replace: true });
        }
        return Promise.reject(error);
    });

    return axiosSecure;
};

export default useAxiosSecure;
