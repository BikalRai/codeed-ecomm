import { useEffect, useState } from 'react';
import AppLayout from '../layouts/AppLayout';
import { getProducts } from '../utilities/api';
import products from '../../products.json';
import { useDispatch } from 'react-redux';
import { setCart } from '../slices/cartSlice';

interface CartItemType {
  id: number;
  name: string;
  imageUrl: string;
  price: string;
}

const Cart = () => {
  const [cartList, setCartList] = useState<CartItemType[]>([]);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setCart(products));
  }, []);

  useEffect(() => {
    const fetchProduct = async () => {
      const res = await getProducts();
      setCartList([...res.data]);
    };

    fetchProduct();
  }, []);

  return (
    <AppLayout>
      <div className="ec-container mt-[120px]">
        <h1 className="text-2xl font-semibold mb-3">My Cart</h1>
        <div className="grid">
          {cartList.map((item) => (
            <div
              key={item.id}
              className="grid grid-cols-3 items-center gap-10 border-t border-b border-t-primary border-b-primary py-5"
            >
              <div className="overflow-hidden w-20 h-20">
                <img src={item.imageUrl} alt="" className="h-full w-full" />
              </div>
              <div>
                <h3>{item.name}</h3>
                <p>{item.price}</p>
              </div>
              <div>
                <button className="bg-red-400 text-white py-2 px-5 rounded-2xl transition hover:shadow-2xl">
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </AppLayout>
  );
};

export default Cart;
