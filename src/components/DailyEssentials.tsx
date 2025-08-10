import { useEffect, useState } from "react";
import SectionHeader from "./SectionHeader";
import { getDailyEssentials } from "../utilities/api";

interface EssentialTypes {
  id: number;
  name: string;
  discount: string;
  imageUrl: string;
}

const DailyEssentials = () => {
  const [dailyEssentials, setDailyEssentials] = useState<EssentialTypes[]>([]);

  useEffect(() => {
    const fetchEssentials = async () => {
      const res = await getDailyEssentials();
      setDailyEssentials([...res.data]);
    };

    fetchEssentials();
  }, []);

  return (
    <div className='ec-container mt-[120px]'>
      <SectionHeader
        sectionPhrase='Daily'
        sectionName='Essentials'
        path='dailyEssentials'
      />
      <div className='flex items-center justify-between'>
        {dailyEssentials.map((essential) => (
          <div className='grid gap-4 ' key={essential.id}>
            <div className='bg-bg1 rounded-2xl overflow-hidden w-[187px] h-[187px] flex justify-center items-center cursor-pointer transition hover:shadow-2xl'>
              <img
                src={essential.imageUrl}
                alt={essential.name}
                className='w-full h-full object-contain'
              />
            </div>
            <div className='text-center'>
              <h5 className='text-text font-semibold'>{essential.name}</h5>
              <h4 className='text-xl text-heading font-bold'>
                {essential.discount}
              </h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DailyEssentials;
