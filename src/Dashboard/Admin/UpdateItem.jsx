import { ImSpoonKnife } from "react-icons/im";
import { useForm } from "react-hook-form";
import Title from "../../Component/Title";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useNavigate, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import Loading from "../../Component/Loading";
import Swal from "sweetalert2";
import { useEffect, useState } from "react"; // Import useState

const image_hosting_key = import.meta.env.VITE_IMAGE_KEY;
const image_hosting_url = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const UpdateItem = () => {
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();
  const { id } = useParams();
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const [imagePreview, setImagePreview] = useState(null); // State to store image preview
  
  const { data: item = {}, isFetching } = useQuery({
    queryKey: ['menu', id],
    queryFn: async () => {
      const response = await axiosSecure.get(`/menu/${id}`);
      return response.data;
    }
  });

  // Function to handle form submission
  const onSubmit = async (data) => {
    try {
      let imageUrl = item.image;
      if (data.image.length) {
        // Upload image to imgbb
        const formData = new FormData();
        formData.append('image', data.image[0]);
        const response = await fetch(image_hosting_url, {
          method: 'POST',
          body: formData
        });
        const imageData = await response.json();
        if (imageData.success) {
          imageUrl = imageData.data.url;
        } else {
          console.error('Image upload failed:', imageData);
          return;
        }
      }

      // Prepare updated item data
      const updatedItem = {
        name: data.name,
        category: data.category,
        price: data.price,
        recipe: data.recipe,
        image: imageUrl
      };

      // Update item data on the server
      const response = await axiosSecure.patch(`/menu/${id}`, updatedItem);
      if (response.data.modifiedCount > 0) {
        reset();
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Item updated successfully',
          showConfirmButton: false,
          timer: 1500
        });
        navigate('/dashboard/manageitem');
      } else {
        console.error('Error updating item:', response.data);
      }
    } catch (error) {
      console.error('Error updating item:', error);
    }
  };

  // Function to handle image preview
  const handleImagePreview = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setImagePreview(reader.result);
    };
    reader.readAsDataURL(file);
  };

  if (isFetching) {
    return <Loading />;
  }

  return (
    <div>
      <Title heading="Update Item" subHeading="Update Item" />

      <div className="bg-[#F3F3F3] p-10 rounded-md">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          {/* Recipe Name */}
          <div>
            <label htmlFor="name" className="text-xl block">Recipe Name</label>
            <input
              {...register('name', { required: 'Recipe Name is required' })}
              type="text"
              id="name"
              placeholder="Recipe Name"
              className="w-full text-xl p-2 rounded-md mt-2"
              defaultValue={item.name}
            />
            {errors.name && <p className="text-red-600">{errors.name.message}</p>}
          </div>

          <div className="grid grid-cols-2 gap-5 items-center">
            {/* Category */}
            <div>
              <label htmlFor="category" className="text-xl block">Category</label>
              <select
                {...register('category', { required: 'Category is required' })}
                id="category"
                className="w-full text-xl p-2 rounded-md mt-2"
                defaultValue={item.category}
              >
                <option value="" disabled>Select Category</option>
                <option value="salad">Salad</option>
                <option value="pizza">Pizza</option>
                <option value="drinks">Drinks</option>
                <option value="soup">Soup</option>
                <option value="dessert">Dessert</option>
              </select>
              {errors.category && <p className="text-red-600">{errors.category.message}</p>}
            </div>

            {/* Price */}
            <div>
              <label htmlFor="price" className="text-xl block">Price</label>
              <input
                {...register('price', { required: 'Price is required' })}
                type="text"
                id="price"
                placeholder="Price"
                className="w-full text-xl p-2 rounded-md mt-2"
                defaultValue={item.price}
              />
              {errors.price && <p className="text-red-600">{errors.price.message}</p>}
            </div>
          </div>

          {/* Recipe */}
          <div>
            <label htmlFor="recipe" className="text-xl block">Recipe</label>
            <textarea
              {...register('recipe', { required: 'Recipe is required' })}
              id="recipe"
              cols="30"
              rows="5"
              placeholder="Recipe"
              className="w-full text-xl p-2 rounded-md mt-2"
              defaultValue={item.recipe}
            ></textarea>
            {errors.recipe && <p className="text-red-600">{errors.recipe.message}</p>}
          </div>

          {/* Image Preview */}
          <div>
            <img src={imagePreview || item.image} className="w-32 h-32" alt="Preview" />
          </div>
          <div>
            <input
              type="file"
              {...register('image')}
              className="file-input file-input-bordered w-full max-w-xs"
              onChange={handleImagePreview} // Call handleImagePreview on file change
            />
            {errors.image && <p className="text-red-600">{errors.image.message}</p>}
          </div>

          <button className="btn text-white bg-gradient-to-r from-[#835D23] to-[#B58130]">
            Update Item <ImSpoonKnife />
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateItem;
