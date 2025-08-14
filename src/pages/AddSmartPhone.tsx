import { useState } from "react";
import AppLayout from "../layouts/AppLayout";
import { useNavigate } from "react-router-dom";
import type { Product } from "../utilities/cartTypes";
import { useDispatch } from "react-redux";
import { addProduct } from "../slices/productSlice";

const AddSmartPhone = () => {
  const [formData, setFormData] = useState<Product>({
    id: null,
    name: "",
    price: "",
    oldPrice: "",
    save: "",
    discount: "",
    imageUrl: "",
  });

  const dispatch = useDispatch();

  const [image, setImage] = useState<string>("");
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  const handleFormData = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, files } = e.target;

    if (files && files[0]) {
      const file = files[0];
      const imageUrl = URL.createObjectURL(file);

      setFormData((prev) => ({ ...prev, [name]: imageUrl }));
      setImage(imageUrl);
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  return (
    <AppLayout>
      <div className='ec-container mt-[120px]'>
        <div className='flex items-center justify-between mb-10'>
          <h1 className='text-2xl font-bold  w-fit after:content[""] after:block after:h-1  after:bg-primary after:mt-5'>
            Add new product
          </h1>
          <button
            onClick={handleGoBack}
            className='bg-primary rounded-3xl text-white font-medium transition hover:shadow-[0px_0px_10px_rgba(0,0,0,0.5)] py-2 px-6'
          >
            Back{" "}
          </button>
        </div>
        <form className='w-full'>
          <div className='grid grid-cols-2 gap-10'>
            <div className='border border-text p-3'>
              <input
                type='text'
                name='name'
                placeholder='Name'
                className='border-0 outline-0 w-full'
                value={formData.name}
                onChange={handleFormData}
              />
            </div>
            <div className='border border-text p-3'>
              <input
                type='text'
                name='price'
                placeholder='price'
                className='border-0 outline-0 w-full'
                value={formData.price}
                onChange={handleFormData}
              />
            </div>
            <div className='border border-text p-3'>
              <input
                type='text'
                name='oldPrice'
                placeholder='oldPrice'
                className='border-0 outline-0 w-full'
                value={formData.oldPrice}
                onChange={handleFormData}
              />
            </div>
            <div className='border border-text p-3'>
              <input
                type='text'
                name='discount'
                placeholder='Dicount'
                className='border-0 outline-0 w-full'
                value={formData.discount}
                onChange={handleFormData}
              />
            </div>
            <div className='border border-text p-3'>
              <input
                type='text'
                name='save'
                placeholder='Save amount'
                className='border-0 outline-0 w-full'
                value={formData.save}
                onChange={handleFormData}
              />
            </div>
            <div className='border border-text p-3 w-fit'>
              <label className='h-full w-full cursor-pointer'>
                <input
                  type='file'
                  name='imageUrl'
                  hidden
                  className='w-full h-full'
                  accept='image/*'
                  onChange={handleFormData}
                />
                <p>Upload Image</p>
              </label>
            </div>
          </div>
          {image && (
            <div className='ms-[50%] w-fit flex gap-6 items-center'>
              <div className='h-[200px] w-[200px] overflow-hidden'>
                <img
                  src={image}
                  alt=''
                  className='h-full w-full object-cover'
                />
              </div>
              <button
                className='py-2 px-5 bg-red-400 text-white rounded-3xl transition hover:shadow-[0_0_7px_rgba(0,0,0,0.3)]'
                onClick={() => {
                  setFormData((prev) => ({ ...prev, imageUrl: "" }));
                  setImage("");
                }}
                type='button'
              >
                remove
              </button>
            </div>
          )}
          <button
            className='mt-5 bg-primary text-white font-medium py-2 px-5 rounded-2xl transition hover:bg-light'
            onClick={() => dispatch(addProduct(formData))}
          >
            Add Product
          </button>
        </form>
      </div>
    </AppLayout>
  );
};

export default AddSmartPhone;
