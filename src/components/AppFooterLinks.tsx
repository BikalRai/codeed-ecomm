import CustomerServicersLinks from "./CustomerServicersLinks";
import MostPopularLinks from "./MostPopularLinks";

const AppFooterLinks = () => {
  return (
    <div className='flex items-start gap-20'>
      <MostPopularLinks />
      <CustomerServicersLinks />
    </div>
  );
};

export default AppFooterLinks;
