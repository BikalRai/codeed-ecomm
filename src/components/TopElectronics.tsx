import { useEffect, useState } from "react";
import SectionHeader from "./SectionHeader";
import SliderTopElectronics from "./SliderTopElectronics";
import { getTopElectronics } from "../utilities/api";

interface TopElectronicsType {
  name: string;
  brand: string;
  discount: string;
  imageUrl: string;
  bgColor: string;
  nameBgColor: string;
  textColor: string;
}

const TopElectronics = () => {
  const [topElectronics, setTopElectronics] = useState<TopElectronicsType[]>(
    []
  );

  useEffect(() => {
    const fetchTopElectronics = async () => {
      const res = await getTopElectronics();
      setTopElectronics([...res.data]);
    };

    fetchTopElectronics();
  }, []);

  return (
    <div className='mt-[120px] ec-container'>
      <SectionHeader
        sectionPhrase='Top'
        sectionName='Electronic Brands'
        path='topElectronics'
      />
      <SliderTopElectronics data={topElectronics} />
    </div>
  );
};

export default TopElectronics;
