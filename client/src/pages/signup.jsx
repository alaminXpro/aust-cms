import { Link } from 'react-router-dom';
export default function Home() {

    return (
        <>

            <div id="page" className="page font--jakarta">
                {/* SIGN UP PAGE
============================================= */}
                <div id="signup" className="bg--scroll login-section division">
                    <div className="container">
                        <div className="row justify-content-center">
                            {/* REGISTER PAGE WRAPPER */}
                            <div className="col-lg-11">
                                <div className="register-page-wrapper r-16 bg--fixed">
                                    <div className="row">
                                        {/* SIGN UP FORM */}
                                        <div className="col-md-6">
                                            <div className="register-page-form">
                                                <form name="signupform" className="row sign-up-form">
                                                    {/* Google Button */}
                                                    <div className="col-md-12">
                                                        <Link to="#" className="btn btn-google ico-left">
                                                            <img src="/images/png_icons/google.png" alt="google-icon" /> Sign up with Google
                                                        </Link>
                                                    </div>
                                                    {/* Login Separator */}
                                                    <div className="col-md-12 text-center">
                                                        <div className="separator-line">Or, sign up with your email</div>
                                                    </div>
                                                    {/* Form Input */}
                                                    <div className="col-md-12">
                                                        <p className="p-sm input-header">Full name</p>
                                                        <input className="form-control name" type="text" name="name" placeholder="Prince Alamin" />
                                                    </div>
                                                    {/* Form Input */}
                                                    <div className="col-md-12">
                                                        <p className="p-sm input-header">Email address</p>
                                                        <input className="form-control email" type="email" name="email" placeholder="example@example.com" />
                                                    </div>
                                                    {/* Form Input */}
                                                    <div className="col-md-12">
                                                        <p className="p-sm input-header">Password</p>
                                                        <div className="wrap-input">
                                                            <span className="btn-show-pass ico-20"><span className="flaticon-visibility eye-pass" /></span>
                                                            <input className="form-control password" type="password" name="password" placeholder="min 8 characters" />
                                                        </div>
                                                    </div>
                                                    {/* Checkbox */}
                                                    <div className="col-md-12">
                                                        <div className="form-data">
                                                            <span>By clicking “Create Account”, you agree to our
                                                                <Link to="/terms">Terms</Link> and that you have read our
                                                                <Link to="/privacy"> Privacy Policy</Link>
                                                            </span>
                                                        </div>
                                                    </div>
                                                    {/* Form Submit Button */}
                                                    <div className="col-md-12">
                                                        <button type="submit" className="btn btn--theme hover--theme submit">Create Account</button>
                                                    </div>
                                                    {/* Log In Link */}
                                                    <div className="col-md-12">
                                                        <p className="create-account text-center">
                                                            Already have an account? <Link to="/login" className="color--theme">Log in</Link>
                                                        </p>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>	{/* END SIGN UP FORM */}
                                        {/* SIGN UP PAGE TEXT */}
                                        <div className="col-md-6">
                                            <div className="register-page-txt color--white">
                                                {/* Section ID */}
                                                <span className="section-id">Elevate Your Experience – Become a Member!</span>
                                                {/* Title */}
                                                <h2 className="s-48 w-700">Create</h2>
                                                <h2 className="s-48 w-700">an account</h2>
                                                {/* Text */}
                                                <p className="p-md mt-25">Connect, Grow and Succeed !
                                                </p>
                                                {/* Copyright */}
                                                <div className="register-page-copyright">
                                                    <p className="p-sm">© 2024 AUSTCMS. <span>All Rights Reserved</span></p>
                                                </div>
                                            </div>
                                        </div>	{/* END SIGN UP PAGE TEXT */}
                                    </div>  {/* End row */}
                                </div>	{/* End register-page-wrapper */}
                            </div>	{/* END REGISTER PAGE WRAPPER */}
                        </div>	   {/* End row */}
                    </div>	   {/* End container */}
                </div>	{/* END SIGN UP PAGE */}
            </div>


        </>
    )
}