import { useState } from "react";
import Link from "../../Link/Link";
import { FaBarsStaggered,FaGears } from "react-icons/fa6";


const NavBar = () => {
  const [open, setOpen] = useState(false)
  const routes = [
    { path: '/', name: 'Home', id: 'home' },
    { path: '/about', name: 'About', id: 'about' },
    { path: '/contact', name: 'Contact', id: 'contact' },
    { path: '/products/:id', name: 'Product Details', id: 'product-details' },
    { path: '*', name: 'Not Found', id: 'not-found' },
  ];
  return (
    <nav className="mb-10 bg-teal-700 text-white md:flex items-center ">
      <div className="md:hidden p-5" onClick={ () => setOpen(!open)} >
        {
          open === true ? 
          <FaBarsStaggered className="cursor-pointer"/> : 
          <FaGears className="cursor-pointer text-red-400"/>
        }
        
      </div>
      <ul className={`md:flex absolute md:static duration-1000
        ${open ? 'top-14' : '-top-64'}
      bg-teal-700 p-6`}>
        {
          routes.map(route => <Link key={route.id} route={route}></Link>)
        }
      </ul>
    </nav>
  );
};

export default NavBar;