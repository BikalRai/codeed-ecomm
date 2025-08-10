import CategorySection from "../components/CategorySection";
import DailyEssentials from "../components/DailyEssentials";
import HeroSwiper from "../components/HeroSwiper";
import ProductSection from "../components/ProductSection";
import TopElectronics from "../components/TopElectronics";
import AppLayout from "../layouts/AppLayout";

const Home = () => {
  return (
    <div>
      <AppLayout>
        <HeroSwiper />
        <ProductSection />
        <CategorySection />
        <TopElectronics />
        <DailyEssentials />
      </AppLayout>
    </div>
  );
};

export default Home;
