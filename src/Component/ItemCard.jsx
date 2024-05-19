const ItemCard = ({ item }) => {
  const { _id, name, recipe, image, category, price } = item;
  return (
    <div>
      <div className="w-full bg-[#F3F3F3]">
        <img src={image} alt={name} />
      </div>
      <div className="text-center space-y-5 px-5 py-5 flex flex-col justify-between">
        <h1 className="text-xl font-bold">{name}</h1>
        <p>{recipe}</p>
        <div className="text-center">
          <button className="border-b-4 text-[#BB8506] border-[#BB8506] rounded-md px-5 py-2 hover:bg-black font-semibold">
            View Full Menu
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
