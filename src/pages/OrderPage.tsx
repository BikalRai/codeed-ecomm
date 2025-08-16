import { useSelector } from "react-redux";
import type { RootState } from "../store";
import AppLayout from "../layouts/AppLayout";
import { clearOrder } from "../slices/orderSlice";
import { useDispatch } from "react-redux";

const OrderPage = () => {
  const items = useSelector((state: RootState) => state.order.items);
  const dispatch = useDispatch();
  const subTotal = items.reduce((total, item) => total + Number(item.price), 0);
  const total = subTotal + 100;
  return (
    <AppLayout>
      <div className='ec-container mt-[120px] '>
        <div className='border-b border-b-primary py-2'>
          <h1 className='text-2xl font-semibold'>Thank you for ordering</h1>
          <p className='text-gray-500'>
            We appreciate your order, we’re currently processing it. So hang
            tight and we’ll send you confirmation very soon!
          </p>
        </div>
        <div className='grid '>
          {items.map((item) => (
            <div
              key={item.id}
              className='grid grid-cols-3 items-center gap-10 border-b border-b-primary py-5'
            >
              <div className='overflow-hidden w-20 h-20'>
                <img src={item.imageUrl} alt='' className='h-full w-full' />
              </div>
              <div>
                <h3>Rs {item.name}</h3>
              </div>
              <div>
                <p className='w-fit ms-auto'>Rs {item.price}</p>
              </div>
            </div>
          ))}
        </div>
        <div className='w-1/2 ms-auto py-5 flex flex-col gap-4'>
          <div className='flex items-center justify-between font-semibold'>
            <p>Subtotal </p>
            <p>Rs {subTotal}</p>
          </div>
          <div className='flex items-center justify-between'>
            <p>Shipping fee </p>
            <p>Rs {100}</p>
          </div>
          <div className='flex items-center justify-between text-xl font-bold'>
            <p>Total </p>
            <p>Rs {total}</p>
          </div>
        </div>
        {items.length > 0 && (
          <button
            onClick={() => dispatch(clearOrder())}
            className='bg-primary py-3 px-6 font-medium text-white rounded-3xl transition hover:shadow-2xl'
          >
            Clear Order
          </button>
        )}
      </div>
    </AppLayout>
  );
};

export default OrderPage;
