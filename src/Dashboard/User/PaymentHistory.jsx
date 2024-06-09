import { useQuery } from "@tanstack/react-query";
import useAuth from "../../Hooks/useAuth";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import Title from "../../Component/Title";

const PaymentHistory = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: paymentHistory = [] } = useQuery({
    queryKey: ["paymentHistory", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/payments/${user?.email}`);
      return res.data;
    },
  });

  console.log(paymentHistory);

  return (
    <div>
      <Title
        heading={"Payment History"}
        subHeading={"From 11:00am to 10:00pm"}
      />
      <div>
        <h1 className="text-3xl font-semibold py-5">
          Total Payment {paymentHistory.length}
        </h1>
        <div className="overflow-x-auto">
          <table className="table-auto w-full text-center">
            <thead>
              <tr>
                <th>#</th>
                <th>Email</th>
                <th>Transaction Id</th>
                <th>Price($)</th>
                <th>Pay Date</th>
              </tr>
            </thead>
            <tbody>
              {paymentHistory.map((item, index) => (
                <tr key={item._id}>
                  <td>{index + 1}</td>
                  <td>{item.email}</td>
                  <td>{item.transactionId}</td>
                  <td>{item.price}</td>
                  <td>{new Date(item.date).toLocaleDateString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PaymentHistory;
