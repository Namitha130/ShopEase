import fakeStoreApi from "../../apis/fakeStoreApi";
import * as Types from "./actionTypes";

export const getProducts = () => (dispatch) => {
  dispatch({ type: Types.FETCH_PRODUCTS_LOADING });

  fakeStoreApi
    .get("/products?limit=150")
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

export const addToWishlist = (product) => (dispatch, getState) => {
  dispatch({
    type: Types.ADD_TO_WISHLIST,
    payload: product,
  });
};

export const loadWishlist = () => {
  return {
    type: Types.LOAD_WISHLIST,
    payload: JSON.parse(localStorage.getItem("wishlist")) || [],
  };
};

export const getCategoryType = (category) => (dispatch) => {
  dispatch({ type: Types.FETCH_PRODUCTS_LOADING });
  fakeStoreApi
    .get(`/products/category?type=${category}`)
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
  fetch("https://fakestoreapi.in/api/products/category")
    .then((res) => res.json()) // Convert response to JSON
    .then((data) => {
      console.log("getCategoryList", data);
      dispatch({ type: Types.CATEGORYLIST_SUCCESS, payload: data });
    })
    .catch((error) => {
      console.log("Error fetching categories:", error);
    });
};
