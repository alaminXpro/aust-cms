import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import api from '../utils/axiosInstance';
import Swal from 'sweetalert2';
import { setPageTitle } from '../redux/themeConfigSlice';
const ChangePassword = () => {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setPageTitle('Change Password'));
  }, [dispatch]);
  const {currentUser} = useSelector((state) => state.user);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      Swal.fire('Error', 'New passwords do not match', 'error');
      return;
    }

    setIsSubmitting(true);

    try {
      await api.patch(`/users/${currentUser.id}/change-password`, {
        oldPassword,
        newPassword,
      });

      Swal.fire('Success', 'Password changed successfully', 'success');
      navigate('/user/settings');
    } catch (error) {
      console.error('Error changing password:', error);
      Swal.fire('Error', error.response?.data?.message || 'Failed to change password', 'error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
    <ol className="flex text-primary font-semibold dark:text-white-dark">
        <li className="bg-[#ebedf2] ltr:rounded-l-md rtl:rounded-r-md dark:bg-[#1b2e4b]">
          <Link
            to="/"
            className="p-1.5 ltr:pl-3 rtl:pr-3 ltr:pr-2 rtl:pl-2 relative  h-full flex items-center before:absolute ltr:before:-right-[15px] rtl:before:-left-[15px] rtl:before:rotate-180 before:inset-y-0 before:m-auto before:w-0 before:h-0 before:border-[16px] before:border-l-[15px] before:border-r-0 before:border-t-transparent before:border-b-transparent before:border-l-[#ebedf2] before:z-[1] dark:before:border-l-[#1b2e4b] hover:text-primary/70 dark:hover:text-white-dark/70"
          >
            Home
          </Link>
        </li>
        <li className="bg-[#ebedf2] dark:bg-[#1b2e4b]">
          <Link
            to="/user/settings"
            className="bg-primary text-white-light p-1.5 ltr:pl-6 rtl:pr-6 ltr:pr-2 rtl:pl-2 relative  h-full flex items-center before:absolute ltr:before:-right-[15px] rtl:before:-left-[15px] rtl:before:rotate-180 before:inset-y-0 before:m-auto before:w-0 before:h-0 before:border-[16px] before:border-l-[15px] before:border-r-0 before:border-t-transparent before:border-b-transparent before:border-l-primary before:z-[1]"
          >
            Settings
          </Link>
        </li>
        <li className="bg-[#ebedf2] dark:bg-[#1b2e4b]">
          <button className="p-1.5 px-3 ltr:pl-6 rtl:pr-6 relative  h-full flex items-center before:absolute ltr:before:-right-[15px] rtl:before:-left-[15px] rtl:before:rotate-180 before:inset-y-0 before:m-auto before:w-0 before:h-0 before:border-[16px] before:border-l-[15px] before:border-r-0 before:border-t-transparent before:border-b-transparent before:border-l-[#ebedf2] before:z-[1] dark:before:border-l-[#1b2e4b] hover:text-primary/70 dark:hover:text-white-dark/70">
            Change Password
          </button>
        </li>
      </ol>
    <div className="pt-5 ">
        <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <div className="panel w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Change Password</h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label htmlFor="oldPassword" className="block mb-2">Current Password</label>
            <input
              id="oldPassword"
              type="password"
              placeholder="Enter current password"
              className="form-input w-full"
              value={oldPassword}
              onChange={(e) => setOldPassword(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="newPassword" className="block mb-2">New Password</label>
            <input
              id="newPassword"
              type="password"
              placeholder="Enter new password"
              className="form-input w-full"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="confirmPassword" className="block mb-2">Confirm New Password</label>
            <input
              id="confirmPassword"
              type="password"
              placeholder="Confirm new password"
              className="form-input w-full"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary w-full"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <svg aria-hidden="true" className="inline w-4 h-4 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-primary" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                  <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                </svg>
                Changing Password...
              </>
            ) : 'Change Password'}
          </button>
        </form>
      </div>
    </div>
    </div>
    </>
  );
};

export default ChangePassword;
