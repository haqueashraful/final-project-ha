import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";
import useAuth from "../Hooks/useAuth";
import { useNavigate } from "react-router-dom";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import Swal from "sweetalert2";

const SocialLogin = () => {
    const { signInWithGoogle } = useAuth();
    const navigate = useNavigate();
    const axiosPublic = useAxiosPublic();

    const handleGoogleLogin = () => {
        console.log("google");
        signInWithGoogle()
          .then((result) => {
            const user = result.user;
            axiosPublic.post("/users", { name: user.displayName, email: user.email, role: 'user' })
              .then((res) => {
                Swal.fire({
                  position: "top-end",
                  icon: "success",
                  title: "Login successfully",
                  showConfirmButton: false,
                  timer: 1500,
                })
                  navigate("/");
              })
          })
          .catch((error) => {
            console.log(error);
          });
      };


    return (
        <div>
            
            <ul className="flex justify-center items-center gap-5">
                <li >
                    <button className="border-b-4 border-black rounded-md px-5 py-2 hover:bg-black hover:text-white font-semibold"  onClick={handleGoogleLogin} ><FaGoogle className="text-3xl"/></button>
                </li>
                <li>
                    <FaFacebook className="text-3xl"/>
                </li>
                <li>
                    <FaGithub className="text-3xl"/>
                </li>
            </ul>
        </div>
    );
};

export default SocialLogin;