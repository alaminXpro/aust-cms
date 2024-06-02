
export default function Footer2() {
    return (
        <>
            <footer id="footer-11" className="bg--white-300 pt-50 footer">
                <div className="container">
                    {/* BOTTOM FOOTER */}
                    <div className="bottom-footer">
                        <div className="row row-cols-1 row-cols-md-2 d-flex align-items-center">
                            {/* FOOTER COPYRIGHT */}
                            <div className="col">
                                <div className="footer-copyright"><p className="p-sm">© 2024 AlaminXpro, Inc.</p></div>
                            </div>
                            {/* FOOTER LINKS */}
                            <div className="col">
                                <ul className="bottom-footer-list ico-15 text-end">
                                    <li><p className="p-sm"><a href="privacy.html">Privacy Policy</a></p></li>
                                    <li className="footer-list-divider"><p><span className="flaticon-minus" /></p></li>
                                    <li><p className="p-sm"><a href="terms.html">Terms &amp; Conditions</a></p></li>
                                </ul>
                            </div>
                        </div>  {/* End row */}
                    </div>	{/* END BOTTOM FOOTER */}
                </div>     {/* End container */}
            </footer>

        </>
    )
}
