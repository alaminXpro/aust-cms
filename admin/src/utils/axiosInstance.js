import axios from 'axios';

const API_BASE = import.meta.env.VITE_API_BASE;
const axiosInstance = axios.create({
  baseURL: API_BASE,
  withCredentials: true,
});

// Request interceptor to attach access token to the headers
axiosInstance.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem('accessToken');
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    // Check if error is due to an expired access token
    if (error.response && error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        // Attempt to refresh the token
        const refreshToken = localStorage.getItem('refreshToken');
        const response = await axios.post(`${API_BASE}/auth/refresh-tokens`, {}, { 
          headers: {
            Authorization: `Bearer ${refreshToken}`
          },
          withCredentials: true 
        });

        if (response.status === 200) {
          const newAccessToken = response.data.access.token;
          //Remove the old access token
          localStorage.removeItem('accessToken');
          localStorage.removeItem('refreshToken');
          // Update localStorage with new access token
          localStorage.setItem('accessToken', newAccessToken);
          localStorage.setItem('refreshToken', response.data.refresh.token);
          // Update headers for the original request with the new token
          originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;

          // Retry the original request
          return axiosInstance(originalRequest);
        }
      } catch (refreshError) {
        //console.error('Token refresh failed:', refreshError);
        return Promise.reject(refreshError);
      }
    }

    // If any other error or refresh attempt fails, reject the promise
    return Promise.reject(error);
  }
);

export default axiosInstance;