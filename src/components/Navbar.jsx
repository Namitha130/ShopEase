import React from "react";
import { Link } from "react-router-dom";
import classes from "./styles.module.scss";
import { useSelector } from "react-redux";
export const Navbar = () => {
  const cartItems = useSelector((state) => state?.cart?.cartItems);
  const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <nav className={classes.navbar}>
      <div className={classes.navbar__logo}>
        <Link to="/">
          <h1>ShopEase</h1>
        </Link>
      </div>
      <Link to={"/cart"}>
        <div className={classes.navbar__icons}>
          <i class="bx bxs-cart"></i>
          <span> {totalQuantity} </span>
        </div>
      </Link>
    </nav>
  );
};
