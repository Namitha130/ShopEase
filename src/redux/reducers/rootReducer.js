import { combineReducers } from "redux";
import { fetchProductsReducer, selectedProductReducer } from "./productReducer";

import {
  categoryListReducer,
  categoryTypeReducer,
} from "./categoryTypeReducer";

import {cartReducer} from "./cartReducer";

const rootReducer = combineReducers({
  allProducts: fetchProductsReducer,
  selectedProduct: selectedProductReducer,
  categoryList: categoryListReducer,
  category: categoryTypeReducer,
  cart: cartReducer,
});
export default rootReducer;
