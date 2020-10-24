import React, { useState } from "react";
import { Link } from "react-router-dom";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import SearchIcon from "@material-ui/icons/Search";
import MenuIcon from "@material-ui/icons/Menu";

const NavBar = () => {
  const [isNavToggled, setClick] = useState(false);

  const toggleNav = () => setClick(!isNavToggled);

  const hideMobileNav = () => setClick(false);

  return (
    <div className="navbar">
      <Link to="/" onClick={hideMobileNav}>
        <img src="http://pngimg.com/uploads/amazon/amazon_PNG25.png" alt="" className="navbar__logo" />
        <span>.in</span>
      </Link>

      <div className="navbar__search">
        <form className="navbar__searchForm">
          <input type="text" placeholder="Search Products" className="navbar__searchInput" />
          <button type="submit" className="navbar__searchIcon">
            <SearchIcon />
          </button>
        </form>
      </div>

      <div className="navbar__toggle" onClick={toggleNav}>
        <MenuIcon />
      </div>

      <ul className={isNavToggled ? "navbar__links active" : "navbar__links"}>
        <li className="navbar__item">
          <Link to="/login" className="navbar__login" onClick={hideMobileNav}>
            <div className="navbar__loginLineOne">Hello, Asheesh</div>
            <div className="navbar__loginLineTwo">SignIn</div>
          </Link>
        </li>
        <li className="navbar__item">
          <Link to="/login" className="navbar__login" onClick={hideMobileNav}>
            <div className="navbar__loginLineOne">Returns</div>
            <div className="navbar__loginLineTwo">& Orders</div>
          </Link>
        </li>

        <li className="navbar__item">
          <Link to="/login" className="navbar__login" onClick={hideMobileNav}>
            <div className="navbar__loginLineOne">Try</div>
            <div className="navbar__loginLineTwo">Prime</div>
          </Link>
        </li>

        <li className="navbar__item">
          <Link to="/checkout" className="navbar__basket" onClick={hideMobileNav}>
            <ShoppingBasketIcon />
            <span className="navbar__basketCount">0</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
