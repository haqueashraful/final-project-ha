import { ImSpoonKnife } from "react-icons/im";
import Title from "../../Component/Title";

const AddItem = () => {
  return (
    <div className="px-28">
      <Title headign="Add an Item" subHeading="What's new" />

      <div className=" bg-[#F3F3F3] p-10 rounded-md">
        <form action="#" className=" space-y-5">
          {/* recipe name */}
          <div>
            <label htmlFor="recipeName" className="text-xl block">
              Recipe Name
            </label>
            <input
              type="text"
              name="recipeName"
              id="recipeName"
              placeholder="Recipe Name"
              className="w-full text-xl p-2 rounded-md mt-2"
            />
          </div>

          <div className="grid grid-cols-2 gap-5 items-center">
            {/* Category */}
            <div>
              <label htmlFor="category" className="text-xl block">
                {" "}
                Category
              </label>
              <select
                name="category"
                id="category"
                className="w-full text-xl p-2 rounded-md  mt-2"
              >
                <option value="breakfast">Breakfast</option>
                <option value="lunch">Lunch</option>
                <option value="dinner">Dinner</option>
                <option value="snack">Snack</option>
              </select>
            </div>

            {/* price */}
            <div>
              <label htmlFor="price" className="text-xl block">
                {" "}
                Price
              </label>
              <input
                type="text"
                name="price"
                id="price"
                placeholder="Price"
                className="w-full text-xl p-2 rounded-md  mt-2"
              />
            </div>
          </div>
          <div>
            <label htmlFor="description" className="text-xl block">
              Description
            </label>
            <textarea
              name="description"
              id="description"
              cols="30"
              rows="5"
              placeholder="Description"
              className="w-full text-xl p-2 rounded-md  mt-2"
            ></textarea>
          </div>
          <div>
            <input
              type="file"
              placeholder="You can't touch this"
              className="file-input file-input-bordered w-full max-w-xs"
            />
          </div>

          <button className="btn text-white bg-gradient-to-r from-[#835D23] to-[#B58130]">
            Add Item <ImSpoonKnife />
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddItem;
