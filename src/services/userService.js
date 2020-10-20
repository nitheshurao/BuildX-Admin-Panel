import jwtDecode from 'jwt-decode';
import axios from 'src/utils/axios';

class UserService {
 
  registerUser = (name, mobile_number,is_admin,is_portal_user,primary_address,address,pincode,state,email) => new Promise((resolve, reject) => {
    var axios = require('axios');
    var data = JSON.stringify({"name":"Syed Redhan","mobile_number":"7760225405","is_admin":true,
    "is_portal_user":true,"primary_address":{"address":"Evershine cosmic","pincode":"400093","state":"Maharashtra"},"email":"smredhan02@gmail.com"});
    
    var config = {
      method: 'post',
      url: 'http://15.207.7.54:8080/users/initiate-registration',
      headers: { 
        'Content-Type': 'application/json'
      },
      data : data
    };
    
    axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });
  })

 

  setSession = (accessToken) => {
    if (accessToken) {
      localStorage.setItem('accessToken', accessToken);
      axios.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
    } else {
      localStorage.removeItem('accessToken');
      delete axios.defaults.headers.common.Authorization;
    }
  }

  getAccessToken = () => localStorage.getItem('accessToken');

  isValidToken = (accessToken) => {
    if (!accessToken) {
      return false;
    }

    const decoded = jwtDecode(accessToken);
    const currentTime = Date.now() / 1000;

    return decoded.exp > currentTime;
  }

  isAuthenticated = () => !!this.getAccessToken()
}

const userService = new UserService();

export default userService;
