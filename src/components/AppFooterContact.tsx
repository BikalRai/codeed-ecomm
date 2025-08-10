import { LuPhoneCall } from "react-icons/lu";
import { MdWhatsapp } from "react-icons/md";

const AppFooterContact = () => {
  return (
    <div className='text-white grid gap-4'>
      <h4 className='text-xl font-bold'>Contact Us</h4>
      <div className='grid gap-2'>
        <div className='flex flex-col'>
          <p className='flex gap-2 items-center font-medium'>
            <MdWhatsapp className='text-xl' /> Whats App
          </p>
          <p className='font-semibold'>+1 202 918-2132</p>
        </div>
        <div className='flex flex-col'>
          <p className='flex gap-2 items-center font-medium'>
            <LuPhoneCall className='text-xl' /> Call Us
          </p>
          <p className='font-semibold'>+1 202 918-2132</p>
        </div>
      </div>
    </div>
  );
};

export default AppFooterContact;
