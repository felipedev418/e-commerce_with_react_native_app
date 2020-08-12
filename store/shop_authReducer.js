import { LOGIN, LOGOUT } from './shop-actions';
import { AsyncStorage } from 'react-native';

const initialState = {
  user: {},
  error: {},
};

export default (state = initialState, action) => {
  //set user if token doesn't expire yet
  const userInformation = async () => {
    const getUser = await AsyncStorage.getItem('user');
    if (!getUser) {
      return (state.user = {});
    }
    const parsedUser = await JSON.parse(getUser);
    return (state.user = parsedUser.data);
  };
  userInformation();
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        user: action.user,
        error: action.error,
      };
    case LOGOUT:
      return {
        user: {},
      };
  }
  return state;
};
