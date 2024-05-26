import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";
import bg from "../assets/others/authentication.png";
import log from "../assets/others/authentication2.png";
const Login = () => {
  return (
    <div
      className="w-full min-h-screen p-28 overflow-hidden"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="border-2 border-black shadow-xl w-full h-full overflow-hidden py-8 px-20 grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-8">
        <div>
          <img className="" src={log} alt="" />
        </div>
        <div>
          <div>
            <h1 className="text-3xl font-bold text-center">Login</h1>
          </div>
          <form action="#" className=" space-y-4">
        
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
            <div>
              <input type="text" className="w-full text-xl p-2 rounded-md" />
              <p>reload Captcha</p>
            </div>
            <div>
                <input type="text" className="w-full text-xl p-2 rounded-md" />
            </div>
            <div className="text-center">
            <button className="border-b-4 border-black rounded-md px-5 py-2 hover:bg-black hover:text-white font-semibold">Login</button>
            </div>
          </form>
          <p className="text-center">Don't have an account</p>

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

export default Login;
