import React from "react";

// Routing
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="w-11/12 py-4 flex justify-between">
      {/* Brand */}
      <ul>
        <Link to="/">Bodyshine</Link>
      </ul>

      {/* Navigation */}
      <ul className="flex space-x-10">
        <li><Link to="/bodyshine-react">Home</Link></li>
        <li><Link to="/bodyshine-react/Massages">Massages</Link></li>
        <li><Link to="/bodyshine-react/Contact">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;