import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import Swal from "sweetalert2";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import useCart from "../Hooks/useCart";

const Card = ({ item }) => {
  const { user } = useAuth();
  const { _id, name, recipe, image, category, price } = item;
  const [, refetch] = useCart();
  const navigate = useNavigate();
  const location = useLocation();
  const axiosSecure = useAxiosSecure();

  const handleAddToCart = (item) => {
    console.log(item);

    if (user?.email) {
      const cartItem = {
        menuItemId: _id,
        name,
        image,
        price,
        email: user?.email,
      };

      axiosSecure.post("/carts", cartItem).then((res) => {
        refetch()
        if (res.data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Item added to the cart",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
    } else {
      Swal.fire({
        title: "You are not Logged iN",
        text: "Please, login for add to cart",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, login in!",
      }).then((result) => {
        if (result.isConfirmed) {
          // Swal.fire({
          //   title: "Deleted!",
          //   text: "Your file has been deleted.",
          //   icon: "success"
          // });
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };
  return (
    <div>
      <div className="w-full overflow-hidden bg-[#F3F3F3]">
        <img className="object-cover w-full" src={image} alt={name} />
      </div>
      <div className="text-center space-y-5 px-5 py-5 flex flex-col justify-between">
        <h1 className="text-xl font-bold">{name}</h1>
        <p>{recipe}</p>
        <div className="text-center">
          <button
            onClick={() => handleAddToCart(item)}
            className="border-b-4 text-[#BB8506] border-[#BB8506] rounded-md px-5 py-2 hover:bg-black font-semibold"
          >
            add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
