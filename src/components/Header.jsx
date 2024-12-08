import { useContext } from "react";
import Hamburger from "./Hamburger";
import { SmallScreenContext } from "../contexts/SmallScreen";
import { Link } from "react-router-dom";
import LogInButton from "./LogInButton";

const Header = ({ isMenuOpen, handleMenuOpen }) => {
  const { isSmallScreen } = useContext(SmallScreenContext);

  return (
    <div className="bg-brand-primary flex">
      <div className="p-4">
        {isSmallScreen && (
          <Hamburger isMenuOpen={isMenuOpen} handleMenuOpen={handleMenuOpen} />
        )}
      </div>
      <header className="w-full py-8 text-center">
        <h1 className="text-3xl font-bold text-white md:text-5xl flex  items-center">
          <Link to="/" className="flex items-center">
            {/* Image */}
            <img
              src="/image/NEU.png"
              alt="NEU Logo"
              style={{ height: '50px', marginRight: '8px' }} // Adjust size as needed
              className="inline-block"
            />
            {/* Text */}
            <span className="text-brand-secondary rounded-l-lg rounded-r border bg-gray-50 px-2 tracking-wide">
              NEU
            </span>
            <span className="ml-2">News</span>
          </Link>
        </h1>
      </header>
      <div>
        <LogInButton />
      </div>
    </div>
  );
};

export default Header;
