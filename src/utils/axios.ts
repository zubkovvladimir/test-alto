import Axios from 'axios';
import { setupCache } from 'axios-cache-adapter';
import { API_URL } from 'constants/config';

const cache = setupCache({
  maxAge: 5 * 1000,
});

const axios = Axios.create({
  baseURL: API_URL,
  adapter: cache.adapter,
});

const setAxiosAuthorizationToken = (token: null | string): void => {
  if (token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  }
};

export { axios, setAxiosAuthorizationToken };
