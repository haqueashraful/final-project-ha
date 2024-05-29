import BannerCommon from "../../../Component/BannerCommon";
import CategorySection from "../../../Component/CategorySection";
import MenuItem from "../../../Component/MenuItem";
import Title from "../../../Component/Title";
import useMenu from "../../../Hooks/useMenu";
import top from "../../../assets/menu/banner3.jpg";
const Ourmenu = () => {
  const [menu] = useMenu();

  const offerd = menu.filter((item) => item.category === "offered");
  const popular = menu.filter((item) => item.category === "popular");
  const dessert = menu.filter((item) => item.category === "dessert");
  const pizza = menu.filter((item) => item.category === "pizza");
  const salad = menu.filter((item) => item.category === "salad");
  const soup = menu.filter((item) => item.category === "soup");

  return (
    <div>
      <BannerCommon
        title="Our Menu"
        subTitle="Would you like to try a dish?"
        bg={top}
      />
      <div className="my-10 space-y-10">
        <Title heading="Today's Offer" subHeading="Don't Miss" />
        <MenuItem items={offerd} />
      </div>
      <div className="my-10 space-y-10">
        <Title heading="Popular Items" subHeading="Check it Out" bg={top}/>
        <MenuItem
          items={popular}
        />
      </div>
      <div className="my-10 space-y-10">
        <MenuItem
          items={dessert}
          title="dessert"
          subTitle="Dessert Items"
          bg={top}
        />
      </div>
      <div className="my-10 space-y-10">
        <MenuItem items={pizza} title="pizza" subTitle="Pizza Items" bg={top} />
      </div>
      <div className="my-10 space-y-10">
        <MenuItem items={salad} title="salad" subTitle="Salad Items" bg={top} />
      </div>
      <div className="my-10 space-y-10">
        <MenuItem items={soup} title="soup" subTitle="Soup Items" bg={top} />
      </div>
    </div>
  );
};

export default Ourmenu;
