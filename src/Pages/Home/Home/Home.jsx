import Slider from "../../../Component/Slider";
import Title from "../../../Component/Title";
import Banner from "../Banner/Banner";
import secImg from "../../../assets/home/chef-service.jpg";
import { useEffect, useState } from "react";
import MenuItem from "../../../Component/MenuItem";
import ItemCard from "../../../Component/ItemCard";
import CategorySection from "../../../Component/CategorySection";

const Home = () => {

    const [menu , setMenu ] = useState([]);
    console.log(menu)
    useEffect(() => {
        fetch('menu.json')
        .then(res => res.json())
        .then(data => setMenu(data))
    }, [])

    const popular = menu.filter(item => item.category === 'popular');
    const sliced = menu.slice(0, 3);
  return (
    <div>
      <Banner />
      {/* slider div */}

      <div>
        <Title
          headign="ORDER ONLINE"
          subHeading="From 11:00am to 10:00pm"
        ></Title>
        <Slider />
      </div>

      <section
        className="my-16 flex flex-col justify-center items-center"
        style={{
          backgroundImage: `url(${secImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "500px",
        }}
      >
        <div className="bg-white w-10/12 h-3/6 flex flex-col justify-center items-center px-16 ">
          <h1 className="text-center text-3xl font-semibold my-5">
            Bistro Boss
          </h1>
          <p className="text-center text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus, libero accusamus laborum deserunt ratione dolor
            officiis praesentium! Deserunt magni aperiam dolor eius dolore at,
            nihil iusto ducimus incidunt quibusdam nemo.
          </p>
        </div>
      </section>


      {/* check it out */}

      <div>
        <Title
          headign="From Our Menu"
          subHeading="Check it Out"
        ></Title>

        <div className="my-10">
          <MenuItem items={popular}></MenuItem>
        </div>
      </div>

      {/* call us */}

      <div className="my-10 bg-black py-16 w-full mx-auto flex flex-col justify-center items-center">
        <h1 className="text-white text-3xl font-semibold">Call Us: +99 0123456789</h1>
      </div>

      {/* chef recommended */}

      <div>
        <div>
        <Title  headign="Chef Recommended" subHeading="Should Try"></Title>
        </div>

        <div className="my-10">
           <CategorySection items={sliced}></CategorySection>
        </div>
      </div>
    </div>
  );
};

export default Home;
