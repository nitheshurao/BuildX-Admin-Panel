import jwtDecode from 'jwt-decode';
import axios from 'src/utils/axios';

class LoginService
{
    setAxiosInterceptors = ({ onLogout }) => {
        axios.interceptors.response.use(
          (response) => response,
          (error) => {
            if (error.response && error.response.status === 401) {
              this.setSession(null);
    
              if (onLogout) {
                onLogout();
              }
            }
    
            return Promise.reject(error);
          }
        );
      };


      handleAuthentication() {
        const accessToken = this.getAccessToken();
    
        if (!accessToken) {
          return;
        }
    
        if (this.isValidToken(accessToken)) {
          this.setSession(accessToken);
        } else {
          this.setSession(null);
        }
      }
      loginWithPhoneNumberOtp   =(phoneNumber,otp)=> new Promise((resolve, reject) => {
        axios.post('http://15.207.7.54:8080/users/validate-otp', { phoneNumber, otp })
          .then((response) => {
              console.log(response);
            if (response.data.user) {
              this.setSession(response.data.accessToken);
              resolve(response.data.user);
            } else {
              reject(response.data.error);
            }
          })
          .catch((error) => {
            console.log(response);

            reject(error);
          });
      })
    
 }

const authService = new AuthService();

export default loginService;
