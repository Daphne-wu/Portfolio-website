import { Link } from "react-router-dom";
import logo from "./assets/images/logo.png";

const Navbar = () => (
  <nav className="flex items-center justify-between px-8 py-4 bg-[#141414] fixed top-0 left-0 w-full z-50">
    {/* Logo or Placeholder on the left */}
    <div className="flex items-center">
        <Link to="/hero" className="hover:text-vibrant-yellow transition-colors font-sono">
          <img src={logo} alt="Logo" className="h-12" />
        </Link>
    </div>

    {/* Navbar items */}
    <ul className="flex space-x-16 text-white text-lg">
      <li>
        <Link to="/hero" className="hover:text-vibrant-yellow transition-colors font-sono">
          work
        </Link>
      </li>
      <li>
        <Link to="/about" className="hover:text-vibrant-yellow transition-colors font-sono">
          about
        </Link>
      </li>
      <li>
        <Link to="/fun" className="hover:text-vibrant-yellow transition-colors font-sono">
          fun
        </Link>
      </li>
      <li>
        <Link to="/resume" className="hover:text-vibrant-yellow transition-colors font-sono">
          resume
        </Link>
      </li>
      
    </ul>
  </nav>
);

export default Navbar;
