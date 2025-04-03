import { ADD_TO_WISHLIST, LOAD_WISHLIST } from "../actions/actionTypes";

const initialState = {
  wishlist: JSON.parse(localStorage.getItem("wishlist")) || [],
};

export const wishListReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_WISHLIST:
      const updatedWishlist = Array.isArray(state.wishlist)
        ? [...state.wishlist]
        : [];

      if (!updatedWishlist.some((item) => item.id === action.payload.id)) {
        updatedWishlist.push(action.payload);
        localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
      }

      return { ...state, wishlist: updatedWishlist };
    case LOAD_WISHLIST:
      return {
        ...state,
        wishlist: Array.isArray(action.payload) ? action.payload : [],
      };

    default:
      return state;
  }
};
