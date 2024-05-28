import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";
import bg from "../assets/others/authentication.png";
import log from "../assets/others/authentication2.png";
import useAuth from "../Hooks/useAuth";
import { Link, useNavigate } from "react-router-dom";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import Swal from "sweetalert2";
import SocialLogin from "../Component/SocialLogin";
const Register = () => {
  const {registerUser, profileUpdate} = useAuth();
  const navigate = useNavigate();
  const axiosPublic = useAxiosPublic();


  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const image = form.image.value;
    const email = form.email.value;
    const password = form.password.value;

    registerUser(email, password)
    .then(result => {
      const user = result.user;
      console.log(user)
      profileUpdate(name, image)
      axiosPublic.post('/users', {name, email, role : "user"})
      .then(() => {
        form.reset();
        navigate('/')
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'User created successfully',
          showConfirmButton: false,
          timer: 1500
        })
      })
    })
    .catch(error => {
      console.log(error)
    })

    console.log(name, email, password);
  };

  return (
    <div
      className="w-full min-h-screen p-28 overflow-hidden"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="border-2 border-black shadow-2xl w-full h-full overflow-hidden py-8 px-20 grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-8">
        <div>
          <img className="" src={log} alt="" />
        </div>
        <div>
          <div>
            <h1 className="text-3xl font-bold text-center">Register</h1>
          </div>
          <form onSubmit={handleRegister} action="#" className=" space-y-4">
                {/* name */}
                <div>
              <label className="block text-lg" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Name"
                className="w-full text-xl p-2 rounded-md"
              />
            </div>

            {/* image */}
            <div>
              <label className="block text-lg" htmlFor="image">
                Image
              </label>
              <input
                type="text"
                name="image"
                id="image"
                placeholder="Image"
                className="w-full text-xl p-2 rounded-md"
              />
            </div>
            {/* email */}
            <div>
              <label className="block text-lg" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                className="w-full text-xl p-2 rounded-md"
              />
            </div>
            {/* password */}
            <div>
              <label className="block text-lg" htmlFor="password">
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                className="w-full text-xl p-2 rounded-md"
              />
            </div>
            <div className="text-center">
            <button className="border-b-4 border-black rounded-md px-5 py-2 hover:bg-black hover:text-white font-semibold">Register</button>
            </div>
          </form>
          <p className="text-center">Already have an account ? <Link to="/login">Login</Link></p>

          <div className="text-center my-4 space-y-4">
            <p>Or sign in with</p>
            <SocialLogin />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
