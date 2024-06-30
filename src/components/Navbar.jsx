import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="w-screen">
        <div className="p-2">
          <ul className="flex items-center justify-center gap-3 font-secondary text-xs font-bold text-white md:justify-evenly md:text-xl">
            <li>
              <Link to="/" className="anmBorder">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="anmBorder">
                About
              </Link>
            </li>
            <li>
              <Link to="/services" className="anmBorder">
                Services
              </Link>
            </li>
            <li>
              <Link to="/projects" className="anmBorder">
                Projects
              </Link>
            </li>
            <li>
              <Link to="/contact" className="anmBorder">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
