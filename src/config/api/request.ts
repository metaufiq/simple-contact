import {AxiosInstance, AxiosRequestConfig} from 'axios';

const setResponseFormat = async (config: AxiosRequestConfig) => {
  switch (config.method) {
    default:
      break;
  }
  return config;
};

const setInterceptor = (serv: AxiosInstance) => {
  serv.interceptors.request.use(function (config:AxiosRequestConfig) {
    return new Promise(async resolve => {
      config = await setResponseFormat(config);
      resolve(config);
    });
  });
};

const requestConfig = {
  setInterceptor,
};
export default requestConfig;
