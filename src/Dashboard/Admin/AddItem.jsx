import  { useState } from 'react';
import { useForm } from 'react-hook-form';
import { ImSpoonKnife } from 'react-icons/im';
import Title from '../../Component/Title';
import useAxiosPublic from '../../Hooks/useAxiosPublic';
import Swal from 'sweetalert2';

const image_hosting_key = import.meta.env.VITE_IMAGE_KEY;
const image_hosting_url = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const AddItem = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [imagePreview, setImagePreview] = useState(null);
  const axiosPublic = useAxiosPublic();

  const handleAddItem = async (data) => {
    const formData = new FormData();
    formData.append('image', data.image[0]);

    try {
      // Upload image to imgbb
      const response = await fetch(image_hosting_url, {
        method: 'POST',
        body: formData
      });

      const imageData = await response.json();

      if (imageData.success) {
        const imageUrl = imageData.data.url;

        // Prepare item data
        const itemData = {
          name: data.name,
          category: data.category,
          price: parseFloat(data.price),
          recipe: data.recipe,
          image: imageUrl
        };

        // Send item data to your backend API
       const response = await axiosPublic.post('/menu', itemData);

        if (response.data.insertedId) {
          reset();
          setImagePreview(null);
          reset();
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Item added successfully',
            showConfirmButton: false,
            timer: 1500
          })
          console.log('Item added successfully:', itemData);
        } else {
          console.error('Error adding item:', response.data);
        }

      } else {
        console.error('Image upload failed:', imageData);
      }
    } catch (error) {
      console.error('Error adding item:', error);
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImagePreview(URL.createObjectURL(file));
    }
  };

  return (
    <div>
      <Title heading="Add an Item" subHeading="What's new" />

      <div className="bg-[#F3F3F3] p-10 rounded-md">
        <form onSubmit={handleSubmit(handleAddItem)} className="space-y-5">
          {/* Recipe Name */}
          <div>
            <label htmlFor="name" className="text-xl block">Recipe Name</label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Recipe Name"
              className="w-full text-xl p-2 rounded-md mt-2"
              {...register('name', { required: 'Recipe Name is required' })}
            />
            {errors.name && <p className="text-red-600">{errors.name.message}</p>}
          </div>

          <div className="grid grid-cols-2 gap-5 items-center">
            {/* Category */}
            <div>
              <label htmlFor="category" className="text-xl block">Category</label>
              <select
                name="category"
                id="category"
                className="w-full text-xl p-2 rounded-md mt-2"
                {...register('category', { required: 'Category is required' })}
              >
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
                type="text"
                name="price"
                id="price"
                placeholder="Price"
                className="w-full text-xl p-2 rounded-md mt-2"
                {...register('price', { required: 'Price is required' })}
              />
              {errors.price && <p className="text-red-600">{errors.price.message}</p>}
            </div>
          </div>

          {/* recipe */}
          <div>
            <label htmlFor="recipe" className="text-xl block">recipe</label>
            <textarea
              name="recipe"
              id="recipe"
              cols="30"
              rows="5"
              placeholder="recipe"
              className="w-full text-xl p-2 rounded-md mt-2"
              {...register('recipe', { required: 'recipe is required' })}
            ></textarea>
            {errors.recipe && <p className="text-red-600">{errors.recipe.message}</p>}
          </div>

          {/* Image Upload */}
          <div>
            <input
              type="file"
              name="image"
              className="file-input file-input-bordered w-full max-w-xs"
              {...register('image', { required: 'Image is required' })}
              onChange={(e) => {
                handleImageChange(e);
                register('image').onChange(e);
              }}
            />
            {errors.image && <p className="text-red-600">{errors.image.message}</p>}
          </div>

          {imagePreview && (
            <div className="mt-4">
              <img src={imagePreview} alt="Preview" className="w-full max-w-xs rounded-md" />
            </div>
          )}

          <button className="btn text-white bg-gradient-to-r from-[#835D23] to-[#B58130]">
            Add Item <ImSpoonKnife />
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddItem;
