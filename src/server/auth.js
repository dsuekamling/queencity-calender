import axios from 'axios';

// Set up the axios instance
const instance = axios.create({
  baseURL: 'http://localhost:3001',
  withCredentials: true,
});

// Function to check if user is logged in
const checkLoggedIn = async () => {
  try {
    const response = await instance.get('/login');
    if (response.data.loggedIn === true) {
      return response.data.user[0];
    } else {
      throw new Error('User is not logged in');
    }
  } catch (error) {
    console.log(error);
    return null;
  }
};

// Function to log in user
const login = async (email, password) => {
  try {
    const response = await instance.post('/login', {
      email: email,
      password: password,
    });
    if (response.data.message) {
      throw new Error(response.data.message);
    } else {
      return response.data[0];
    }
  } catch (error) {
    console.log(error);
    return null;
  }
};

// Function to log out user
const logout = async () => {
  try {
    await instance.get('/logout');
  } catch (error) {
    console.log(error);
  }
};

export { checkLoggedIn, login, logout };
