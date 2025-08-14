import { useEffect, useState } from "react";
import AppLayout from "../layouts/AppLayout";
import { useNavigate, useParams } from "react-router-dom";
import type { Product } from "../utilities/cartTypes";
import { useDispatch } from "react-redux";
import { addProduct } from "../slices/productSlice";
import axios from "axios";
import { useSelector } from "react-redux";
import type { RootState } from "../store";

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
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const products = useSelector((state: RootState) => state.product.products);

  const { id } = useParams();
  const isEditMode = Boolean(id);

  useEffect(() => {
    if (isEditMode) {
      const product = products.find((p) => p.id === Number(id));

      if (product) {
        setFormData(product);
        setImage(product.imageUrl);
      }
    }
  }, [id]);

  const dispatch = useDispatch();

  const [image, setImage] = useState<string>("");
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  const handleImagePreview = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImage(URL.createObjectURL(file));
      setFormData((prev) => ({ ...prev, imageUrl: "" }));
    }
  };

  const handleFormData = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      let imageUrl = formData.imageUrl;

      if (image && !imageUrl) {
        const cloudForm = new FormData();
        cloudForm.append(
          "file",
          document.querySelector<HTMLInputElement>('input[name="imageUrl"]')!
            .files![0]
        );
        cloudForm.append("upload_preset", "e-comm");

        const res = await axios.post(
          "https://api.cloudinary.com/v1_1/dghzxdx84/image/upload",
          cloudForm
        );

        imageUrl = res.data.secure_url;
      }

      const finalData = { ...formData, imageUrl, id: Date.now() };

      dispatch(addProduct(finalData));

      setFormData({
        id: null,
        name: "",
        price: "",
        oldPrice: "",
        save: "",
        discount: "",
        imageUrl: "",
      });
      setImage("");
    } catch (error) {
      console.error("Cloudinary upload failed", error);
    }
  };

  return (
    <AppLayout>
      <div className='ec-container mt-[120px]'>
        <div className='flex items-center justify-between mb-10'>
          <h1 className='text-2xl font-bold  w-fit after:content[""] after:block after:h-1  after:bg-primary after:mt-5'>
            {isEditMode ? `Update proudct` : `Add new product`}
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
                  onChange={handleImagePreview}
                />
                <p>Upload Image</p>
              </label>
              {isLoading && <p>Loading ...</p>}
            </div>
          </div>

          {image && (
            <div className='ms-[50%] w-fit flex gap-6 items-center'>
              <div className='h-[200px] w-[200px] overflow-hidden'>
                <img
                  src={image}
                  alt=''
                  className='h-full w-full object-contain'
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
            onClick={handleFormSubmit}
          >
            {isEditMode ? "Update" : "Add Product"}
          </button>
        </form>
      </div>
    </AppLayout>
  );
};

export default AddSmartPhone;
