import MenuCard from "./MenuCard";

const MenuItem = ({ items }) => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {items.map((item) => (
          <MenuCard item={item} key={item._id} />
        ))}
      </div>
      <div className="text-center my-5">
        <button className="border-b-4 border-black rounded-md px-5 py-2 hover:bg-black hover:text-white font-semibold">View Full Menu</button>
      </div>
    </div>
  );
};

export default MenuItem;
