import { FaPhone } from "react-icons/fa";
import BannerCommon from "../../../Component/BannerCommon";
import Title from "../../../Component/Title";
import contact from "../../../assets/contact/banner.jpg";
import captcha from '../../../assets/contact/image-3.png'

const Contactus = () => {
  return (
    <div>
      <BannerCommon
        title="Contact Us"
        bg={contact}
        subTitle="Would you like to try a dish?"
      />

      <div className="px-28">
        <Title heading="OUR LOCATION" subHeading="Visit Us" />
        <div className="flex justify-evenly items-center gap-5">
          <div className="border w-full">
            <div className="w-full bg-[#D1A054] text-white py-2 text-center">
              <FaPhone className="text-xl w-full text-center" />
            </div>
            <div className="px-2 pb-2">
              <div className="bg-[#F3F3F3] flex flex-col justify-center items-center  pt-5 pb-8">
                <h1 className=" text-xl">Phone</h1>
                <p>01-2345-6789</p>
              </div>
            </div>
          </div>
          <div className="border w-full">
            <div className="w-full bg-[#D1A054] text-white py-2 text-center">
              <FaPhone className="text-xl w-full text-center" />
            </div>
            <div className="px-2 pb-2">
              <div className="bg-[#F3F3F3] flex flex-col justify-center items-center  pt-5 pb-8">
                <h1 className=" text-xl">Phone</h1>
                <p>01-2345-6789</p>
              </div>
            </div>
          </div>
          <div className="border w-full">
            <div className="w-full bg-[#D1A054] text-white py-2 text-center">
              <FaPhone className="text-xl w-full text-center" />
            </div>
            <div className="px-2 pb-2">
              <div className="bg-[#F3F3F3] flex flex-col justify-center items-center  pt-5 pb-8">
                <h1 className=" text-xl">Phone</h1>
                <p>01-2345-6789</p>
              </div>
            </div>
          </div>
        </div>

        <Title heading="Contact Form" subHeading="Send Us A Message" />

     <form>
     <div className="bg-[#F3F3F3] p-10">
          <div className="grid grid-cols-2 gap-5">
            <div>
              <label className="text-xl font-semibold" htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                placeholder="Your name"
                className=" w-full text-xl p-2 rounded-md"
              />
            </div>
            <div>
              <label className="text-xl font-semibold" htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                placeholder="Your email"
                className=" w-full text-xl p-2 rounded-md"
              />
            </div>
          </div>
          <div className="mt-5">
            <label className="text-xl font-semibold" htmlFor="phone">Phone</label>
            <input
              type="tell"
              id="phone"
              placeholder="phone"
              className=" w-full text-xl p-2 rounded-md"
            />
          </div>
          <div className="mt-5">
            <label className="text-xl font-semibold" htmlFor="message">Message</label>
            <textarea
              id="message"
              placeholder="Send us your message"
              rows="5"
              className=" w-full text-xl p-2 rounded-md"
            ></textarea>
          </div>
        </div>
        <div>
          <img className="w-52 h-auto" src={captcha} alt="" />
        </div>
        <div className="text-center my-5">
          <button className="border-b-4 text-[#BB8506] border-[#BB8506] rounded-md px-5 py-2 hover:bg-[#BB8506] hover:text-white font-semibold">
            Send Message
          </button>
        </div>
     </form>
      </div>
    </div>
  );
};

export default Contactus;
