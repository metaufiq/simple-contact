import {AxiosInstance} from 'axios';
import requestConfig from './request';
import responseConfig from './response';
import Contact from './services/Contact';

const service = {
  Contact,
};

interface ServiceInstance {
  [key: string]: AxiosInstance;
}

const serviceTemp: ServiceInstance = service;

for (let key in serviceTemp) {
  let serv: AxiosInstance = serviceTemp[key];
  requestConfig.setInterceptor(serv);
  responseConfig.setInterceptor(serv);
  // Do something with value
}
export default service;
