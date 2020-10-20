import axios from 'src/utils/axios';
import catService from 'src/services/categoryService';

export const CREATE_CATEGORY_REQUEST = '@account/create-category-request';
export const LOGIN_SUCCESS = '@account/login-success';
export const LOGIN_FAILURE = '@account/login-failure';
export const SILENT_LOGIN = '@account/silent-login';
export const LOGOUT = '@account/logout';
export const REGISTER = '@account/register';
export const UPDATE_PROFILE = '@account/update-profile';

export function createCategory(name, description) {
  return async (dispatch) => {
    try {
      dispatch({ type: CREATE_CATEGORY_REQUEST });

      const user = await catService.createCategory(name, description);

    //   dispatch({
          
    //     // type: LOGIN_SUCCESS,
    //     // payload: {
    //     //   user
    //     // }
    //   });
    } catch (error) {
        console.log("Error",error)
      dispatch({ type: LOGIN_FAILURE });
      throw error;
    }
  };
}

export function setUserData(user) {
  return (dispatch) => dispatch({
    type: SILENT_LOGIN,
    payload: {
      user
    }
  });
}



export function register() {
  return true;
}

