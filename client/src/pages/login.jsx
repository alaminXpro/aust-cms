import { Link } from 'react-router-dom';
export default function Home() {

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
                                                <p className="p-md mt-25">&ldquo;Welcome back! We missed you more than words can say.&rdquo;
                                                </p>
                                                {/* Copyright */}
                                                <div className="register-page-copyright">
                                                    <p className="p-sm">© 2024 AUSTCMS. <span>All Rights Reserved</span></p>
                                                </div>
                                            </div>
                                        </div>	{/* END LOGIN PAGE TEXT */}
                                        {/* LOGIN FORM */}
                                        <div className="col-md-6">
                                            <div className="register-page-form">
                                                <form name="signinform" className="row sign-in-form">
                                                    {/* Google Button */}
                                                    <div className="col-md-12">
                                                        <Link to="#" className="btn btn-google ico-left">
                                                            <img src="/images/png_icons/google.png" alt="google-icon" /> Sign in with Google
                                                        </Link>
                                                    </div>
                                                    {/* Login Separator */}
                                                    <div className="col-md-12 text-center">
                                                        <div className="separator-line">Or, sign in with your email</div>
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
                                                            <input className="form-control password" type="password" name="password" placeholder="* * * * * * * * *" />
                                                        </div>
                                                    </div>
                                                    {/* Reset Password Link */}
                                                    <div className="col-md-12">
                                                        <div className="reset-password-link">
                                                            <p className="p-sm"><Link to="/reset-password" className="color--theme">Forgot your password?</Link></p>
                                                        </div>
                                                    </div>
                                                    {/* Form Submit Button */}
                                                    <div className="col-md-12">
                                                        <button type="submit" className="btn btn--theme hover--theme submit">Log In</button>
                                                    </div>
                                                    {/* Sign Up Link */}
                                                    <div className="col-md-12">
                                                        <p className="create-account text-center">
                                                            Don&apost;t have an account? <Link to="/signup" className="color--theme">Sign up</Link>
                                                        </p>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>	{/* END LOGIN FORM */}
                                    </div>  {/* End row */}
                                </div>	{/* End register-page-wrapper */}
                            </div>	{/* END REGISTER PAGE WRAPPER */}
                        </div>	   {/* End row */}
                    </div>	   {/* End container */}
                </div>	{/* END LOGIN PAGE */}
            </div>

        </>
    )
}