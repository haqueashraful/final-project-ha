import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import BannerCommon from "../../../Component/BannerCommon";
import img from "../../../assets/shop/banner2.jpg";
import { useState } from "react";
import useMenu from "../../../Hooks/useMenu";
import Card from "../../../Component/Card";
import CardSection from "../../../Component/CardSection";
import { useParams } from "react-router-dom";

const Ourshop = () => {
    const categories = ["salad", "pizza", "dessert", "soup", "drinks"];
    const {category} = useParams();
    const initialIndex = categories.indexOf(category);
  const [tabIndex, setTabIndex] = useState(initialIndex);
  const [menu] = useMenu();
    console.log(category)
  const dessert = menu.filter((item) => item.category === "dessert");
  const pizza = menu.filter((item) => item.category === "pizza");
  const salad = menu.filter((item) => item.category === "salad");
  const soup = menu.filter((item) => item.category === "soup");
  const drinks = menu.filter((item) => item.category === "drinks");
  return (
    <div>
      <BannerCommon
        bg={img}
        title="Our Shop"
        subTitle="Would you like to try a dish?"
      />

      <div className="my-10">
        <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
          <TabList>
            <Tab>Salad</Tab>
            <Tab>Pizza</Tab>
            <Tab>Dessert</Tab>
            <Tab>Soup</Tab>
            <Tab>Drinks</Tab>
          </TabList>
          <TabPanel>
              <CardSection items={salad}  />
          </TabPanel>
          <TabPanel>
              <CardSection items={pizza}  />
          </TabPanel>
          <TabPanel>
              <CardSection items={soup}  />
          </TabPanel>
          <TabPanel>
              <CardSection items={dessert}  />
          </TabPanel>
          <TabPanel>
              <CardSection items={drinks}  />
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default Ourshop;
