import React from "react";
import { Link } from "react-router-dom";
import classes from "./styles.module.scss";
export const Navbar = () => {
  return (
    <nav className={classes.navbar}>
      <div className={classes.navbar__logo}>
        <Link to="/">
          <h1>ShopEase</h1>
        </Link>
      </div>

      <div className={classes.navbar__icons}>
        <Link to="/wishlist" className={classes.navbar__icons__wishlist}>
          <i class="bx bxs-heart" style={{color : "red"}}></i>
        </Link>
        <Link className={classes.navbar__icons__bag}>
          <i class="bx bxs-cart" style={{color : "blue"}}></i>
        </Link>
      </div>
    </nav>
  );
};
