import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { IoMdCheckmark } from "react-icons/io";

const ManageBookings = () => {
    const axiosSecure = useAxiosSecure();
    const {data : bookings = [], refetch} = useQuery({
        queryKey: ['bookings'],
        queryFn: async () => {
            const res = await axiosSecure.get('/bookings')
            return res.data
        }
    })

    const handleDone = (id) => {
        axiosSecure.patch(`/bookings/${id}`)
        .then(res => {
            if(res.data.modifiedCount > 0){
                refetch()
            }
        })
    }
    return (
        <div>
                <h1>Manage Bookings {bookings.length}</h1>

                <div className="overflow-x-auto">
          <table className="table-auto w-full text-center">
            <thead>
              <tr>
                <th>#</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Date</th>
                <th>Time</th>
                <th>Activity</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {bookings.map((item, index) => (
                <tr key={item._id}>
                  <td>{index + 1}</td>
                  <td>{item.email}</td>
                  <td>{item.phone}</td>
                  <td>{new Date(item.date).toLocaleDateString()}</td>
                  <td>{item.time}</td>
                  <td>{item.isPending ? <span className="text-red-500">Pending</span> : <span className="text-green-500">Done</span>}</td>
                  <td className="py-5">
                    <button  onClick={() => handleDone(item._id)} className="bg-green-600 text-white !rounded-full p-2 !min-h-0 "><IoMdCheckmark /></button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        </div>
    );
};

export default ManageBookings;