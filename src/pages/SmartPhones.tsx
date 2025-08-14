import { useEffect, useState } from "react";
import AppLayout from "../layouts/AppLayout";
import { getProducts } from "../utilities/api";
import { Link } from "react-router-dom";
import SmartphoneItem from "../components/SmartphoneItem";

interface Smartphone {
  id: number;
  name: string;
  price: string;
  oldPrice: string;
  save: string;
  discount: string;
  imageUrl: string;
}

const tableHeaders = [
  "ID",
  "Image",
  "Name",
  "Price",
  "Discount",
  "Old Price",
  "Save",
  "Actions",
];

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
          <div className='grid mt-8 bg-bg3'>
            <div className='grid grid-cols-8'>
              {tableHeaders.map((header, i) => (
                <div
                  key={i}
                  className='p-2 text-center font-semibold bg-text text-white'
                >
                  {header}
                </div>
              ))}
            </div>
            {smartphonesList.map((smartphone) => (
              // <ProductCard product={smartphone} />
              <SmartphoneItem key={smartphone.id} smartphone={smartphone} />
            ))}
          </div>
        </div>
      </AppLayout>
    </div>
  );
};

export default SmartPhones;
