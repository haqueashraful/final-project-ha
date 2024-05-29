import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import Title from "../../Component/Title";

const ManageItem = () => {
    const axiosSecure = useAxiosSecure()
    const navigate = useNavigate()
    const {data: items = [], refetch} = useQuery({
        queryKey: ['manageItem'],
         queryFn: async () => {
            const res = await axiosSecure.get('/menu')
            return res.data
        }
    })

    const handleDelete = (id) => {

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/menu/${id}`)
                    .then(res => {
                        if(res.data.deletedCount > 0){
                            refetch()
                            Swal.fire({
                                position: 'top-end',
                                icon: 'success',
                                title: 'Item deleted',
                                showConfirmButton: false,
                                timer: 1500
                              })
                        }
                    })
            }
        })
    }
  
  
    return (
        <div>
            <Title heading="Manage Items" subHeading="Manage all items here" />
            <div>
            <h1 className="text-3xl font-bold"> All items: {items.length}</h1>

            </div>

            <div>
               <table className="table">
                    <thead>
                        <tr>
                            <th>Sl</th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            items.map((item, index) => <tr key={item._id}>
                                <th>{index + 1}</th>
                                <td>
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    </td>
                                <td>{item.name}</td>
                                <td>{item.price}</td>
                                <td>
                                    <button onClick={ () => navigate(`/dashboard/update/${item._id}`) } className="btn btn-ghost btn-xs">Edit</button>
                                </td>
                                <td>
                                    <button onClick={() => handleDelete(item._id)} className="btn btn-ghost btn-xs">Delete</button>
                                </td>
                            </tr>)
                        }

                    </tbody>
               </table>
            </div>
        </div>
    );
};

export default ManageItem;