import * as Types from "../actions/actionTypes";

const initialState = {
  loading: false,
  products: [],
  errors: {},
};

// Reducers always takes 2 paras state, action
export const fetchProductsReducer = (
  state = initialState,
  { type, payload }
) => {
  switch (type) {
    case Types.FETCH_PRODUCTS_LOADING: {
      return {
        ...state,
        loading: true,
        data: [],
        errors: {},
      };
    }
    case Types.FETCH_PRODUCTS_SUCCESS: {
      return {
        ...state,
        loading: false,
        data: payload,
        errors: {},
      };
    }
    case Types.FETCH_PRODUCTS_FAILURE: {
      return {
        ...state,
        loading: false,
        data: [],
        errors: payload,
      };
    }
    default:
      return state;
  }
};

export const selectedProductReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case Types.SELECTED_PRODUCT_LOADING: {
      return {
        ...state,
        loading: true,
        data: [],
        errors: {},
      };
    }
    case Types.SELECTED_PRODUCT_SUCCESS: {
      return {
        ...state,
        loading: false,
        data: payload,
        errors: {},
      };
    }
    case Types.REMOVE_SELECTED_PRODUCT: {
      return {};
    }
    case Types.SELECTED_PRODUCT_FAILURE: {
      return {
        ...state,
        loading: false,
        data: [],
        errors: payload,
      };
    }
    default:
      return state;
  }
};
