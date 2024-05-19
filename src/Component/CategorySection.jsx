import ItemCard from "./ItemCard";

const CategorySection = ({items}) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-10">
            {
                items.map(item => <ItemCard key={item._id} item={item}/>)
            }
        </div>
    );
};

export default CategorySection;