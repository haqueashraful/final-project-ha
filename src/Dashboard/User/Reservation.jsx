import { useForm } from "react-hook-form";
import Title from "../../Component/Title";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";

const Reservation = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const onSubmit = async (data) => {
    try {
      console.log(data);
      const response = await axiosSecure.post('/bookings', {...data, email: user?.email, name: user?.displayName});
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Reservation made successfully',
        showConfirmButton: false,
        timer: 1500
      })

      if (response.data.insertedId) {
        reset();
      }
    } catch (error) {
      console.error('Error making reservation:', error);
    }
  };

  return (
    <div>
      <Title heading={"Book a table"} subHeading={"Reservation"} />

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div>
            <label htmlFor="date" className="text-xl">Date</label>
            <input
              type="date"
              className="w-full text-xl p-2 rounded-md mt-2"
              {...register('date', { required: 'Date is required' })}
            />
            {errors.date && <p className="text-red-500">{errors.date.message}</p>}
          </div>

          <div>
            <label htmlFor="time" className="text-xl">Time</label>
            <input
              type="time"
              className="w-full text-xl p-2 rounded-md mt-2"
              {...register('time', { required: 'Time is required' })}
            />
            {errors.time && <p className="text-red-500">{errors.time.message}</p>}
          </div>

          <div>
            <label htmlFor="guest" className="text-xl">Guest</label>
            <select
              className="w-full text-xl p-2 rounded-md mt-2"
              {...register('guest', { required: 'Number of guests is required' })}
            >
              <option value="1">1 person</option>
              <option value="2">2 persons</option>
              <option value="3">3 persons</option>
              <option value="4">4 persons</option>
              <option value="5">5 persons</option>
            </select>
            {errors.guest && <p className="text-red-500">{errors.guest.message}</p>}
          </div>

          <div>
            <label htmlFor="name" className="text-xl">Name</label>
            <input
              type="text"
              className="w-full text-xl p-2 rounded-md mt-2"
              {...register('name', { required: 'Name is required' })}
            />
            {errors.name && <p className="text-red-500">{errors.name.message}</p>}
          </div>

          <div>
            <label htmlFor="email" className="text-xl">Email</label>
            <input
              type="email"
              className="w-full text-xl p-2 rounded-md mt-2"
              {...register('email', { required: 'Email is required' })}
            />
            {errors.email && <p className="text-red-500">{errors.email.message}</p>}
          </div>

          <div>
            <label htmlFor="phone" className="text-xl">Phone</label>
            <input
              type="tel"
              className="w-full text-xl p-2 rounded-md mt-2"
              {...register('phone', { required: 'Phone number is required' })}
            />
            {errors.phone && <p className="text-red-500">{errors.phone.message}</p>}
          </div>
        </div>
        <button type="submit" className="btn btn-primary mt-5">Submit</button>
      </form>
    </div>
  );
};

export default Reservation;
