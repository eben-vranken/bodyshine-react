import React from "react";

// Routing
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="w-11/12 lg:w-3/5 py-4 flex justify-between items-center">
      {/* Brand */}
      <ul className="font-brand font-bold text-4xl">
        <Link to="/bodyshine-react/">
          Bodyshine
        </Link>
      </ul>

      {/* Navigation */}
      <ul className="flex space-x-10 text-lg">
        <li><NavLink exact to="/bodyshine-react/">Home</NavLink></li>
        <li><NavLink exact to="/bodyshine-react/Massages">Massages</NavLink></li>
        <li><NavLink exact to="/bodyshine-react/Contact">Contact</NavLink></li>
      </ul>
    </nav>
  );
};

export default Navbar;