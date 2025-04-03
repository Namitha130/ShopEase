import { combineReducers } from "redux";
import { fetchProductsReducer, selectedProductReducer } from "./productReducer";
import { wishListReducer } from "./wishListReducer";
import {
  categoryListReducer,
  // categoryListReducer,
  categoryTypeReducer,
} from "./categoryTypeReducer";

const rootReducer = combineReducers({
  allProducts: fetchProductsReducer,
  selectedProduct: selectedProductReducer,
  wishlist: wishListReducer,
  categoryList: categoryListReducer,
  category: categoryTypeReducer,
});
export default rootReducer;
