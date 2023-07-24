import React from "react";

// Routing
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="w-11/12 lg:w-3/5 py-4 flex justify-between items-center">
      {/* Brand */}
      <ul className="font-brand font-bold text-4xl">
        <Link to="/bodyshine-react">Bodyshine</Link>
      </ul>

      {/* Navigation */}
      <ul className="flex space-x-10 text-lg">
        <li><Link to="/bodyshine-react">Home</Link></li>
        <li><Link to="/bodyshine-react/Massages">Massages</Link></li>
        <li><Link to="/bodyshine-react/Contact">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;