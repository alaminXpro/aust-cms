import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Cookies from 'js-cookie';
import { useDispatch } from 'react-redux';
import { signInSuccess, signInFailure,signInStart } from '../redux/user/userSlice';

const GoogleCallback = () => {
  const navigate = useNavigate();
  const API_BASE = import.meta.env.VITE_API_BASE;
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        dispatch(signInStart());
        const response = await axios.get(`${API_BASE}/v1/auth/google/callback`, { withCredentials: true });
        const { user, tokens } = response.data;
        dispatch(signInSuccess(user));
        // Store tokens in cookies
        Cookies.set('accessToken', tokens.access.token, { expires: new Date(tokens.access.expires) });
        Cookies.set('refreshToken', tokens.refresh.token, { expires: new Date(tokens.refresh.expires) });
        dispatch(signInSuccess(user));
        // Redirect to the home page or dashboard
        navigate('/');
      } catch (error) {
        console.error('Error during Google authentication:', error);
        dispatch(signInFailure(error));
        navigate('/login');
      }
    };

    fetchUserData();
  }, [navigate]);

  return <div>Loading...</div>;
};

export default GoogleCallback;
