import axios from 'axios';
import env from '../../../../env';

const Contact = axios.create({
  baseURL: `${env.BASE_URL}/contact/`,
});

export default Contact;
