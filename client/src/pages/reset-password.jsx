import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Layout from "/src/components/layout/Layout";

export default function Home() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const navigate = useNavigate();
  const API_BASE = import.meta.env.VITE_API_BASE;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    try {
      const response = await fetch(`${API_BASE}/api/auth/forgot-password`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage('Password reset link sent to your email!');
      } else {
        setMessage(data.error || 'Failed to send password reset link.');
      }
    } catch (error) {
      setMessage('An error occurred. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    
      <div id="page" className="page font--jakarta">
        {/* RESET PASSWORD PAGE */}
        <section id="reset-password" className="bg--fixed reset-password-section division">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-7 col-lg-5">
                {/* LOGO */}
                <div className="login-page-logo">
                  <img className="img-fluid light-theme-img" src="/images/logo-pink.png" alt="logo-image" />
                  <img className="img-fluid dark-theme-img" src="/images/logo-pink-white.png" alt="logo-image" />
                </div>
                {/* RESET PASSWORD FORM */}
                <div className="reset-page-wrapper text-center">
                  <form name="resetpasswordform" className="row reset-password-form r-10" onSubmit={handleSubmit}>
                    {/* Title */}
                    <div className="col-md-12">
                      <div className="reset-form-title">
                        <h5 className="s-26 w-700">Forgot your password?</h5>
                        <p className="p-sm color--grey">
                          Enter your email address, if an account exists we‘ll send you a link to reset your password.
                        </p>
                      </div>
                    </div>
                    {/* Form Input */}
                    <div className="col-md-12">
                      <input
                        className="form-control email"
                        type="email"
                        name="email"
                        placeholder="example@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>
                    {/* Form Submit Button */}
                    <div className="col-md-12">
                      <button type="submit" className="btn btn--theme hover--theme submit" disabled={loading}>
                        {loading ? 'Sending...' : 'Reset My Password'}
                      </button>
                    </div>
                    {/* Form Data */}
                    <div className="col-md-12">
                      <div className="form-data text-center">
                        <span>
                          <Link to="/login">Never mind, I remembered!</Link>
                        </span>
                      </div>
                    </div>
                    {/* Form Message */}
                    <div className="col-lg-12 reset-form-msg">
                      <span>{message}</span>
                    </div>
                  </form>
                </div> {/* END RESET PASSWORD FORM */}
              </div>
            </div> {/* End row */}
          </div> {/* End container */}
        </section> {/* END RESET PASSWORD PAGE */}
      </div>
  );
}
