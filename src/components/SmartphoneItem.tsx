import { Link } from "react-router-dom";
import type { Product } from "../utilities/cartTypes";

type SmartphoneItemProp = {
  smartphone: Product;
};

const SmartphoneItem: React.FC<SmartphoneItemProp> = ({ smartphone }) => {
  return (
    <div className='grid grid-cols-8 items-center text-center nth-[even]:bg-primary nth-[even]:text-white'>
      <div>{smartphone.id}</div>
      <div className='w-16 h-16 overflow-hidden mx-auto'>
        <img
          src={smartphone.imageUrl}
          alt={smartphone.name}
          className='w-full h-full object-contain object-center'
        />
      </div>
      <div>{smartphone.name}</div>
      <div>Rs. {smartphone.price}</div>
      <div>{smartphone.discount}</div>
      <div>Rs. {smartphone.oldPrice}</div>
      <div>Rs. {smartphone.save}</div>
      <div className='flex flex-col gap-3 py-2'>
        <Link
          to={`/editPhone/${smartphone.id}`}
          className='bg-teal-500 text-white px-4 py-2 rounded'
        >
          Edit
        </Link>
        <button className='py-2 px-4 bg-red-400'>Delete</button>
      </div>
    </div>
  );
};

export default SmartphoneItem;
