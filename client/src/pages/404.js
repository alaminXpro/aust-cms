import Layout from "../components/layout/Layout"
import Link from "next/link"
export default function Home() {

    return (
        <>
            <Layout headerStyle={1} footerStyle={2} headerCls="navbar-dark inner-page-header">
                <div>
                    {/* PAGE 404
			============================================= */}
                    <section id="page-404" className="bg--white-300 division">
                        <div className="container">
                            <div className="row justify-content-center">
                                {/* 404 PAGE TEXT */}
                                <div className="col-md-9 col-lg-8">
                                    <div className="page-404-txt text-center">
                                        {/* Image */}
                                        <div className="rel page-404-img">
                                            <img className="img-fluid" src="/images/error-404.png" alt="error-404-img" />
                                        </div>
                                        {/* Text */}
                                        <h2 className="s-56 w-700 color--dark">Page Not Found</h2>
                                        <h6 className="s-22 color--grey">
                                            Oops! The page you are looking for might have been moved, renamed or might never existed
                                        </h6>
                                        {/* Button */}
                                        <Link href="/demo-1" className="btn btn--theme hover--theme">Back to home</Link>
                                    </div>
                                </div>	{/* END 404 PAGE TEXT */}
                            </div>	   {/* End row */}
                        </div>	   {/* End container */}
                    </section>	{/* END PAGE 404 */}
                    {/* DIVIDER LINE */}
                    <hr className="divider divider-light" />
                </div>

            </Layout>
        </>
    )
}