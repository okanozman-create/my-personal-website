import { Link } from "react-router-dom";
// import { motion } from "framer-motion";






const Navbar = () => {
  return (
    <>
      <nav>
        <div className="p-4">
        <ul className="flex gap-x-8 text-yellow-900 justify-center font-semibold p-4 font-secondary text-xl tracking-wider">
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
