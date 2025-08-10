import { useEffect, useState } from "react";
import SectionHeader from "./SectionHeader";
import { getCategories } from "../utilities/api";

interface CategoryTypes {
  id: number;
  name: string;
  imageUrl: string;
}

const CategorySection = () => {
  const [categoryList, setCategoryList] = useState<CategoryTypes[]>([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const res = await getCategories();
      setCategoryList([...res.data]);
    };
    fetchCategories();
  }, []);

  return (
    <div className='mt-[120px] ec-container'>
      <SectionHeader
        sectionPhrase='Shop From'
        sectionName='Top Categories'
        path='topCategories'
      />
      <div className='flex items-center justify-between flex-wrap'>
        {categoryList.map((category) => (
          <div
            key={category.id}
            className='flex flex-col items-center justify-center gap-5'
          >
            <div className='w-[132px] h-[132px] bg-bg1 rounded-full overflow-hidden flex justify-center items-center transition cursor-pointer hover:shadow-xl'>
              <img
                src={category.imageUrl}
                alt={category.name}
                className='w-14 h-24 object-cover object-center'
              />
            </div>
            <p>{category.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategorySection;
