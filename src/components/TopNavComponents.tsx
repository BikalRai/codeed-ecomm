import { LuShoppingCart, LuUser } from "react-icons/lu";
import { MdOutlineSearch } from "react-icons/md";
import AppNavlinks from "./AppNavlinks";
import { Link } from "react-router-dom";

const TopNavComponents = () => {
  return (
    <div className='flex items-center justify-between pt-4 '>
      <div className='logo'>
        {/* <Link to='/'> MegaMart</Link> */}
        <Link to='/' className='text-primary text-4xl font-extrabold'>
          MegaMart
        </Link>
      </div>
      <div className='flex gap-7 items-center text-text'>
        <div className='search flex items-center rounded-[8px] bg-bg3 w-[507px] p-4 gap-2'>
          <div className='text-primary '>
            <MdOutlineSearch className='w-5 h-5 cursor-pointer' />
          </div>
          <input
            type='search'
            placeholder='Search essentials, groceries and more...'
            className='border-0 outline-0 w-full text-sm placeholder:text-text'
          />
        </div>
        <AppNavlinks icon={<LuUser />} name='login' />
        <AppNavlinks icon={<LuShoppingCart />} name='cart' />
      </div>
    </div>
  );
};

export default TopNavComponents;
