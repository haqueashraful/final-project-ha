import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";

const AllUsers = () => {
    const axiosSecure = useAxiosSecure()
    const {data : user = [], refetch} = useQuery({
        queryKey: ['users'],
        queryFn: async () =>{
           const res = await axiosSecure.get('/users')
           return res.data
        }
    })

    // {
    //     headers: {
    //         authorization: `Bearer ${localStorage.getItem('token')}`
    //     }
    // }
    const handleDelete = (id) =>{
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        })
        .then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/users/${id}`)
                .then(res =>{
                    if(res.data.deletedCount > 0){
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'User deleted',
                            showConfirmButton: false,
                            timer: 1500
                          })
                        refetch()
                    }
                })
            }
        })
    }

    const updateUserRole = (id) =>{
        axiosSecure.patch(`/users/admin/${id}`)
        .then(res =>{
            if(res.data.modifiedCount > 0){
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'User role updated',
                    showConfirmButton: false,
                    timer: 1500
                })
                refetch()
            }
        })
    }
    return (
        <div >
         <div className="text-center text-3xl flex justify-evenly">
         <h1>All Users</h1>
            <p>{user?.length}</p>
         </div>
         <div>
            <table className="table w-full">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Role</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        user?.map((user, index) => <tr key={user._id}>
                            <td>{index + 1}</td>
                           <td>
                               {user?.name}
                           </td>
                            <td>
                                {user?.email}
                            </td>
                            <td>
                                {
                                    user?.role === 'admin' ? 'admin' : <button onClick={() => updateUserRole(user._id)} className="btn btn-ghost btn-xs">user</button>
                                }
                            </td>
                            <td>
                                <button onClick={() => handleDelete(user._id)} className="btn btn-ghost btn-xs">Delete</button>
                            </td>
                        </tr>)
                    }
                </tbody>
            </table>
         </div>
        </div>
    );
};

export default AllUsers;