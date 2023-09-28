export const getAllFoodsReducer = (state = { foods: [] }, action) => {
  switch (action.type) {
    case 'GET_FOODS_REQUEST':
      return {
        loading: true,
        ...state,
      };
    case 'GET_FOODS_SUCCESS':
      return {
        loading: false,
        foods: action.payload,
      };
    case 'GET_FOODS_FAILED':
      return {
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

// Get food by reducer
export const getFoodByIdReducer = (state = {}, action) => {
  switch (action.type) {
    case 'GET_FOOD_BY_ID_REQUEST':
      return {
        loading: true,
        ...state,
      };
    case 'GET_FOOD_BY_ID_SUCCESS':
      return {
        loading: false,
        food: action.payload,
      };
    case 'GET_FOOD_BY_ID_FAILED':
      return {
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

// Add food reducer

export const addFoodReducer = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_FOOD_REQUEST':
      return {
        loading: true,
        ...state,
      };
    case 'ADD_FOOD_SUCCESS':
      return {
        loading: false,
        success: true,
      };
    case 'ADD_FOOD_FAILED':
      return {
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

// Update food reducer

export const editFoodReducer = (state = {}, action) => {
  switch (action.type) {
    case 'EDIT_FOOD_REQUEST':
      return {
        editLoading: true,
        ...state,
      };
    case 'EDIT_FOOD_SUCCESS':
      return {
        editLoading: false,
        editSuccess: true,
      };
    case 'EDIT_FOOD_FAILED':
      return {
        editError: action.payload,
        editLoading: false,
      };
    default:
      return state;
  }
};
