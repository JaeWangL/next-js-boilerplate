import axios from 'axios';
import { apiBaseUrl } from './constants';

export const axiosInstance = axios.create({
  baseURL: apiBaseUrl,
  timeout: 30000,
});
