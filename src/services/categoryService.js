import jwtDecode from 'jwt-decode';
import axios from 'axios';

class categoryService {
//   setAxiosInterceptors = ({ onLogout }) => {
//     axios.interceptors.response.use(
//       (response) => response,
//       (error) => {
//         if (error.response && error.response.status === 401) {
//           this.setSession(null);

//           if (onLogout) {
//             onLogout();
//           }
//         }

//         return Promise.reject(error);
//       }
//     );
//   };

//   handleAuthentication() {
//     const accessToken = this.getAccessToken();

//     if (!accessToken) {
//       return;
//     }

//     if (this.isValidToken(accessToken)) {
//       this.setSession(accessToken);
//     } else {
//       this.setSession(null);
//     }
//   }

createCategory = (iname, idescription) => new Promise((resolve, reject) => {
    console.log("inside createCategory ")
  var  category = {
          name: iname,
          description: idescription
        }
        var category_items =[category]
        console.log("category_item",category_items)
        var category_items_data = JSON.stringify(category_items)
        var config = {
            method: 'post',
            url: 'http://15.207.7.54:8080/category/register',
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
              },
            data : category_items_data
          };
          
          axios(config)
          .then(function (response) {
            console.log(JSON.stringify(response.data));
          })
          .catch(function (error) {
            console.log(error);
          });
  })

  loginInWithToken = () => new Promise((resolve, reject) => {
    axios.get('/api/account/me')
      .then((response) => {
        if (response.data.user) {
          resolve(response.data.user);
        } else {
          reject(response.data.error);
        }
      })
      .catch((error) => {
        reject(error);
      });
  })

//   logout = () => {
//     this.setSession(null);
//   }

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

const catService = new categoryService();

export default catService;
