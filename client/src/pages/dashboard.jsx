import React, { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { app, storage } from '/firebase';
import {
  updateUserStart,
  updateUserSuccess,
  updateUserFailure,
  deleteUserStart,
  deleteUserSuccess,
  deleteUserFailure,
  signOutUserStart,
} from '../redux/user/userSlice';
import axios from 'axios';

export default function Dashboard() {
  const fileRef = useRef(null);
  const { currentUser, loading, error } = useSelector((state) => state.user);
  const [file, setFile] = useState(undefined);
  const [filePerc, setFilePerc] = useState(0);
  const [fileUploadError, setFileUploadError] = useState(false);
  const [formData, setFormData] = useState({});
  const [updateSuccess, setUpdateSuccess] = useState(false);
  const dispatch = useDispatch();
  const API_BASE = import.meta.env.VITE_API_BASE;

  useEffect(() => {
    if (file) {
      handleFileUpload(file);
    }
  }, [file]);

  const handleFileUpload = (file) => {
    const fileName = new Date().getTime() + file.name;
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      'state_changed',
      (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setFilePerc(Math.round(progress));
      },
      (error) => {
        setFileUploadError(true);
        console.error('Upload error:', error); // Log the error to see more details
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) =>
          setFormData({ ...formData, avatar: downloadURL })
        );
      }
    );
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(updateUserStart());
      const res = await axios.post(
        `${API_BASE}/api/user/${currentUser._id}`,
        formData,
        { withCredentials: true }
      );
      if (res.data.success === false) {
        dispatch(updateUserFailure(res.data.message));
        return;
      }
      dispatch(updateUserSuccess(res.data));
      setUpdateSuccess(true);
      console.log('Updated user:', res.data); // Log the updated user info
    } catch (error) {
      dispatch(updateUserFailure(error.message));
    }
  };

  const handleDeleteUser = async () => {
    try {
      dispatch(deleteUserStart());
      const res = await axios.delete(`${API_BASE}/api/user/${currentUser._id}`, { withCredentials: true });
      if (res.data.success === false) {
        dispatch(deleteUserFailure(res.data.message));
        return;
      }
      dispatch(deleteUserSuccess(res.data));
    } catch (error) {
      dispatch(deleteUserFailure(error.message));
    }
  };

  const handleSignOut = async () => {
    try {
      dispatch(signOutUserStart());
      const res = await axios.post(`${API_BASE}/api/auth/signout`, {}, { withCredentials: true });
      if (res.data.success === false) {
        dispatch(deleteUserFailure(res.data.message));
        return;
      }
      dispatch(deleteUserSuccess(res.data));
    } catch (error) {
      dispatch(deleteUserFailure(error.message));
    }
  };

  return (
    <div className="container py-5">
      <h1 className="text-center mb-5">Profile</h1>
      <form onSubmit={handleSubmit} className="d-flex flex-column gap-3">
        <input
          onChange={(e) => setFile(e.target.files[0])}
          type="file"
          ref={fileRef}
          hidden
          accept="image/*"
        />
        <div className="d-flex justify-content-center mb-3">
          <img
            onClick={() => fileRef.current.click()}
            src={formData.avatar || currentUser.avatar}
            alt="profile"
            className="rounded-circle"
            style={{ width: '100px', height: '100px', objectFit: 'cover', cursor: 'pointer' }}
          />
        </div>
        <div className="text-center mb-3">
          {fileUploadError ? (
            <span className="text-danger">
              Error Image upload (image must be less than 2 mb)
            </span>
          ) : filePerc > 0 && filePerc < 100 ? (
            <span className="text-secondary">{`Uploading ${filePerc}%`}</span>
          ) : filePerc === 100 ? (
            <span className="text-success">Image successfully uploaded!</span>
          ) : null}
        </div>
        <div className="mb-3">
          <input
            type="text"
            placeholder="Username"
            defaultValue={currentUser.username}
            id="username"
            className="form-control"
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <input
            type="email"
            placeholder="Email"
            id="email"
            defaultValue={currentUser.email}
            className="form-control"
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <input
            type="password"
            placeholder="Password"
            id="password"
            className="form-control"
            onChange={handleChange}
          />
        </div>
        <button
          disabled={loading}
          className={`px-4 py-2 font-bold text-white ${loading ? 'bg-blue-500' : 'bg-blue-700'} rounded`}
        >
          {loading ? 'Loading...' : 'Update'}
        </button>

        <button
          type="button"
          onClick={handleDeleteUser}
          className="px-4 py-2 font-bold text-white bg-red-500 rounded"
        >
          Delete Account
        </button>

        <button
          type="button"
          onClick={handleSignOut}
          className="px-4 py-2 font-bold text-white bg-yellow-500 rounded"
        >
          Sign Out
        </button>
      </form>
      <Link to="/" className="btn text-center d-block mt-3">
        Back to home
      </Link>
    </div>
  );
}
