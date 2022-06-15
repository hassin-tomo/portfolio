import React from "react";
import {Link} from "react-router-dom";

const Header = () => {
  return <header>
    <div className="logo">
      <h3>PORTFOLIO</h3>
    </div>
    <nav>
      <ul>
        <li>
          <Link to="/">HOME</Link>
        </li>
        <li>
          <Link to="/design">DESIGN</Link>
        </li>
        // <li>
        //   <a href="/MOVIE">MOVIE</a>
        // </li>
      </ul>
    </nav>
  </header>;
};
export default Header;
