import * as Types from "../actions/actionTypes";

const initialState = {
  cartItems: [],
  totalAmount: 0,
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.CART_ADD_ITEM:
      const existingItem = state.cartItems.find(
        (item) => item.id === action.payload.id
      );
      return existingItem
        ? {
            ...state,
            cartItems: state.cartItems.map((item) =>
              item.id === existingItem.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            ),
          }
        : {
            ...state,
            cartItems: [...state.cartItems, { ...action.payload, quantity: 1 }],
          };

    case Types.CART_REMOVE_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter((item) => item.id !== action.payload),
      };

    case Types.CART_ITEM_INCREASE_QUANTITY:
      return {
        ...state,
        cartItems: state.cartItems.map((item) =>
          item.id === action.payload
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ),
      };

    case Types.CART_ITEM_DECREASE_QUANTITY:
      return {
        ...state,
        cartItems: state.cartItems
          .map((item) =>
            item.id === action.payload
              ? { ...item, quantity: item.quantity - 1 }
              : item
          )
          .filter((item) => item.quantity > 0),
      };

    case Types.CART_TOTAL_AMOUNT:
      return {
        ...state,
        totalAmount: action.payload,
      };

    default:
      return state;
  }
};

