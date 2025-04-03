import React from "react";
import { useSelector } from "react-redux";
import classes from "./styles.module.scss";
import { Link } from "react-router-dom";
export const WishList = () => {
  const wishlist = useSelector((state) => state.wishlist.wishlist);

  return (
    <section className={classes.allProductList}>
      {wishlist?.map((product) => {
        return (
          <Link to={`/product/${product?.id}`}>
            <div className={classes.allProductList_eachProduct}>
              <img src={product?.image} alt="product-img" />
              <p>
                {product?.title?.length > 50
                  ? `${product.title.slice(0, 50)} ...`
                  : product.title}
              </p>
              <h3>$ {product?.price}</h3>
            </div>
          </Link>
        );
      })}
    </section>
  );
};
