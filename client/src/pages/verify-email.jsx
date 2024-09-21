import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { setPageTitle } from '../redux/themeConfigSlice';
import { useDispatch } from 'react-redux';


const VerifyEmail = () => {
  const [verificationStatus, setVerificationStatus] = useState('pending');
  const [message, setMessage] = useState('');
  const location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPageTitle('Verify Email'));
  }, [dispatch]);

  useEffect(() => {
    const verifyEmail = async () => {
      const searchParams = new URLSearchParams(location.search);
      const token = searchParams.get('token');

      if (!token) {
        setVerificationStatus('error');
        setMessage('Invalid verification link. Please request a new one.');
        return;
      }
      console.log(token);

      try {
        const response = await axios.post(`${import.meta.env.VITE_API_BASE}/auth/verify-email?token=${token}`);
        console.log(response);
        setVerificationStatus('success');
        setMessage(response.data.message || 'Your email has been successfully verified!');
      } catch (error) {
        setVerificationStatus('error');
        setMessage(error.response?.data?.message || 'An error occurred during verification. Please try again.');
      }
    };

    verifyEmail();
  }, [location]);

  const getStatusIcon = () => {
    switch (verificationStatus) {
      case 'pending':
        return (
          <svg className="animate-spin h-12 w-12 text-blue-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
        );
      case 'success':
        return (
          <svg className="h-12 w-12 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
        );
      case 'error':
        return (
          <svg className="h-12 w-12 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
        );
    }
  };

  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-64px)] bg-gray-50 dark:bg-gray-900">
      <div className="w-full max-w-md p-6 bg-white dark:bg-gray-800 shadow-md rounded-lg">
        <h2 className="text-center text-2xl font-semibold text-gray-900 dark:text-white mb-4">
          Email Verification
        </h2>
        <div className="flex flex-col items-center justify-center space-y-4">
          {getStatusIcon()}
          <p className={`text-center text-sm ${
            verificationStatus === 'success' ? 'text-green-600 dark:text-green-400' :
            verificationStatus === 'error' ? 'text-red-600 dark:text-red-400' :
            'text-gray-600 dark:text-gray-400'
          }`}>
            {message || 'Verifying your email...'}
          </p>
        </div>
        {verificationStatus !== 'pending' && (
          <div className="mt-6">
            <a
              href="/login"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:bg-indigo-500 dark:hover:bg-indigo-600 dark:focus:ring-offset-gray-800"
            >
              Go to Login
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default VerifyEmail;
