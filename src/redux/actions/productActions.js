import fakeStoreApi from "../../apis/fakeStoreApi";
import * as Types from "./actionTypes";

export const getProducts = () => (dispatch) => {
  dispatch({ type: Types.FETCH_PRODUCTS_LOADING });

  fakeStoreApi
    .get("/products")
    .then((response) => {
      dispatch({ type: Types.FETCH_PRODUCTS_SUCCESS, payload: response?.data });
    })
    .catch(() => {
      dispatch({
        type: Types.FETCH_PRODUCTS_FAILURE,
        payload: "",
      });
    });
};
export const getProductID = (id) => (dispatch) => {
  dispatch({ type: Types.SELECTED_PRODUCT_LOADING });

  fakeStoreApi
    .get(`/products/${id}`)
    .then((response) => {
      dispatch({
        type: Types.SELECTED_PRODUCT_SUCCESS,
        payload: response?.data,
      });
    })
    .catch(() => {
      dispatch({
        type: Types.SELECTED_PRODUCT_FAILURE,
        payload: "",
      });
    });
};

export const removeSelectedProduct = () => {
  return {
    type: Types.REMOVE_SELECTED_PRODUCT,
  };
};



export const getCategoryType = (category) => (dispatch) => {
  dispatch({ type: Types.FETCH_PRODUCTS_LOADING });
  fakeStoreApi
    .get(`/products/category/${category}`)
    .then((response) => {
      dispatch({ type: Types.FETCH_PRODUCTS_SUCCESS, payload: response?.data });
    })
    .catch(() => {
      dispatch({
        type: Types.CATEGORY_TYPE_FAILURE,
        payload: "",
      });
    });
};

export const getCategoryList = () => (dispatch) => {
  
  fetch("https://fakestoreapi.com/products/categories")
    .then((res) => res.json()) 
    .then((data) => {
      dispatch({ type: Types.CATEGORYLIST_SUCCESS, payload: data });
    })
    .catch((error) => {
      console.log("Error fetching categories:", error);
    });
};


// cart Actions 
export const addCartItem = (product) => (dispatch, getState) => {
  dispatch({ type: Types.CART_ADD_ITEM, payload: product });
  dispatch(updateCartTotal());
};

export const removeCartItem = (productId) => (dispatch, getState) => {
  dispatch({ type: Types.CART_REMOVE_ITEM, payload: productId });
  dispatch(updateCartTotal());
};

export const increaseCartItemQuantity = (productId) => (dispatch, getState) => {
  dispatch({ type: Types.CART_ITEM_INCREASE_QUANTITY, payload: productId });
  dispatch(updateCartTotal());
};

export const decreaseCartItemQuantity = (productId) => (dispatch, getState) => {
  dispatch({ type: Types.CART_ITEM_DECREASE_QUANTITY, payload: productId });
  dispatch(updateCartTotal());
};

export const updateCartTotal = () => (dispatch, getState) => {
  const { cart } = getState();
  const totalAmount = cart.cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  dispatch({ type: Types.CART_TOTAL_AMOUNT, payload: totalAmount });
};