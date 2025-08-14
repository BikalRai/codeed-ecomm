import { useEffect, useState } from 'react';
import { getProducts } from '../utilities/api';
import SectionHeader from './SectionHeader';
import PrimaryButton from './PrimaryButton';

interface ProductType {
  id: number;
  name: string;
  price: number;
  oldPrice: number;
  save: number;
  discount: number;
  imageUrl: string;
}

const ProductSection = () => {
  const [productList, setProductList] = useState<ProductType[]>([]);

  const handleAddToCart = () => {
    const item = {};
  };

  useEffect(() => {
    const products = async () => {
      const res = await getProducts();
      setProductList([...res.data]);
    };

    products();
  }, []);

  return (
    <div className="ec-container mt-[120px]">
      <SectionHeader
        sectionPhrase="Grab the best deal on"
        sectionName="Smartphones"
        path="/smartphones"
      />
      <div className="flex flex-wrap items-center gap-4">
        {productList.map((product) => (
          <div
            key={product.id}
            className="w-[227px] flex flex-col justify-between  bg-bg1 border-border rounded-2xl overflow-hidden cursor-pointer transition hover:shadow-xl"
          >
            <div className="py-2 h-[188px] w-full relative overflow-hidden">
              <img
                src={product.imageUrl}
                alt={`${product.name} image`}
                className="w-full h-full object-contain object-center"
              />
              {product.discount && (
                <div className="absolute top-2 right-2 bg-primary text-white text-xs font-semibold px-2 py-1 rounded-full">
                  {product.discount}
                </div>
              )}
            </div>
            <div className="text-heading bg-white p-3 grid gap-1.5">
              <h4 className="font-semibold">{product.name}</h4>
              <div className="flex items-center gap-2">
                <div className="price font-bold">रु{Number(product.price)}</div>
                <div className="old__price line-through text-text">
                  रु{Number(product.oldPrice)}
                </div>
              </div>
              <hr className="border-0 h-0.5 bg-border" />
              <p className="text-[#249B3E] font-semibold">
                Save - रु{Number(product.save)}
              </p>
              <PrimaryButton text="Add to Cart" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductSection;
