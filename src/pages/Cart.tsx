import AppLayout from "../layouts/AppLayout";
import { useDispatch } from "react-redux";
import { deleteFromCart, removeAllfromCart } from "../slices/cartSlice";
import { useSelector } from "react-redux";
import type { RootState } from "../store";
import { placeOrder } from "../slices/orderSlice";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const cart = useSelector((state: RootState) => state.cart.items);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <AppLayout>
      <div className='ec-container mt-[120px]'>
        <h1 className='text-2xl font-semibold mb-3'>My Cart</h1>
        <div className='grid'>
          {cart.map((item) => (
            <div
              key={item.id}
              className='grid grid-cols-3 items-center gap-10 border-t border-b border-t-primary border-b-primary py-5'
            >
              <div className='overflow-hidden w-20 h-20'>
                <img src={item.imageUrl} alt='' className='h-full w-full' />
              </div>
              <div>
                <h3>{item.name}</h3>
                <p>{item.price}</p>
              </div>
              <div>
                <button
                  onClick={() => dispatch(deleteFromCart(item.id))}
                  className='bg-red-400 text-white py-2 px-5 rounded-2xl transition hover:shadow-2xl'
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
        {cart.length > 0 && (
          <div className='flex items-center mt-6 gap-4'>
            <button
              onClick={() => {
                dispatch(placeOrder(cart));
                navigate("/order");
              }}
              className='mt-5 p-2 bg-primary rounded-2xl text-white transition hover:shadow-xl'
            >
              Proceeed to Order
            </button>
            <button
              onClick={() => dispatch(removeAllfromCart())}
              className='mt-5 p-2 bg-amber-900 rounded-2xl text-white transition hover:shadow-xl'
            >
              Remove All
            </button>
          </div>
        )}
      </div>
    </AppLayout>
  );
};

export default Cart;
