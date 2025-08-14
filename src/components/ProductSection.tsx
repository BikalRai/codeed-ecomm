import { useEffect, useState } from "react";
import { getProducts } from "../utilities/api";
import SectionHeader from "./SectionHeader";
import ProductCard from "./ProductCard";
import type { Product } from "../utilities/cartTypes";

const ProductSection = () => {
  const [productList, setProductList] = useState<Product[]>([]);

  useEffect(() => {
    const products = async () => {
      const res = await getProducts();
      setProductList([...res.data]);
    };

    products();
  }, []);

  return (
    <div className='ec-container mt-[120px]'>
      <SectionHeader
        sectionPhrase='Grab the best deal on'
        sectionName='Smartphones'
        path='/smartphones'
      />
      <div className='flex flex-wrap items-center gap-4'>
        {productList.map((product) => (
          <ProductCard product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductSection;
