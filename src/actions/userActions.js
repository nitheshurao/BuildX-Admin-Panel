import axios from 'src/utils/axios';
import userService from 'src/services/userService';

export const  USER_CREATION_REQUEST = '@account/user=creation-request';
export const  USER_CREATION_SUCCESS = '@account/user=creation-success';
export const USER_CREATION_FAILURE = '@account/user-creation-failure';
export const SILENT_LOGIN = '@account/silent-login';
export const LOGOUT = '@account/logout';
export const REGISTER = '@account/register';
export const UPDATE_PROFILE = '@account/update-profile';

export function registerUser (name, mobile_number,is_admin,is_portal_user,primary_address,address,pincode,state,email){
  return async (dispatch) => {
    try {
      dispatch({ type: USER_CREATION_REQUEST });

      const user = await userService.registerUser (name, mobile_number,is_admin,is_portal_user,primary_address,address,pincode,state,email);

      dispatch({
        type: USER_CREATION_SUCCESS,
        payload: {
          user
        }
      });
    } catch (error) {
      dispatch({ type: USER_CREATION_FAILURE });
      throw error;
    }
  };
}



