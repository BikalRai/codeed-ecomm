import BottomNavComponents from "./BottomNavComponents";
import TopNavComponents from "./TopNavComponents";

const AppNavbar = () => {
  return (
    <nav className='grid gap-5 ec-container'>
      <TopNavComponents />
      <hr className='bg-border border-0 h-0.5' />
      <BottomNavComponents />
      <hr className='bg-border border-0 h-0.5' />
    </nav>
  );
};

export default AppNavbar;
