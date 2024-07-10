import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import { app } from '/src/firebase.js';
import { useDispatch } from 'react-redux';
import { signInSuccess } from '../redux/user/userSlice';

export default function Home() {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const API_BASE = import.meta.env.VITE_API_BASE;
  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const validateEmail = (email) => {
    return email.endsWith('@aust.edu');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate email
    if (!validateEmail(formData.email)) {
      setError("Email must have @aust.edu domain.");
      return;
    }

    try {
      setLoading(true);
      const response = await fetch(`${API_BASE}/api/auth/signup`, {
        method: "POST",
        credentials: "include",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json(); // Assuming the server responds with JSON
      console.log(data);

      if (!response.ok) {
        // Adjusted to check for data.error instead of data.message
        const errorMessage = data.error || "An unexpected error occurred. Please try again.";
        throw new Error(errorMessage);
      }

      // Assuming the signup was successful, navigate to another page or show success message
      navigate("/login"); // Adjust the route as necessary
    } catch (error) {
      //console.error("Signup error:", error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };
  const handleGoogleClick = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const auth = getAuth(app);

      const result = await signInWithPopup(auth, provider);

      const res = await fetch(`${API_BASE}/api/auth/google`, {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: result.user.displayName,
          email: result.user.email,
          photo: result.user.photoURL,
        }),
      });
      const data = await res.json();
      console.log(data);

      if (!res.ok) {
        // Adjusted to check for data.error instead of data.message
        const errorMessage = data.error || "An unexpected error occurred. Please try again.";
        throw new Error(errorMessage);
      }
      dispatch(signInSuccess(data)); // Update to dispatch `data.rest` as `currentUser`
      navigate('/dashboard');
    } catch (error) {
      //console.error("Signup error:", error);
      setError(error.message);
    }
  };

  return (
    <div id="page" className="page font--jakarta">
      <div id="signup" className="bg--scroll login-section division">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-11">
              <div className="register-page-wrapper r-16 bg--fixed">
                <div className="row">
                  <div className="col-md-6">
                    <div className="register-page-form">
                    <div className="col-md-12">
                          <button onClick={handleGoogleClick} to="#" className="btn btn-google ico-left">
                            <img src="/images/png_icons/google.png" alt="google-icon" /> Sign up with Google
                          </button>
                      </div>
                      <form onSubmit={handleSubmit} className="row sign-up-form">
                        
                        <div className="col-md-12 text-center">
                          <div className="separator-line">Or, sign up with your email</div>
                        </div>
                        <div className="col-md-12">
                          <p className="p-sm input-header">Username</p>
                          <input
                            className="form-control name"
                            type="text"
                            placeholder="username"
                            id="username"
                            onChange={handleChange}
                          />
                        </div>
                        <div className="col-md-12">
                          <p className="p-sm input-header">Email address</p>
                          <input
                            className="form-control email"
                            type="email"
                            placeholder="example@aust.edu"
                            id="email"
                            onChange={handleChange}
                          />
                        </div>
                        <div className="col-md-12">
                          <p className="p-sm input-header">Password</p>
                          <div className="wrap-input">
                            <span
                              className="btn-show-pass ico-20"
                              onClick={togglePasswordVisibility}
                            >
                              <span
                                className={`flaticon-visibility eye-pass ${
                                  isPasswordVisible ? "visible" : ""
                                }`}
                              />
                            </span>
                            <input
                              className="form-control password"
                              type={isPasswordVisible ? "text" : "password"}
                              placeholder="min 8 characters"
                              id="password"
                              onChange={handleChange}
                            />
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="form-data">
                            <span>
                              By clicking “Create Account”, you agree to our
                              <Link to="/terms">Terms</Link> and that you have read our
                              <Link to="/privacy"> Privacy Policy</Link>
                            </span>
                          </div>
                        </div>
                        <div className="col-md-12">
                          <button
                            disabled={loading}
                            className="btn btn--theme hover--theme submit"
                          >
                            {loading ? "Loading..." : "Create Account"}
                          </button>
                        </div>
                        <div className="col-md-12">
                          <p className="create-account text-center">
                            Already have an account?{" "}
                            <Link to="/login" className="color--theme">
                              Log in
                            </Link>
                          </p>
                          {error && <p className='text-red-500 mt-5'>{error}</p>}
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="register-page-txt color--white">
                      <span className="section-id">
                        Elevate Your Experience – Become a Member!
                      </span>
                      <h2 className="s-48 w-700">Create</h2>
                      <h2 className="s-48 w-700">an account</h2>
                      <p className="p-md mt-25">
                        Connect, Grow and Succeed!
                      </p>
                      <div className="register-page-copyright">
                        <p className="p-sm">
                          © 2024 AUSTCMS. <span>All Rights Reserved</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
