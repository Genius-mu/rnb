import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-lg shadow-sm border-b border-gray-200"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo / Brand */}
        <Link to="/" className="flex items-center space-x-3">
          <div className="relative">
            <motion.div
              className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg"
              whileHover={{ scale: 1.1, rotate: 10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              D
            </motion.div>
            <motion.div
              className="absolute -top-1 -right-1 w-4 h-4 bg-yellow-300 rounded-full border-2 border-white"
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-extrabold text-gray-800 tracking-tight">
              RNB
            </span>
            <span className="text-xs text-orange-600 font-medium">
              Made with Love
            </span>
          </div>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-10">
          {[
            { name: "Home", path: "/" },
            { name: "Menu", path: "/menu" },
            { name: "Order", path: "/order" },
            { name: "About", path: "/about" },
            { name: "Contact", path: "/contact" },
          ].map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="text-gray-700 hover:text-orange-600 font-medium transition-colors relative group"
            >
              {item.name}
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </nav>

        {/* CTA Button */}
        <Link
          to="/order"
          className="hidden md:inline-flex items-center px-6 py-2.5 bg-orange-600 text-white font-semibold rounded-full hover:bg-orange-700 transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105"
        >
          Order Now
        </Link>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-gray-700">
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </motion.header>
  );
};

export default Header;
