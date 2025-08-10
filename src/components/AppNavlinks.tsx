interface LinkTypes {
  icon: React.ReactElement;
  name: string;
}

const AppNavlinks = ({ icon, name }: LinkTypes) => {
  return (
    <div className='cart flex items-center gap-2'>
      <div className='text-primary '>{icon}</div>
      {/* <Link to='/cart'>Cart</Link> */}
      <a href='' className='font-semibold transition hover:text-primary'>
        {name[0].toUpperCase() + name.slice(1).toLowerCase()}
      </a>
    </div>
  );
};

export default AppNavlinks;
