import axios from 'axios';

// Register user
export const registerUser = (user) => async (dispatch) => {
  dispatch({ type: 'USER_REGISTER_REQUEST' });

  // Send user register request to backend
  try {
    const response = await axios.post('/api/users/register', user);
    console.log(response);
    dispatch({ type: 'USER_REGISTER_SUCCESS' });
  } catch (error) {
    dispatch({ type: 'USER_REGISTER_FAILED', payload: error });
  }
};

// Login user
export const loginUser = (user) => async (dispatch) => {
  dispatch({ type: 'USER_LOGIN_REQUEST' });

  try {
    // Send user login request to backend
    const response = await axios.post('/api/users/login', user);
    console.log(response);

    // If login is successful, dispatch success
    dispatch({ type: 'USER_LOGIN_SUCCESS', payload: response.data });

    // Save user info in local storage
    localStorage.setItem('currentUser', JSON.stringify(response.data));

    // Redirect user to home page
    window.location.href = '/';
  } catch (error) {
    // If login fails, dispatch error
    dispatch({ type: 'USER_LOGIN_FAILED', payload: error });
  }
};

export const logoutUser = () => (dispatch) => {
  localStorage.removeItem('currentUser');
  window.location.href = '/login';
};

// Get all users actions for admin
export const getAllUsers = () => async (dispatch) => {
  dispatch({ type: 'GET_USERS_REQUEST' });
  try {
    const response = await axios.get('/api/users/getallusers');
    console.log(response);
    dispatch({ type: 'GET_USERS_SUCCESS', payload: response.data });
  } catch (error) {
    dispatch({ type: 'GET_USERS_FAILED', payload: error });
  }
};

// Delete user

export const deleteUser = (userId) => async (dispatch) => {
  try {
    await axios.post('/api/users/deleteuser', { userId });
    alert('User deleted successfully');
    window.location.reload();
  } catch (error) {
    alert('Something went wrong');
    console.log(error);
  }
};
