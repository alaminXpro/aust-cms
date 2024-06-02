import { useEffect, useState } from "react"
import BackToTop from '../elements/BackToTop'
import Breadcrumb from './Breadcrumb'
import PageHead from './PageHead'
import Footer1 from './footer/Footer1'
import Footer2 from './footer/Footer2'
import Footer3 from "./footer/Footer3"
import Header1 from "./header/Header1"
import Header2 from './header/Header2'

export default function Layout({ headerStyle, footerStyle, headTitle, breadcrumbTitle, children, headerCls }) {
    const [scroll, setScroll] = useState(0)
    // Moblile Menu
    const [isMobileMenu, setMobileMenu] = useState(false)
    const handleMobileMenu = () => {
        setMobileMenu(!isMobileMenu)
        !isMobileMenu ? document.body.classList.add("wsactive") : document.body.classList.remove("wsactive")
    }

    useEffect(() => {
        const WOW = require('wowjs')
        window.wow = new WOW.WOW({
            live: false
        })
        window.wow.init()

        document.addEventListener("scroll", () => {
            const scrollCheck = window.scrollY > 100
            if (scrollCheck !== scroll) {
                setScroll(scrollCheck)
            }
        })
    }, [])
    return (
        <>
            <PageHead headTitle={headTitle} />
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
