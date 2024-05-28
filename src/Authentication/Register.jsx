import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";
import bg from "../assets/others/authentication.png";
import log from "../assets/others/authentication2.png";
import useAuth from "../Hooks/useAuth";
import { Link, useNavigate } from "react-router-dom";
const Register = () => {
  const {registerUser} = useAuth();
  const navigate = useNavigate();


  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    registerUser(email, password)
    .then(result => {
      const user = result.user;
      console.log(user)
      navigate('/')
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

            <ul className="flex justify-center items-center gap-5">
                <li>
                    <FaGoogle className="text-3xl"/>
                </li>
                <li>
                    <FaFacebook className="text-3xl"/>
                </li>
                <li>
                    <FaGithub className="text-3xl"/>
                </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
