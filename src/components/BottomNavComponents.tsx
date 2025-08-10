import { NavLink } from "react-router-dom";
import "./componentcss/navlink.css";

interface NavLinkTypes {
  name: string;
  path: string;
}

const navLinks: NavLinkTypes[] = [
  { name: "Groceries", path: "/groceries" },
  { name: "Preminum Fruits", path: "/fruits" },
  { name: "Home & Kitchen", path: "/kitchen" },
  { name: "Fashion", path: "/fashion" },
  { name: "Electronics", path: "/electronics" },
  { name: "Beauty", path: "/beauty" },
  { name: "Home Improvement", path: "/home-imp" },
  { name: "Sports, Toys & Luggage", path: "/sports" },
];

const BottomNavComponents = () => {
  return (
    <div>
      <ul className='flex items-center justify-between text-sm text-heading font-medium'>
        {navLinks.map((link, i) => (
          <li key={i}>
            <NavLink className='app-Navlink' to={link.path}>
              {link.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BottomNavComponents;
