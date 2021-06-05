import {AxiosError, AxiosInstance} from 'axios';


export const handleAxiosError = (error: AxiosError) => {
  let errorMessage = ''
  
  if (error) {
    if (error.response) {
      // Request made and server responded
      errorMessage = error.response.data.message
    } else if (error.request) {
      // The request was made but no response was received
      
      errorMessage = error.request
    } else {
      errorMessage = error.message
    }
  }
  
  return errorMessage;
};

const setInterceptor = (serv: AxiosInstance) => {
  serv.interceptors.response.use(
    function (_response) {
      // Do something with response data
      
      return _response;
    }
  );
};

const responseConfig = {
  setInterceptor,
};
export default responseConfig;
