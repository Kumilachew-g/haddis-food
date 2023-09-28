import axios from 'axios';

export const getAllFood = () => async (dispatch) => {
  dispatch({ type: 'GET_FOODS_REQUEST' });
  try {
    const response = await axios.get('/api/foods/getallfoods');
    dispatch({ type: 'GET_FOODS_SUCCESS', payload: response.data });
  } catch (error) {
    dispatch({ type: 'GET_FOODS_FAILED', payload: error });
  }
};

export const getFoodById = (foodId) => async (dispatch) => {
  dispatch({ type: 'GET_FOOD_BY_ID_REQUEST' });
  try {
    const response = await axios.post('/api/foods/getfoodbyid', { foodId });
    dispatch({ type: 'GET_FOOD_BY_ID_SUCCESS', payload: response.data });
  } catch (error) {
    dispatch({ type: 'GET_FOOD_BY_ID_FAILED', payload: error });
  }
};

//

export const filterFood = (searchKey, category) => async (dispatch) => {
  var filteredFoods;
  dispatch({ type: 'GET_FOODS_REQUEST' });
  try {
    const response = await axios.get('/api/foods/getallfoods');

    //  search foods by name
    filteredFoods = response.data.filter((food) =>
      food.name.toLowerCase().includes(searchKey.toLowerCase())
    );

    // filter foods by category
    if (category !== 'all') {
      filteredFoods = response.data.filter(
        (food) => food.category.toLowerCase() === category.toLowerCase()
      );
    }

    dispatch({ type: 'GET_FOODS_SUCCESS', payload: filteredFoods });
  } catch (error) {
    dispatch({ type: 'GET_FOODS_FAILED', payload: error });
  }
};

//  add food action

export const addFood = (food) => async (dispatch) => {
  dispatch({ type: 'ADD_FOOD_REQUEST' });
  try {
    await axios.post('/api/foods/addfood', { food });
    dispatch({ type: 'ADD_FOOD_SUCCESS' });
  } catch (error) {
    dispatch({ type: 'ADD_FOOD_FAILED', payload: error });
  }
};

// edit food action

export const editFood = (editedFood) => async (dispatch) => {
  dispatch({ type: 'EDIT_FOOD_REQUEST' });
  try {
    await axios.post('/api/foods/editfood', { editedFood });
    dispatch({ type: 'EDIT_FOOD_SUCCESS' });
    window.location.href = '/admin/foodlist';
  } catch (error) {
    dispatch({ type: 'EDIT_FOOD_FAILED', payload: error });
  }
};

// delete food action
export const deleteFood = (foodId) => async (dispatch) => {
  try {
    await axios.post('/api/foods/deletefood', { foodId });
    alert('Are you sure you want to delete this food?');
    window.location.reload();
  } catch (error) {
    alert('Failed to delete this food');
  }
};
