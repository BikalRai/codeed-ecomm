import { useDispatch } from "react-redux";
import type { Product } from "../utilities/cartTypes";
import { useState } from "react";
import { addToCart } from "../slices/cartSlice";

type ProductCardTypes = {
  product: Product;
};

const ProductCard: React.FC<ProductCardTypes> = ({ product }) => {
  const [added, setAdded] = useState(false);
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product));
    setAdded(true);
    setTimeout(() => {
      setAdded(false);
    }, 300);
  };
  return (
    <div
      key={product.id}
      className='w-[227px] flex flex-col justify-between relative bg-bg1 border-border rounded-2xl overflow-hidden cursor-pointer transition hover:shadow-xl'
    >
      <div className='py-2 h-[188px] w-full relative overflow-hidden'>
        <img
          src={product.imageUrl}
          alt={`${product.name} image`}
          className='w-full h-full object-contain object-center'
        />
        {product.discount && (
          <div className='absolute top-2 right-2 bg-primary text-white text-xs font-semibold px-2 py-1 rounded-full'>
            {product.discount}
          </div>
        )}
      </div>
      <div className='text-heading bg-white p-3 grid gap-1.5'>
        <h4 className='font-semibold'>{product.name}</h4>
        <div className='flex items-center gap-2'>
          <div className='price font-bold'>रु{Number(product.price)}</div>
          <div className='old__price line-through text-text'>
            रु{Number(product.oldPrice)}
          </div>
        </div>
        <hr className='border-0 h-0.5 bg-border' />
        <p className='text-[#249B3E] font-semibold'>
          Save - रु{Number(product.save)}
        </p>
        <button
          onClick={handleAddToCart}
          className='bg-primary text-white rounded-2xl transition hover:bg-text'
        >
          Add to Cart
        </button>
        {added && (
          <div className='absolute left-1/2 top-1/2 -translate-1/2 bg-green-400 rounded-2xl p-2'>
            Added to cart
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
