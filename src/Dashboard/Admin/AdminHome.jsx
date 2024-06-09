import { FaWallet } from "react-icons/fa6";
import useAuth from "../../Hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const AdminHome = () => {
    const {user } = useAuth();
    const axiosSecure = useAxiosSecure();

    const {data : stats = {}} = useQuery({
        queryKey: ['admin-stats'],
        queryFn: async () => {
            const res = await axiosSecure.get('/admin-stats');
            return res.data;
        }
    })
    return (
        <div className="p-4">
            <h1 className="text-5xl uppercase">Hi, Welcome Back!</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-5">
                {/* Revenue */}
                <div className="flex justify-center items-center gap-2 p-10 bg-gradient-to-r from-[#BB34F5] to-[#FCDBFF] rounded-md">
                    <div>
                         <FaWallet className="text-5xl text-white" />
                    </div>
                    <div className="text-white">
                        <h1 className="text-xl font-bold">{stats?.revenue}</h1>
                        <h1>Revenue</h1>
                    </div>
                </div>
                {/* Customer */}
                <div className="flex justify-center items-center gap-2 p-10 bg-gradient-to-r from-[#D3A256] to-[#FDE8C0] rounded-md">
                    <div>
                         <FaWallet className="text-5xl text-white" />
                    </div>
                    <div className="text-white">
                        <h1 className="text-xl font-bold">{stats?.users}</h1>
                        <h1>Customers</h1>
                    </div>
                </div>

                {/* Products */}
                <div className="flex justify-center items-center gap-2 p-10 bg-gradient-to-r from-[#FE4880] to-[#FECDE9] rounded-md">
                    <div>
                         <FaWallet className="text-5xl text-white" />
                    </div>
                    <div className="text-white">
                        <h1 className="text-xl font-bold">{stats?.products}</h1>
                        <h1>Products</h1>
                    </div>
                </div>

                {/* Orders */}
                <div className="flex justify-center items-center gap-2 p-10 bg-gradient-to-r from-[#6AAEFF] to-[#B6F7FF] rounded-md">
                    <div>
                         <FaWallet className="text-5xl text-white" />
                    </div>
                    <div className="text-white">
                        <h1 className="text-xl font-bold">{stats?.orders}</h1>
                        <h1>Orders</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminHome;