import Link from 'next/link'
import { useState } from 'react'
export default function MobileMenu() {
    const [isActive, setIsActive] = useState({
        status: false,
        key: "",
    })

    const handleToggle = (key) => {
        if (isActive.key === key) {
            setIsActive({
                status: false,
            })
        } else {
            setIsActive({
                status: true,
                key,
            })
        }
    }
    return (
        <>
            <ul className="wsmenu-list nav-theme">
                {/* DROPDOWN SUB MENU */}
                <li aria-haspopup="true">
                    <span className={isActive.key == 1 ? "wsmenu-click ws-activearrow" : "wsmenu-click"} onClick={() => handleToggle(1)}><i className="wsmenu-arrow" /></span>
                    <Link href="#" className="h-link">About <span className="wsarrow" /></Link>
                    <ul className="sub-menu" style={{ display: `${isActive.key == 1 ? "block" : "none"}` }}>
                        <li aria-haspopup="true"><Link href="#lnk-1">Why Martex?</Link></li>
                        <li aria-haspopup="true"><Link href="#lnk-2">Integrations</Link></li>
                        <li aria-haspopup="true"><Link href="#lnk-3">How It Works</Link></li>
                        <li aria-haspopup="true"><Link href="#features-2">Best Solutions</Link></li>
                        <li aria-haspopup="true"><Link href="#reviews-1">Testimonials</Link></li>
                    </ul>
                </li>
                {/* SIMPLE NAVIGATION LINK */}
                <li className="nl-simple" aria-haspopup="true"><Link href="#features-6" className="h-link">Features</Link></li>
                {/* MEGAMENU */}
                <li aria-haspopup="true" className="mg_link">
                    <span className={isActive.key == 2 ? "wsmenu-click ws-activearrow" : "wsmenu-click"} onClick={() => handleToggle(2)}><i className="wsmenu-arrow" /></span>
                    <Link href="#" className="h-link">Pages <span className="wsarrow" /></Link>
                    <div className="wsmegamenu w-75 clearfix" style={{ display: `${isActive.key == 2 ? "block" : "none"}` }}>
                        <div className="container">
                            <div className="row">
                                {/* MEGAMENU LINKS */}
                                <ul className="col-md-12 col-lg-3 link-list">
                                    <li className="fst-li"><Link href="/about">About Us</Link></li>
                                    <li><Link href="/team">Our Team</Link></li>
                                    <li><Link href="/careers">Careers <span className="sm-info">4</span></Link></li>
                                    <li><Link href="/career-role">Career Details</Link></li>
                                    <li><Link href="/contacts">Contact Us</Link></li>
                                </ul>
                                {/* MEGAMENU LINKS */}
                                <ul className="col-md-12 col-lg-3 link-list">
                                    <li><Link href="/features">Core Features</Link></li>
                                    <li className="fst-li"><Link href="/projects">Our Projects</Link></li>
                                    <li><Link href="/project-details">Project Details</Link></li>
                                    <li><Link href="/reviews">Testimonials</Link></li>
                                    <li><Link href="/download">Download Page</Link></li>
                                </ul>
                                {/* MEGAMENU LINKS */}
                                <ul className="col-md-12 col-lg-3 link-list">
                                    <li className="fst-li"><Link href="/pricing-1">Pricing Page #1</Link></li>
                                    <li><Link href="/pricing-2">Pricing Page #2</Link></li>
                                    <li><Link href="/faqs">FAQs Page</Link></li>
                                    <li><Link href="/help-center">Help Center</Link></li>
                                    <li><Link href="/404">404 Page</Link></li>
                                </ul>
                                {/* MEGAMENU LINKS */}
                                <ul className="col-md-12 col-lg-3 link-list">
                                    <li className="fst-li"><Link href="/blog-listing">Blog Listing</Link></li>
                                    <li><Link href="/single-post">Single Blog Post</Link></li>
                                    <li><Link href="/login-2">Login Page</Link></li>
                                    <li><Link href="/signup-2">Signup Page</Link></li>
                                    <li><Link href="/reset-password">Reset Password</Link></li>
                                </ul>
                            </div> {/* End row */}
                        </div> {/* End container */}
                    </div> {/* End wsmegamenu */}
                </li> {/* END MEGAMENU */}
                {/* SIMPLE NAVIGATION LINK */}
                <li className="nl-simple" aria-haspopup="true"><Link href="/pricing-1" className="h-link">Pricing</Link></li>
                {/* SIMPLE NAVIGATION LINK */}
                <li className="nl-simple" aria-haspopup="true"><Link href="#faqs-3" className="h-link">FAQs</Link>
                </li>
                {/* SIGN IN LINK */}
                <li className="nl-simple reg-fst-link mobile-last-link" aria-haspopup="true">
                    <Link href="/login-2" className="h-link">Sign in</Link>
                </li>
                {/* SIGN UP BUTTON */}
                <li className="nl-simple" aria-haspopup="true">
                    <Link href="/signup-2" className="btn r-04 btn--theme hover--tra-white last-link">Sign
                        up</Link>
                </li>
            </ul>
        </>
    )
}
