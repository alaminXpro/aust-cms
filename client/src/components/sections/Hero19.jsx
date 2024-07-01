

import { Link } from 'react-router-dom';
import BrandSlider2 from "../slider/BrandSlider2"
export default function Hero19() {
    return (
        <>
            <section id="hero-19" className="blur--purple gr--ghost hero-section">
                <div className="container text-center">
                    {/* HERO TEXT */}
                    <div className="row justify-content-center">
                        <div className="col-md-10 col-lg-9">
                            <div className="hero-19-txt">
                                {/* Title */}
                                <h2 className="s-56 w-700">Welcome to AUST CMS</h2>
                                {/* Text */}
                                <p className="p-xl">&quot;The journey of a thousand miles begins with one step.&quot; – Lao Tzu
                                </p>
                                {/* Buttons */}
                                <div className="btns-group">
                                    <Link to="#banner-7" className="btn r-04 btn--theme hover--theme">Explore!</Link>
                                    <Link to="" className="video-popup1 btn r-04 btn--tra-black hover--theme ico-20 ico-right">See how it works <span className="flaticon-play" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>	{/* END HERO TEXT */}
                    {/* BRANDS CAROUSEL */}
                    <div id="brands-1" className="py-90">
                        <div className="row">
                            <div className="col text-center">
                                <BrandSlider2 />
                            </div>
                        </div>  {/* End row */}
                    </div>	{/* END BRANDS CAROUSEL */}
                    {/* HERO IMAGE */}
                    <div className="row justify-content-center">
                        <div className="col">
                            <div className="hero-19-img wow fadeInUp">
                                <img className="img-fluid" src="/images/dashboard-09.png" alt="hero-image" style={{ border: '3px solid #666', boxShadow: '0 0 20px rgba(0, 0, 0, 0.5)', display: 'block', margin: '0 auto' }} />
                            </div>
                        </div>
                    </div>	{/* END HERO IMAGE */}
                </div>    {/* End container */}
            </section>
        </>
    )
}