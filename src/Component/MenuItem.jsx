import { Link } from "react-router-dom";
import MenuCard from "./MenuCard";
import BannerCommon from "./BannerCommon";

const MenuItem = ({ items, title, bg, subTitle }) => {
  return (
    <div>
      {
        title && <BannerCommon title={title} subTitle={subTitle} bg={bg} />
      }
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-10">
        {items.map((item) => (
          <MenuCard item={item} key={item._id} />
        ))}
      </div>
    <div  className="text-center my-5">
    <Link to={`/ourshop/${title}`}>
        <button className="border-b-4 border-black rounded-md px-5 py-2 hover:bg-black hover:text-white font-semibold">View Full Menu</button>
      </Link>
    </div>
    </div>
  );
};

export default MenuItem;
