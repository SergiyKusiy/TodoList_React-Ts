import React from "react";
import { NavLink } from 'react-router-dom'

const Navbar: React.FC = () => (
  <nav>
    <div className="nav-wrapper blue px1">
      <a href="/" className="brand-logo">
        TypeScript
      </a>
      <ul className="right hide-on-med-and-down">
        <li>
          <a href="/">Список справ</a>
        </li>
        <li>
          <a href="/">Інформація</a>
        </li>
      </ul>
    </div>
  </nav>
);

export default Navbar;
