import { Link } from "react-router-dom";
// import { motion } from "framer-motion";






const Navbar = () => {
  return (
    <>
      <nav>
        <div className="p-4">
        <ul className="flex gap-x-8 text-yellow-900 justify-center font-semibold p-4 font-secondary text-xl tracking-wider">
          <li>
            <Link to="/" className="hover:text-[#FFFB05] after:mt-1 after:content-[''] after:block after:h-1 after:w-full after:bg-[#FFFB05] after:scale-x-0 after:origin-left after:transition-transform after:delay-200 after:ease-linear hover:after:scale-x-100">Home</Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-[#FFFB05] after:mt-1 after:content-[''] after:block after:h-1 after:w-full after:bg-[#FFFB05] after:scale-x-0 after:origin-left after:transition-transform after:delay-200 after:ease-linear hover:after:scale-x-100" >About</Link>
          </li>
          <li>
            <Link to="/services" className="hover:text-[#FFFB05] after:mt-1 after:content-[''] after:block after:h-1 after:w-full after:bg-[#FFFB05] after:scale-x-0 after:origin-left after:transition-transform after:delay-200 after:ease-linear hover:after:scale-x-100">Services</Link>
          </li>
          <li>
            <Link to="/projects" className="hover:text-[#FFFB05] after:mt-1 after:content-[''] after:block after:h-1 after:w-full after:bg-[#FFFB05] after:scale-x-0 after:origin-left after:transition-transform after:delay-200 after:ease-linear hover:after:scale-x-100">Projects</Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-[#FFFB05] after:mt-1 after:content-[''] after:block after:h-1 after:w-full after:bg-[#FFFB05] after:scale-x-0 after:origin-left after:transition-transform after:delay-200 after:ease-linear hover:after:scale-x-100" >Contact</Link>
          </li>
        </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
