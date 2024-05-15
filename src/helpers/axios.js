import axios from 'axios';

function initialize() {
  configureDefaults();
  configureInterceptors();
}

function configureDefaults() {
  axios.defaults.baseURL = process.env.REACT_APP_API_URL;
  axios.defaults.headers = {
    ...axios.defaults.headers,
    'Content-Type': 'application/json',
  };
  axios.defaults.withCredentials = false;
}

function configureInterceptors() {
  axios.interceptors.request.use(
    (config) => {
      config.url = config.url || '';
      config.headers = config.headers || {};

      return config;
    },
    (error) => Promise.reject(error),
  );

  axios.interceptors.response.use(
    (success) => success.data,
    async (error) => {
      const { response } = error;
      return Promise.reject(response.data);
    },
  );
}

export default {
  initialize,
};
