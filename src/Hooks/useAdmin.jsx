import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";
// import { useEffect, useState } from "react";

const useAdmin = () => {
    const axiosSecure = useAxiosSecure()
    const { user } = useAuth()
    // const [isAdmin, setIsAdmin] = useState(false)
    // useEffect(() => {
    //     axiosSecure.get(`/users/admin/${user?.email}`)
    //     .then(res =>{
    //         console.log(res.data.isAdmin)
    //         setIsAdmin(res.data.isAdmin)
    //     })
    // }, [user, axiosSecure])
    const {data: isAdmin, isPending } = useQuery({
        queryKey: ['idAdmin', user?.email],
        queryFn: async () =>{
           const res = await axiosSecure.get(`/users/admin/${user?.email}`)
           return res.data.isAdmin
        }
    })
    return [isAdmin, isPending]

    // return [isAdmin]
};

export default useAdmin;