import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <section className="flex">
        <div className="bg-[#1F2937] p-16 text-white w-full text-center">
          <h1 className="text-3xl mb-3">Contact Us</h1>
          <div>
            <p>123 ABS Street, Uni 21, Bangladesh</p>
            <p>+88 123456789</p>
            <p>Mon - Fri: 08:00 - 22:00</p>
            <p>Sat - Sun: 10:00 - 23:00</p>
          </div>
        </div>
        <div className="bg-[#111827] p-16 text-white w-full text-center">
          <h1 className="text-3xl mb-3" >Follow Us</h1>
          <p>Join us on social media</p>
          <ul className="flex justify-center items-center gap-5 my-5">
            <li>
              <FaFacebook className="text-3xl"/>
            </li>
            <li>
              <FaInstagram className="text-3xl"/>
            </li>
            <li>
              <FaLinkedin className="text-3xl"/>
            </li>
          </ul>
        </div>
      </section>
      <section className="bg-black text-white py-2 text-center">
        <p>Copyright &copy; 2023</p>
      </section>
    </footer>
  );
};

export default Footer;
