// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper/modules";
import { smartwatch } from "../utilities/images";

const HeroSwiper = () => {
  return (
    <div className='ec-container'>
      <Swiper
        pagination={{
          type: "progressbar",
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className='mySwiper h-[368px]'
      >
        <SwiperSlide>
          <div className='h-full flex items-center justify-between bg-[#212844] px-[125px]'>
            <div className='text-white grid gap-5 '>
              <h2 className='text-3xl font-semibold'>
                Best Deal Online on Smart Watches
              </h2>
              <h1 className='text-6xl font-bold'>SMART WEARABLE.</h1>
              <h2 className='text-3xl font-semibold'>UP to 80% OFF</h2>
            </div>
            <div className={` h-full flex items-center`}>
              <img src={smartwatch} alt='' className='w-[268px] h-[270px]' />
            </div>
          </div>
        </SwiperSlide>
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

export default HeroSwiper;
