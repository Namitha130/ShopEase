import * as Types from "../actions/actionTypes";

const initialState = {
  loading: false,
  products: [],
  errors: {},
};

export const categoryListReducer = (state = [], { type, payload }) => {
  switch (type) {
    case Types.CATEGORYLIST_SUCCESS:
      return { ...state, payload };

    default:
      return state;
  }
};

export const categoryTypeReducer = (
  state = initialState,
  { type, payload }
) => {
  switch (type) {
    case Types.CATEGORY_TYPE_LOADING: {
      return {
        ...state,
        loading: true,
        data: [],
        errors: {},
      };
    }
    case Types.CATEGORY_TYPE_SUCCESS: {
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
