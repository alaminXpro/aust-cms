import { useEffect, useState } from "react"
import BackToTop from '../elements/BackToTop'
import Breadcrumb from './Breadcrumb'
import Footer1 from './footer/Footer1'
import Footer2 from './footer/Footer2'
import Footer3 from "./footer/Footer3"
import Header1 from "./header/Header1"
import Header2 from './header/Header2'
import WOW from "wow.js"

export default function Layout({ headerStyle, footerStyle, breadcrumbTitle, children, headerCls }) {
    const [scroll, setScroll] = useState(0)
    // Moblile Menu
    const [isMobileMenu, setMobileMenu] = useState(false)
    const handleMobileMenu = () => {
        setMobileMenu(!isMobileMenu)
        !isMobileMenu ? document.body.classList.add("wsactive") : document.body.classList.remove("wsactive")
    }

    useEffect(() => {
        const loadWOW = async () => {
            window.wow = new WOW({
                live: false
            });
            window.wow.init();
        };
    
        loadWOW();
    
        const handleScroll = () => {
            const scrollCheck = window.scrollY > 100;
            if (scrollCheck !== scroll) {
                setScroll(scrollCheck);
            }
        };
    
        document.addEventListener("scroll", handleScroll);
    
        // Cleanup function to remove the event listener
        return () => document.removeEventListener("scroll", handleScroll);
    }, []);
    return (
        <>
            <div id="page" className="page font--jakarta">
                {!headerStyle && <Header1 scroll={scroll} isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} headerCls={headerCls} />}
                {headerStyle == 1 ? <Header1 scroll={scroll} isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} headerCls={headerCls} /> : null}
                {headerStyle == 2 ? <Header2 scroll={scroll} isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} headerCls={headerCls} /> : null}


                <main className="main">
                    {breadcrumbTitle && <Breadcrumb breadcrumbTitle={breadcrumbTitle} />}

                    {children}
                </main>

                {!footerStyle && < Footer1 />}
                {footerStyle == 1 ? < Footer1 /> : null}
                {footerStyle == 2 ? < Footer2 /> : null}
                {footerStyle == 3 ? < Footer3 /> : null}

                <BackToTop />
            </div>
        </>
    )
}
