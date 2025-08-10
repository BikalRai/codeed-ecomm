import { appstore, playstore } from "../utilities/images";

const AppFooterDownload = () => {
  return (
    <div className='text-white grid gap-1'>
      <h4 className='text-xl font-bold'>Download App</h4>
      <div className='flex justify-center items-center gap-2'>
        <div className='grow'>
          <img src={appstore} alt='Apple Appstore' className='' />
        </div>
        <div className='grow'>
          <img src={playstore} alt='Google Playstore' className='' />
        </div>
      </div>
    </div>
  );
};

export default AppFooterDownload;
