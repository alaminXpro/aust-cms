
import { Link } from 'react-router-dom';
import { Autoplay } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay],
    slidesPerView: 6,
    // spaceBetween: 30,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    loop: true,

    breakpoints: {
        320: {
            slidesPerView: 2,
            // spaceBetween: 30,
        },
        575: {
            slidesPerView: 3,
            // spaceBetween: 30,
        },
        767: {
            slidesPerView: 4,
            // spaceBetween: 30,
        },
        991: {
            slidesPerView: 5,
            // spaceBetween: 30,
        },
        1199: {
            slidesPerView: 6,
            // spaceBetween: 30,
        },
        1350: {
            slidesPerView: 6,
            // spaceBetween: 30,
        },
    }
}


export default function BrandSlider2() {
    return (
        <>

            {/* <Swiper {...swiperOptions}>
                <SwiperSlide>

                </SwiperSlide>
            </Swiper> */}

            <Swiper {...swiperOptions} className="brands-carousel-6">
                {/* BRAND LOGO IMAGE */}
                <SwiperSlide className="brand-logo">
                    <Link to="#"><img className="img-fluid light-theme-img" src="/images/club1.png" alt="brand-logo" /></Link>
                    <Link to="#"><img className="img-fluid dark-theme-img" src="/images/brand-1-white.png" alt="brand-logo" /></Link>
                </SwiperSlide>
                {/* BRAND LOGO IMAGE */}
                <SwiperSlide className="brand-logo">
                    <Link to="#"><img className="img-fluid light-theme-img" src="/images/club2.png" alt="brand-logo" /></Link>
                    <Link to="#"><img className="img-fluid dark-theme-img" src="/images/brand-3-white.png" alt="brand-logo" /></Link>
                </SwiperSlide>
                {/* BRAND LOGO IMAGE */}
                <SwiperSlide className="brand-logo">
                    <Link to="#"><img className="img-fluid light-theme-img" src="/images/club3.png" alt="brand-logo" /></Link>
                    <Link to="#"><img className="img-fluid dark-theme-img" src="/images/brand-4-white.png" alt="brand-logo" /></Link>
                </SwiperSlide>
                {/* BRAND LOGO IMAGE */}
                <SwiperSlide className="brand-logo">
                    <Link to="#"><img className="img-fluid light-theme-img" src="/images/club4.png" alt="brand-logo" /></Link>
                    <Link to="#"><img className="img-fluid dark-theme-img" src="/images/brand-5-white.png" alt="brand-logo" /></Link>
                </SwiperSlide>
                {/* BRAND LOGO IMAGE */}
                <SwiperSlide className="brand-logo">
                    <Link to="#"><img className="img-fluid light-theme-img" src="/images/club5.png" alt="brand-logo" /></Link>
                    <Link to="#"><img className="img-fluid dark-theme-img" src="/images/brand-6-white.png" alt="brand-logo" /></Link>
                </SwiperSlide>
                {/* BRAND LOGO IMAGE */}
                <SwiperSlide className="brand-logo">
                    <Link to="#"><img className="img-fluid light-theme-img" src="/images/club6.png" alt="brand-logo" /></Link>
                    <Link to="#"><img className="img-fluid dark-theme-img" src="/images/brand-7-white.png" alt="brand-logo" /></Link>
                </SwiperSlide>
                {/* BRAND LOGO IMAGE */}
                <SwiperSlide className="brand-logo">
                    <Link to="#"><img className="img-fluid light-theme-img" src="/images/club7.png" alt="brand-logo" /></Link>
                    <Link to="#"><img className="img-fluid dark-theme-img" src="/images/brand-8-white.png" alt="brand-logo" /></Link>
                </SwiperSlide>
                <SwiperSlide className="brand-logo">
                    <Link to="#"><img className="img-fluid light-theme-img" src="/images/club8.png" alt="brand-logo" /></Link>
                    <Link to="#"><img className="img-fluid dark-theme-img" src="/images/brand-8-white.png" alt="brand-logo" /></Link>
                </SwiperSlide>
                <SwiperSlide className="brand-logo">
                    <Link to="#"><img className="img-fluid light-theme-img" src="/images/club9.png" alt="brand-logo" /></Link>
                    <Link to="#"><img className="img-fluid dark-theme-img" src="/images/brand-8-white.png" alt="brand-logo" /></Link>
                </SwiperSlide>
                <SwiperSlide className="brand-logo">
                    <Link to="#"><img className="img-fluid light-theme-img" src="/images/club10.png" alt="brand-logo" /></Link>
                    <Link to="#"><img className="img-fluid dark-theme-img" src="/images/brand-8-white.png" alt="brand-logo" /></Link>
                </SwiperSlide>
               
            </Swiper>

        </>
    )
}
