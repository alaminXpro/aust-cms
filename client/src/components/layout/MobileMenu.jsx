import { FaSearch } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

export default function MobileMenu() {
  const [isActive, setIsActive] = useState({
    status: false,
    key: "",
  });

  const handleToggle = (key) => {
    if (isActive.key === key) {
      setIsActive({
        status: false,
      });
    } else {
      setIsActive({
        status: true,
        key,
      });
    }
  };
  const { currentUser } = useSelector((state) => state.user);
  const navigate = useNavigate();
  return (
    <>
      <ul className="wsmenu-list nav-theme">
        {/* DROPDOWN SUB MENU */}
        <li aria-haspopup="true">
          <span
            className={
              isActive.key == 1 ? "wsmenu-click ws-activearrow" : "wsmenu-click"
            }
            onClick={() => handleToggle(1)}
          >
            <i className="wsmenu-arrow" />
          </span>
          <Link to="#" className="h-link">
            About <span className="wsarrow" />
          </Link>
          <ul
            className="sub-menu"
            style={{ display: `${isActive.key == 1 ? "block" : "none"}` }}
          >
            <li aria-haspopup="true">
              <Link to="#lnk-1">Why AUSTCMS?</Link>
            </li>
            <li aria-haspopup="true">
              <Link to="#lnk-2">Integrations</Link>
            </li>
            <li aria-haspopup="true">
              <Link to="#lnk-3">How It Works</Link>
            </li>
            <li aria-haspopup="true">
              <Link to="#features-2">Best Solutions</Link>
            </li>
            <li aria-haspopup="true">
              <Link to="#reviews-1">Testimonials</Link>
            </li>
          </ul>
        </li>
        {/* SIMPLE NAVIGATION LINK */}
        <li className="nl-simple" aria-haspopup="true">
          <Link to="#features-6" className="h-link">
            Features
          </Link>
        </li>
        {/* MEGAMENU */}
        <li aria-haspopup="true" className="mg_link">
          <span
            className={
              isActive.key == 2 ? "wsmenu-click ws-activearrow" : "wsmenu-click"
            }
            onClick={() => handleToggle(2)}
          >
            <i className="wsmenu-arrow" />
          </span>
          <Link to="#" className="h-link">
            Pages <span className="wsarrow" />
          </Link>
          <div
            className="wsmegamenu w-75 clearfix"
            style={{ display: `${isActive.key == 2 ? "block" : "none"}` }}
          >
            <div className="container">
              <div className="row">
                {/* MEGAMENU LINKS */}
                <ul className="col-md-12 col-lg-3 link-list">
                  <li className="fst-li">
                    <Link to="/about">About Us</Link>
                  </li>
                  <li>
                    <Link to="/team">Our Team</Link>
                  </li>
                  <li>
                    <Link to="/careers">
                      Careers <span className="sm-info">4</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/career-role">Career Details</Link>
                  </li>
                  <li>
                    <Link to="/contacts">Contact Us</Link>
                  </li>
                </ul>
                {/* MEGAMENU LINKS */}
                <ul className="col-md-12 col-lg-3 link-list">
                  <li>
                    <Link to="/features">Core Features</Link>
                  </li>
                  <li className="fst-li">
                    <Link to="/projects">Our Projects</Link>
                  </li>
                  <li>
                    <Link to="/project-details">Project Details</Link>
                  </li>
                  <li>
                    <Link to="/reviews">Testimonials</Link>
                  </li>
                  <li>
                    <Link to="/download">Download Page</Link>
                  </li>
                </ul>
                {/* MEGAMENU LINKS */}
                <ul className="col-md-12 col-lg-3 link-list">
                  <li className="fst-li">
                    <Link to="/pricing-1">Pricing Page #1</Link>
                  </li>
                  <li>
                    <Link to="/pricing-2">Pricing Page #2</Link>
                  </li>
                  <li>
                    <Link to="/faqs">FAQs Page</Link>
                  </li>
                  <li>
                    <Link to="/help-center">Help Center</Link>
                  </li>
                  <li>
                    <Link to="/404">404 Page</Link>
                  </li>
                </ul>
                {/* MEGAMENU LINKS */}
                <ul className="col-md-12 col-lg-3 link-list">
                  <li className="fst-li">
                    <Link to="/blog-listing">Blog Listing</Link>
                  </li>
                  <li>
                    <Link to="/single-post">Single Blog Post</Link>
                  </li>
                  <li>
                    <Link to="/login">Login Page</Link>
                  </li>
                  <li>
                    <Link to="/signup">Signup Page</Link>
                  </li>
                  <li>
                    <Link to="/reset-password">Reset Password</Link>
                  </li>
                </ul>
              </div>{" "}
              {/* End row */}
            </div>{" "}
            {/* End container */}
          </div>{" "}
          {/* End wsmegamenu */}
        </li>{" "}
        {/* END MEGAMENU */}
        {/* SIMPLE NAVIGATION LINK */}
        <li className="nl-simple" aria-haspopup="true">
          <Link to="/pricing-1" className="h-link">
            Pricing
          </Link>
        </li>
        {/* SIMPLE NAVIGATION LINK */}
        <li className="nl-simple" aria-haspopup="true">
          <Link to="#faqs-3" className="h-link">
            FAQs
          </Link>
        </li>
        {/* CONDITIONAL RENDERING */}
        {!currentUser ? (
          <>
            {/* SIGN IN LINK */}
            <li
              className="nl-simple reg-fst-link mobile-last-link"
              aria-haspopup="true"
            >
              <Link to="/login" className="h-link">
                Sign in
              </Link>
            </li>
            {/* SIGN UP BUTTON */}
            <li className="nl-simple" aria-haspopup="true">
              <Link
                to="/signup"
                className="btn r-04 btn--theme hover--tra-white last-link"
              >
                Sign up
              </Link>
            </li>
          </>
        ) : (
          <>
            {/* DASHBOARD LINK */}
            <li className="nl-simple" aria-haspopup="true">
              <Link to="/dashboard" className="h-link">
                Dashboard
              </Link>
            </li>
            
            {/* USER PHOTO */}
            <li className="nl-simple" aria-haspopup="true">
              <Link to="/profile" className="h-link d-flex align-items-center">
                <img
                  src={currentUser.avatar}
                  alt={currentUser.username}
                  className="rounded-circle img-fluid"
                  style={{ width: "40px", height: "40px", objectFit: "cover" }}
                />
                <span className="ms-2">Profile</span>
              </Link>
            </li>
          </>
        )}
      </ul>
    </>
  );
}
