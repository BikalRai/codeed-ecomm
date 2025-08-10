import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import "./componentcss/sliderTopElectronics.css";

// import required modules
import { FreeMode, Pagination } from "swiper/modules";

interface SliderProps {
  data: {
    name: string;
    brand: string;
    discount: string;
    imageUrl: string;
    bgColor: string;
    nameBgColor: string;
    textColor: string;
  }[];
}

const SliderTopElectronics = ({ data }: SliderProps) => {
  return (
    <div>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className='mySwiper'
      >
        {data.map((electronic, i) => (
          <SwiperSlide>
            <div
              key={i}
              className={`w-[389px] h-[207px] rounded-2xl p-5  flex`}
              style={{ backgroundColor: electronic.bgColor }}
            >
              <div className='grid gap-5'>
                <h4
                  className={`bg-[${electronic.nameBgColor}] text-${electronic.textColor} w-fit py-2 px-5 rounded-lg text-sm font-medium`}
                >
                  {electronic.name}
                </h4>
                <img src={electronic.brand} alt={electronic.name} />
                <h3
                  className={`text-${electronic.textColor} text-2xl font-semibold`}
                >
                  {electronic.discount}
                </h3>
              </div>
              <div className='grow flex justify-center items-center'>
                <img
                  src={electronic.imageUrl}
                  alt={electronic.name}
                  className='w-full h-full object-contain'
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SliderTopElectronics;
