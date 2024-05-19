const MenuCard = ({ item }) => {
    console.log(item);
  const { name, recipe, image, price } = item;
  return (
    <div className="flex items-start justify-between gap-5">
      <div>
        <img
          className="w-24 h-24 overflow-hidden"
          style={{ objectFit: "cover", borderRadius: " 0px 200px 200px 200px", width: "100%" }}
          src={image}
          alt={name}
        />
      </div>
      <div>
        <h1 className="text-xl font-bold">{name}----------</h1>
        <p>{recipe}</p>
      </div>
      <div>
        <p className="text-[#BB8506]">${price}</p>
      </div>
    </div>
  );
};

export default MenuCard;
