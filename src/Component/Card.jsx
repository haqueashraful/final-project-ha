import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import Swal from "sweetalert2";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import useCart from "../Hooks/useCart";
import useAdmin from "../Hooks/useAdmin";

const Card = ({ item }) => {
  const { user } = useAuth();
  const { _id, name, recipe, image, category, price } = item;
  const [, refetch] = useCart();
  const navigate = useNavigate();
  const location = useLocation();
  const axiosSecure = useAxiosSecure();
  const [isAdmin] = useAdmin();

  const handleAddToCart = (item) => {
    console.log(item);
    if(isAdmin){
      return Swal.fire('sorry', 'you are not allowed to add item', 'warning')
    }

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
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };
  return (
    <div>
      <div className="w-full overflow-hidden bg-[#F3F3F3]  relative">
        <img className="object-cover w-full min-h-[300px] max-h-[300px]" src={image} alt={name} />
       
        <p className="text-center absolute rounded-md px-3 py-1 top-2 left-2 z-auto bg-black text-white">{price}</p>
       
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
