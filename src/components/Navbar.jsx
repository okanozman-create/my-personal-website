//  import { Link } from "react-router-dom";



// const Navbar = () => {
//   return (
//     <>
//       <nav className="w-full" >
        
//         <div className="p-1  lg:p-4">
//         <ul className="flex flex-col items-center lg:flex-row  gap-y-1 lg:gap-x-8 text-orange-700 lg:justify-center font-semibold  font-secondary text-sm lg:text-xl tracking-wider">
//           <li>
//             <Link to="/" className="anmBorder">Home</Link>
//           </li>
//           <li>
//             <Link to="/about" className="anmBorder " >About</Link>
//           </li>
//           <li>
//             <Link to="/services" className="anmBorder">Services</Link>
//           </li>
//           <li>
//             <Link to="/projects" className="anmBorder">Projects</Link>
//           </li>
//           <li>
//             <Link to="/contact" className="anmBorder" >Contact</Link>
//           </li>
//         </ul>
//         </div>
//       </nav>
//     </>
//   );
// };

// export default Navbar;


  import { Link } from "react-router-dom";



const Navbar = () => {
  return (
    <>
      <nav className="w-screen" >
        
        <div className="p-2">
        <ul className=" flex items-center gap-2 justify-center md:justify-evenly  text-orange-700 font-semibold bg-white font-secondary text-xs md:text-xl ">
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




