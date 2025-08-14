import { footerBgUrl, martLogo } from "../utilities/images";
import AppFooterContact from "./AppFooterContact";
import AppFooterDownload from "./AppFooterDownload";
import AppFooterLinks from "./AppFooterLinks";

const AppFooter = () => {
  return (
    <footer
      className='mt-[120px] bg-no-repeat bg-cover bg-center text-white'
      style={{ backgroundImage: `url(${footerBgUrl})` }}
    >
      <div className='ec-container pt-20 flex gap-[90px]'>
        <div className='grid gap-2'>
          <div>
            <img src={martLogo} alt='App Logo' />
          </div>
          <AppFooterContact />
          <AppFooterDownload />
        </div>
        <AppFooterLinks />
      </div>
      <hr className='mt-20 mb-10' />
      <div className='pb-8 text-center text-xl font-normal'>
        &copy; {new Date().getFullYear()} All rights reserved. Reliance Retail
        Ltd.
      </div>
    </footer>
  );
};

export default AppFooter;
