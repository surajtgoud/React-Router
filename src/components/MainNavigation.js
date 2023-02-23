import React from "react";
import { Link } from "react-router-dom";
import "./MainNavigation.css";

export default function MainNavigation() {
  return (
    <header>
      <nav>
        <ul className="list">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
