import { Link } from "react-router-dom";
import TopicSelector from "./TopicSelector";
import { HomeIcon } from "@heroicons/react/24/outline";
import { UserIcon } from "@heroicons/react/24/outline";

const Menu = ({ handleMenuOpen }) => (
  <nav className="p-4">
    <ul className="space-y-4 pl-6">
      <li className="group">
          <div className="flex items-center">
            <Link
              className="flex items-center text-white text-lg font-semibold transition-transform transform group-hover:scale-110"
              onClick={handleMenuOpen}
              to="/info"
            >
              <HomeIcon className="h-6 w-6 mr-3 group-hover:text-brand-secondary transition-colors" />
              <span className="group-hover:underline group-hover:text-brand-secondary">Info Page</span>
            </Link>
          </div>
        </li>

      <li className="group">
        <div className="flex items-center">
          <Link
            className="flex items-center text-white text-lg font-semibold transition-transform transform group-hover:scale-110"
            onClick={handleMenuOpen}
            to="/"
          >
            <HomeIcon className="h-6 w-6 mr-3 group-hover:text-brand-secondary transition-colors" />
            <span className="group-hover:underline group-hover:text-brand-secondary">Home</span>
          </Link>
        </div>
      </li>

      <li className="group">
        <div className="flex items-center">
          <Link
            className="flex items-center text-white text-lg font-semibold transition-transform transform group-hover:scale-110"
            onClick={handleMenuOpen}
            to="/profile"
          >
            <UserIcon className="h-6 w-6 mr-3 group-hover:text-brand-secondary transition-colors" />
            <span className="group-hover:underline group-hover:text-brand-secondary">Profile</span>
          </Link>
        </div>
      </li>

      <li>
        <TopicSelector onSelect={handleMenuOpen} />
      </li>
    </ul>
  </nav>
);

export default Menu;
