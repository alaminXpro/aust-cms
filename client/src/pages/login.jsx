import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import { app } from '/firebase.js';
import {
  signInStart,
  signInSuccess,
  signInFailure,
} from '../redux/user/userSlice';

export default function Home() {
  const [formData, setFormData] = useState({});
  const { loading, error } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    // Dispatch an action to reset the error state when the component mounts
    dispatch(signInFailure(null));
  }, [dispatch]);

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      dispatch(signInStart());
      const res = await fetch("/api/auth/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      console.log(data);
      if (data.success === false) {
        dispatch(signInFailure(data.message));
        return;
      }
      dispatch(signInSuccess(data));
      navigate("/");
    } catch (error) {
      dispatch(signInFailure(error.message));
    }
  };
  const handleGoogleClick = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const auth = getAuth(app);

      const result = await signInWithPopup(auth, provider);

      const res = await fetch('/api/auth/google', {
        method: 'POST',
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
      dispatch(signInSuccess(data));
      navigate('/');
    } catch (error) {
      dispatch(signInFailure(error.message));
    }
  };
  return (
    <>
      <div id="page" className="page font--jakarta">
        {/* LOGIN PAGE
============================================= */}
        <div id="login" className="bg--scroll login-section division">
          <div className="container">
            <div className="row justify-content-center">
              {/* REGISTER PAGE WRAPPER */}
              <div className="col-lg-11">
                <div className="register-page-wrapper r-16 bg--fixed">
                  <div className="row">
                    {/* LOGIN PAGE TEXT */}
                    <div className="col-md-6">
                      <div className="register-page-txt color--white">
                        {/* Title */}
                        <h2 className="s-42 w-700">Welcome</h2>
                        <h2 className="s-42 w-700">back to AUSTCMS</h2>
                        {/* Text */}
                        <p className="p-md mt-25">
                          &ldquo;Welcome back! We missed you more than words can
                          say.&rdquo;
                        </p>
                        {/* Copyright */}
                        <div className="register-page-copyright">
                          <p className="p-sm">
                            © 2024 AUSTCMS. <span>All Rights Reserved</span>
                          </p>
                        </div>
                      </div>
                    </div>{" "}
                    {/* END LOGIN PAGE TEXT */}
                    {/* LOGIN FORM */}
                    <div className="col-md-6">
                      <div className="register-page-form">
                        {/* Google Button */}
                        <div className="col-md-12">
                            <button onClick={handleGoogleClick}  className="btn btn-google ico-left">
                              <img
                                src="/images/png_icons/google.png"
                                alt="google-icon"
                              />{" "}
                              Sign in with Google
                            </button>
                            
                          </div>
                        <form
                          onSubmit={handleSubmit}
                          name="signinform"
                          className="row sign-in-form">
                        
                          
                          {/* Login Separator */}
                          <div className="col-md-12 text-center">
                            <div className="separator-line">
                              Or, sign in with your email
                            </div>
                          </div>
                          {/* Form Input */}
                          <div className="col-md-12">
                            <p className="p-sm input-header">Email address</p>
                            <input
                              className="form-control email"
                              type="email"
                              name="email"
                              placeholder="example@aust.edu"
                              id="email"
                              onChange={handleChange}
                            />
                          </div>
                          {/* Form Input */}
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
                                placeholder="* * * * * * * *"
                                id="password"
                                onChange={handleChange}
                              />
                            </div>
                          </div>
                          {/* Reset Password Link */}
                          <div className="col-md-12">
                            <div className="reset-password-link">
                              <p className="p-sm">
                                <Link
                                  to="/reset-password"
                                  className="color--theme"
                                >
                                  Forgot your password?
                                </Link>
                              </p>
                            </div>
                          </div>
                          {/* Form Submit Button */}
                          <div className="col-md-12">
                            <button
                               disabled={loading}
                              className="btn btn--theme hover--theme submit"
                            >
                              {loading ? 'Loading...' : 'Sign In'}
                            </button>
                          </div>
                          {/* Sign Up Link */}
                          <div className="col-md-12">
                            <p className="create-account text-center">
                              Don &apost;t have an account?{" "}
                              <Link to="/signup" className="color--theme">
                                Sign up
                              </Link>
                            </p>
                            {error && <p className='text-red-500 mt-5'>{error}</p>}
                          </div>
                        </form>
                      </div>
                    </div>{" "}
                    {/* END LOGIN FORM */}
                  </div>{" "}
                  {/* End row */}
                </div>{" "}
                {/* End register-page-wrapper */}
              </div>{" "}
              {/* END REGISTER PAGE WRAPPER */}
            </div>{" "}
            {/* End row */}
          </div>{" "}
          {/* End container */}
        </div>{" "}
        {/* END LOGIN PAGE */}
      </div>
    </>
  );
}
