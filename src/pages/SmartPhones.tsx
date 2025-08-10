import { useEffect, useState } from "react";
import AppLayout from "../layouts/AppLayout";
import { getProducts } from "../utilities/api";
import { Link } from "react-router-dom";

interface Smartphone {
  id: number;
  name: string;
  price: string;
  oldPrice: string;
  save: string;
  discount: string;
  imageUrl: string;
}

const SmartPhones = () => {
  const [smartphonesList, setSmarphonesList] = useState<Smartphone[]>([]);

  useEffect(() => {
    const fetchPhones = async () => {
      const res = await getProducts();
      setSmarphonesList([...res.data]);
    };

    fetchPhones();
  }, []);

  return (
    <div>
      <AppLayout>
        <div className='ec-container mt-[120px]'>
          <div className='flex items-center justify-between'>
            <h1 className='text-2xl font-bold w-fit after:content[""] after:block after:h-1 after:bg-primary after:mt-4'>
              Smart Phones
            </h1>

            <Link
              to='/addPhone'
              className='bg-primary rounded-3xl text-white font-medium transition hover:shadow-[0px_0px_10px_rgba(0,0,0,0.5)]'
            >
              <button className='py-2 px-6'>Add</button>
            </Link>
          </div>
          <div className='flex items center justify-between flex-wrap gap-5 mt-8'>
            {smartphonesList.map((smartphone) => (
              <div
                key={smartphone.id}
                className='w-[224px] h-[298px] bg-bg1 flex flex-col rounded-2xl overflow-hidden border border-border cursor-pointer transition hover:shadow-xl'
              >
                <div className='overflow-hidden p-3 h-[188px] relative'>
                  <img
                    src={smartphone.imageUrl}
                    alt={smartphone.name}
                    className='w-full h-full object-contain'
                  />
                  {smartphone.discount && (
                    <div className='absolute top-2 right-2 bg-primary text-white text-xs font-semibold px-2 py-1 rounded-full'>
                      {smartphone.discount}
                    </div>
                  )}
                </div>
                <div className='bg-white text-heading p-3 grid gap-2'>
                  <h4 className='font-semibold'>{smartphone.name}</h4>
                  <div className='flex items-center gap-2'>
                    <p className='font-bold'>रु{smartphone.price}</p>
                    <p className='line-through text-text font-normal'>
                      रु{smartphone.oldPrice}
                    </p>
                  </div>
                  <hr className='h-0.5 bg-border border-0 outline-0' />
                  <div>
                    <p className='text-[#249B3E] font-semibold'>
                      Save <span>रु{smartphone.save}</span>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </AppLayout>
    </div>
  );
};

export default SmartPhones;
