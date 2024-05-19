import { Rating } from "@smastrom/react-rating";
import Swiper from "swiper";
import { SwiperSlide } from "swiper/react";

const TestimonialCard = ({review}) => {
    const {name, details, rating} = review;

    return (
        <div className=" flex flex-col justify-center items-center text-center gap-5">
         <Rating style={{ maxWidth: 180 }} value={rating} readOnly />
            <span className="text-7xl">"</span>
            <div>
                <p>{details}</p>
                <h1 className="text-3xl my-3 text-[#D99904]">{name}</h1>
            </div>
        </div>
    );
};

export default TestimonialCard;