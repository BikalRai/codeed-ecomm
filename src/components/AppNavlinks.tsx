import { Link } from 'react-router-dom';

interface LinkTypes {
  icon: React.ReactElement;
  name: string;
  path: string;
}

const AppNavlinks = ({ icon, name, path }: LinkTypes) => {
  return (
    <div className="cart flex items-center gap-2">
      <div className="text-primary ">{icon}</div>
      {/* <Link to='/cart'>Cart</Link> */}
      <Link to={path} className="font-semibold transition hover:text-primary">
        {name[0].toUpperCase() + name.slice(1).toLowerCase()}
      </Link>
    </div>
  );
};

export default AppNavlinks;
