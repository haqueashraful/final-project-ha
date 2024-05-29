const MenuCard = ({ item }) => {
  const { name, recipe, image, price } = item;
  return (
    <div className="flex items-start justify-between gap-5">
      <div className="overflow-hidden" style={{ borderRadius: " 0px 200px 200px 200px", objectFit: "cover" , width: "100px", height: "100px" }}>
        <img
          style={{ objectFit: "cover", width: "100%", height: "100%" }}
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
