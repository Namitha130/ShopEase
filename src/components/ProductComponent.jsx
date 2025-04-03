import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import classes from "./styles.module.scss";
export const ProductComponent = () => {
  const products = useSelector((state) => state?.allProducts?.data);
  return (
    <section className={classes.allProductList}>
      {products?.map((product) => {
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
