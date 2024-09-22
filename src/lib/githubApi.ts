import axios from "axios";

// Create Axios instance
const githubApi = axios.create({
  baseURL: "https://api.github.com",
});

// Request interceptor to add the access token to requests
githubApi.interceptors.request.use(
  (config) => {
    if (config && config.headers) {
      config!.headers[
        "Authorization"
      ] = `Bearer ${process.env.GITHUB_ACCESS_TOKEN}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default githubApi;
