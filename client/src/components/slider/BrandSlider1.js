
import Link from "next/link"
import { Autoplay } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay],
    slidesPerView: 5,
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
            slidesPerView: 4,
            // spaceBetween: 30,
        },
        1199: {
            slidesPerView: 5,
            // spaceBetween: 30,
        },
        1350: {
            slidesPerView: 5,
            // spaceBetween: 30,
        },
    }
}


export default function BrandSlider1() {
    return (
        <>

            {/* <Swiper {...swiperOptions}>
                <SwiperSlide>

                </SwiperSlide>
            </Swiper> */}

            <Swiper {...swiperOptions} className="brands-carousel-5">
                {/* BRAND LOGO IMAGE */}
                <SwiperSlide className="brand-logo">
                    <Link href="#"><img className="img-fluid light-theme-img" src="/images/brand-1.png" alt="brand-logo" /></Link>
                    <Link href="#"><img className="img-fluid dark-theme-img" src="/images/brand-1-white.png" alt="brand-logo" /></Link>
                </SwiperSlide>
                {/* BRAND LOGO IMAGE */}
                <SwiperSlide className="brand-logo">
                    <Link href="#"><img className="img-fluid light-theme-img" src="/images/brand-2.png" alt="brand-logo" /></Link>
                    <Link href="#"><img className="img-fluid dark-theme-img" src="/images/brand-3-white.png" alt="brand-logo" /></Link>
                </SwiperSlide>
                {/* BRAND LOGO IMAGE */}
                <SwiperSlide className="brand-logo">
                    <Link href="#"><img className="img-fluid light-theme-img" src="/images/brand-4.png" alt="brand-logo" /></Link>
                    <Link href="#"><img className="img-fluid dark-theme-img" src="/images/brand-4-white.png" alt="brand-logo" /></Link>
                </SwiperSlide>
                {/* BRAND LOGO IMAGE */}
                <SwiperSlide className="brand-logo">
                    <Link href="#"><img className="img-fluid light-theme-img" src="/images/brand-5.png" alt="brand-logo" /></Link>
                    <Link href="#"><img className="img-fluid dark-theme-img" src="/images/brand-5-white.png" alt="brand-logo" /></Link>
                </SwiperSlide>
                {/* BRAND LOGO IMAGE */}
                <SwiperSlide className="brand-logo">
                    <Link href="#"><img className="img-fluid light-theme-img" src="/images/brand-6.png" alt="brand-logo" /></Link>
                    <Link href="#"><img className="img-fluid dark-theme-img" src="/images/brand-6-white.png" alt="brand-logo" /></Link>
                </SwiperSlide>
                {/* BRAND LOGO IMAGE */}
                <SwiperSlide className="brand-logo">
                    <Link href="#"><img className="img-fluid light-theme-img" src="/images/brand-7.png" alt="brand-logo" /></Link>
                    <Link href="#"><img className="img-fluid dark-theme-img" src="/images/brand-7-white.png" alt="brand-logo" /></Link>
                </SwiperSlide>
                {/* BRAND LOGO IMAGE */}
                <SwiperSlide className="brand-logo">
                    <Link href="#"><img className="img-fluid light-theme-img" src="/images/brand-8.png" alt="brand-logo" /></Link>
                    <Link href="#"><img className="img-fluid dark-theme-img" src="/images/brand-8-white.png" alt="brand-logo" /></Link>
                </SwiperSlide>
                {/* BRAND LOGO IMAGE */}
                <SwiperSlide className="brand-logo">
                    <Link href="#"><img className="img-fluid light-theme-img" src="/images/brand-9.png" alt="brand-logo" /></Link>
                    <Link href="#"><img className="img-fluid dark-theme-img" src="/images/brand-9-white.png" alt="brand-logo" /></Link>
                </SwiperSlide>
            </Swiper>

        </>
    )
}
