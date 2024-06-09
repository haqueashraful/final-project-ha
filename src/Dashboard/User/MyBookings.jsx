import { useQuery } from "@tanstack/react-query";
import useAuth from "../../Hooks/useAuth";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const MyBookings = () => {
    const {user} = useAuth();
    const axiosSecure = useAxiosSecure();

    const { data: bookings = [] } = useQuery({
        queryKey: ['bookings', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/bookings/${user?.email}`)
            return res.data;
        }
    })
    return (
        <div>
                <h1>My Bookings {bookings.length}</h1>

                <div className="overflow-x-auto">
          <table className="table-auto w-full text-center">
            <thead>
              <tr>
                <th>#</th>
                <th>Email</th>
                <th>Pay Date</th>
              </tr>
            </thead>
            <tbody>
              {bookings.map((item, index) => (
                <tr key={item._id}>
                  <td>{index + 1}</td>
                  <td>{item.email}</td>
                  <td>{new Date(item.date).toLocaleDateString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        </div>
    );
};

export default MyBookings;