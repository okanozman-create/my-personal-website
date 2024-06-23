import { Link } from "react-router-dom";







const Navbar = () => {
  return (
    <>
      <nav className="w-full" >
        
        <div className="p-4">
        <ul className="flex flex-col items-center lg:flex-row  gap-y-1 lg:gap-x-8 text-yellow-900 lg:justify-center font-semibold  font-secondary text-sm lg:text-xl tracking-wider">
          <li>
            <Link to="/" className="anmBorder">Home</Link>
          </li>
          <li>
            <Link to="/about" className="anmBorder " >About</Link>
          </li>
          <li>
            <Link to="/services" className="anmBorder">Services</Link>
          </li>
          <li>
            <Link to="/projects" className="anmBorder">Projects</Link>
          </li>
          <li>
            <Link to="/contact" className="anmBorder" >Contact</Link>
          </li>
        </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
