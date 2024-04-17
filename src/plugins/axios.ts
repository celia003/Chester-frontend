import axios from 'axios';

import { useIsLoggedIn, useToken } from '@/stores/loggedin'
import { storeToRefs } from 'pinia'

export function axiosInterceptor() {
  axios.defaults.maxRedirects = 0;
  axios.interceptors.request.use(request => {
    // add auth header with jwt if account is logged in and request is to the api url
    // const account = accountService.accountValue;
    // const isLoggedIn = account?.token;
    // const isApiUrl = request.url.startsWith(process.env.VUE_APP_API_URL);
    if (localStorage.getItem('hasToken') && JSON.parse(localStorage.getItem('hasToken') || '{}').token !== undefined && JSON.parse(localStorage.getItem('hasToken') || '{}').token != ''){
      request.headers['Authorization'] = 'Token ' + JSON.parse(localStorage.getItem('hasToken') || '{}').token;
      request.xsrfCookieName = '_xsrf';
      request.xsrfHeaderName = 'X-XSRFToken';
    }

    return request;
  });

  axios.interceptors.response.use((response: any) => {
    return response;
  },
  (error) => {
    if (error.response) {
      if (error.response.status==401){
        if (error.response.data.detail.startsWith('regenerate')){
          const newToken = error.response.data.detail.split(' ')[1]

          const store_logged = useIsLoggedIn()
          const { logged } = storeToRefs(store_logged)
          
          const store_token = useToken()
          const { token } = storeToRefs(store_token)

          logged.value = true;
          token.value = newToken;

          // localStorage.setItem('token', JSON.stringify(newToken))
          return axios.request(error.config);
        }
        else{
          localStorage.removeItem('hasToken');
          localStorage.removeItem('isLogged');
          // localStorage.removeItem('vuex');
          // store.dispatch('authMod/logout', true);
          window.location.href='/';
        }
      }
      else{
        if (error.response.data.detail){
          localStorage.removeItem('hasToken');
          localStorage.removeItem('isLogged');
          window.location.href='/';
        }
        else{
          throw (error);
        }
      }
    }
    else{
      throw error;
    }
  }
  );
}

export default {
  install: (app: any) => {
    app.config.globalProperties.$axios = axios;
    axiosInterceptor();
  },
};

// export default {
//   install: (app: any) => {
//     app.config.globalProperties.$axios = axios.create({
//       headers: {
//         // Authorization: 'Bearer YOUR_TOKEN_HERE',
//         // Authorization: 'Token ' + localStorage.getItem('hasToken'),
//         Authorization: 'Token ' + JSON.parse(localStorage.getItem('hasToken')).token
//       },
//     });
//   },
// };