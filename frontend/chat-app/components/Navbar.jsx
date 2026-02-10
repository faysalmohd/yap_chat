import React from "react";

const Navbar = () => {
  return (
    <nav className="w-full h-16 px-8 flex items-center justify-between bg-white shadow-sm">
      {/* Logo */}
      <div className="flex items-center gap-2 text-xl font-semibold text-gray-800">
        <div className="w-8 h-8 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500" />
        Brand
      </div>

      {/* Links */}
      <ul className="flex items-center gap-8 text-gray-600 font-medium">
        <li className="cursor-pointer hover:text-indigo-600 transition-colors">
          Home
        </li>
        <li className="cursor-pointer hover:text-indigo-600 transition-colors">
          Profile
        </li>
        <li className="cursor-pointer hover:text-indigo-600 transition-colors">
          Settings
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
