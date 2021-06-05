import {AxiosError, AxiosInstance} from 'axios';

const handleError = (error: AxiosError) => {
  let errorMessage = ''
  
  if (error.message) {
    if (error.response) {
      // Request made and server responded
      errorMessage = error.response.data
    } else if (error.request) {
      // The request was made but no response was received
      errorMessage = error.request
    } else {
      errorMessage = error.message
    }
    
    
  }
  
  throw new Error(errorMessage);
};

const setInterceptor = (serv: AxiosInstance) => {
  serv.interceptors.response.use(
    function (_response) {
      
      // Do something with response data
      return _response;
    },
    error =>
      // Do something with response error
      handleError(error),
  );
};

const responseConfig = {
  setInterceptor,
};
export default responseConfig;
