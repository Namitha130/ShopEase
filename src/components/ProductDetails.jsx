import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  addCartItem,
  getProductID,
  removeSelectedProduct,
} from "../redux/actions/productActions";
import classes from "./styles.module.scss";

export const ProductDetails = () => {
  const product = useSelector((state) => state?.selectedProduct?.data);
  const { productId } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    if (productId && productId !== "") dispatch(getProductID(productId)); 
    return () => {
      dispatch(removeSelectedProduct());
    };
  }, [productId, dispatch]);

  const handleAddingCart = (product) => {
    dispatch(addCartItem(product));
    alert("Product added to cart");
  };

  if (!product) {
    return <p>Loading product details...</p>;
  }
  return (
    <section className={classes.productDetails}>
      <div className={classes.productDetails__image}>
        <img src={product?.image} alt={product?.title || "Product"} />
      </div>
      <div className={classes.productDetails__content}>
        <h1> {product?.title}</h1>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <h2>${product?.price}</h2>
          <div className={classes.productDetails__content__ratings}>
            <h5>
              <span> {product?.rating?.rate || "N/A"} ⭐ </span>
              <small> ({product?.rating?.count || 0} reviews) </small>
            </h5>
          </div>
        </div>
        <p>{product?.description}</p>

      
          <button className={classes.productDetails__content__addingToBag}
           onClick={() => handleAddingCart(product)}>
            <i class="bx bxs-shopping-bag" style={{ color: "#fffbfb" }}></i>
            Add to bag
          </button>

          {/* <button
            className={classes.productDetails__content__addingTo__wishlist}
            onClick={() => handleWishlistProduct(product)}
          >
            <i class="bx bx-heart"></i>
          </button> */}
   
      </div>
    </section>
  );
};
