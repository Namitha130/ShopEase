import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  addCartItem,
  removeCartItem,
  getProductID,
  removeSelectedProduct,
} from "../redux/actions/productActions";
import classes from "./styles.module.scss";
import ToasterUi from "toaster-ui";

export const ProductDetails = () => {
  const product = useSelector((state) => state?.selectedProduct?.data);
  const cartItems = useSelector((state) => state?.cart?.cartItems);
  const { productId } = useParams();
  const dispatch = useDispatch();
  const toaster = new ToasterUi();

  useEffect(() => {
    if (productId && productId !== "") dispatch(getProductID(productId));
    return () => {
      dispatch(removeSelectedProduct());
    };
  }, [productId, dispatch]);

  // const handleAddingCart = (product) => {
  //   dispatch(addCartItem(product));
  //   toaster.addToast("Product added to cart");
  // };
  // Check if product is already in the cart
  const isProductInCart = cartItems?.some((item) => item.id === product?.id);

  const handleCartAction = () => {
    if (isProductInCart) {
      dispatch(removeCartItem(product.id));
      toaster.addToast("Product removed from cart");
    } else {
      dispatch(addCartItem(product));
      toaster.addToast("Product added to cart");
    }
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

        {/* <button
          className={classes.productDetails__content__addingToBag}
          onClick={handleCartAction}
        >
          <i className="bx bxs-shopping-bag" style={{ color: "#fffbfb" }}></i>
          {isProductInCart ? "Remove from Cart" : "Add to Bag"}
        </button> */}

        <button
          className={
            isProductInCart
              ? classes.productDetails__content__removeFromCart 
              : classes.productDetails__content__addingToBag 
          }
          onClick={handleCartAction}
        >
          <i className="bx bxs-shopping-bag" style={{ color: "#fffbfb" }}></i>
          {isProductInCart ? "Remove from Cart" : "Add to Bag"}
        </button>
      </div>
    </section>
  );
};
