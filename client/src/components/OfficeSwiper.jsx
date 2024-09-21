import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Autoplay } from 'swiper/modules';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const OfficeSwiper = () => {
    const isRtl = useSelector((state) => state.themeConfig.rtlClass) === 'rtl' ? true : false;

    return (
        <section className="bg-gradient-to-t from-white/[54%] to-transparent py-14 dark:bg-none lg:py-[100px]">
            <div className="container">
                <div className="flex flex-col items-center justify-center lg:flex-row lg:justify-between">
                    <div className="heading text-center md:w-1/2 ltr:lg:text-left rtl:lg:text-right">
                        <h6>Our Offices</h6>
                        <h4>Come to visit our office in AUST</h4>
                    </div>
                    <div className="flex items-center justify-end gap-4">
                        <Link to="#" className="text-sm font-extrabold text-black transition hover:text-secondary dark:text-white dark:hover:text-secondary">
                            View All
                        </Link>
                        <button
                            type="button"
                            className="ofc-slider-button-prev flex h-10 w-10 items-center justify-center rounded-full bg-black/5 transition hover:bg-secondary dark:bg-white/5 dark:hover:bg-secondary"
                        >
                            <svg
                                width="7"
                                height="12"
                                viewBox="0 0 7 12"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="text-black rtl:rotate-180 dark:text-white"
                            >
                                <path
                                    d="M5.95007 1.2002L1.48924 5.3424C1.06317 5.73803 1.06317 6.41236 1.48924 6.80799L5.95007 10.9502"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                ></path>
                            </svg>
                        </button>
                        <button
                            type="button"
                            className="ofc-slider-button-next text-p flex h-10 w-10 items-center justify-center rounded-full bg-black/5 transition hover:bg-secondary dark:bg-white/5 dark:hover:bg-secondary"
                        >
                            <svg
                                width="7"
                                height="12"
                                viewBox="0 0 7 12"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="text-black rtl:rotate-180 dark:text-white"
                            >
                                <path
                                    d="M1.05005 10.7998L5.51089 6.6576C5.93695 6.26197 5.93695 5.58764 5.51089 5.19201L1.05005 1.0498"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                ></path>
                            </svg>
                        </button>
                    </div>
                </div>
                <div className="swiper ofc-slider rounded-[32px] drop-shadow-[5px_10px_80px_rgba(119,128,161,0.15)]  dark:drop-shadow-none">
                    <div className="swiper-wrapper">
                        <Swiper
                            modules={[Navigation, Autoplay]}
                            slidesPerView="auto"
                            spaceBetween={30}
                            loop={true}
                            autoplay={{ delay: 2500, disableOnInteraction: false }}
                            navigation={{
                                nextEl: '.ofc-slider-button-next',
                                prevEl: '.ofc-slider-button-prev',
                            }}
                            dir={isRtl ? 'rtl' : 'ltr'}
                            key={isRtl ? 'true' : 'false'}
                        >
                            <SwiperSlide>
                                <div className="mt-10 rounded-[32px] bg-white dark:bg-gray-dark md:grid md:grid-cols-2 lg:mt-0">
                                    <img
                                        src="/assets/images/ofc.png"
                                        alt="office"
                                        className="h-full w-full rounded-r-[32px] rounded-l-[32px] object-cover md:rounded-r-none"
                                    />
                                    <div className="py-10 px-5 sm:px-8">

                                        <ul className="space-y-4 pt-10">
                                            <li className="flex gap-3">
                                                <div className="pt-1">
                                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            fillRule="evenodd"
                                                            clipRule="evenodd"
                                                            d="M1 8.45529C1 3.77836 4.8292 0 9.53659 0C14.244 0 18.0732 3.77836 18.0732 8.45529C18.0732 11.3641 16.3769 14.235 14.5791 16.3248C13.6693 17.3823 12.7037 18.2751 11.852 18.9101C11.4268 19.227 11.0181 19.4886 10.6492 19.6744C10.3034 19.8485 9.90853 20 9.53659 20C9.16464 20 8.76974 19.8485 8.42394 19.6744C8.05506 19.4886 7.6464 19.227 7.22121 18.9101C6.36948 18.2751 5.40386 17.3823 4.49409 16.3248C2.69631 14.235 1 11.3641 1 8.45529ZM9.53661 10.9748C7.92017 10.9748 6.60978 9.66437 6.60978 8.04792C6.60978 6.43148 7.92017 5.12109 9.53661 5.12109C11.1531 5.12109 12.4634 6.43148 12.4634 8.04792C12.4634 9.66437 11.1531 10.9748 9.53661 10.9748Z"
                                                            fill="#FFBD11"
                                                        />
                                                    </svg>
                                                </div>
                                                <div className="text-sm font-bold sm:text-lg">141 & 142, Love Road, Tejgaon Industrial Area, Dhaka-1208, Bangladesh</div>
                                            </li>
                                            <li className="flex items-center gap-3">
                                                <div>
                                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="M17.0621 18.2183C15.1077 20.1726 10.1028 18.3363 5.88327 14.1167C1.66372 9.89718 -0.172609 4.89227 1.7817 2.93795L3.06847 1.65118C3.9568 0.762856 5.42054 0.786338 6.33784 1.70363L8.33092 3.69672C9.24822 4.61401 9.2717 6.07776 8.38337 6.96609L8.10699 7.24247C7.62737 7.72209 7.58045 8.49581 8.0261 9.03587C8.45597 9.55679 8.9194 10.0756 9.42188 10.5781C9.92435 11.0806 10.4432 11.544 10.9641 11.9739C11.5042 12.4196 12.2779 12.3726 12.7575 11.893L13.0339 11.6166C13.9222 10.7283 15.386 10.7518 16.3033 11.6691L18.2964 13.6622C19.2137 14.5795 19.2371 16.0432 18.3488 16.9315L17.0621 18.2183Z"
                                                            fill="#45B649"
                                                        />
                                                    </svg>
                                                </div>
                                                <a href="tel:+15193726595" className="text-sm font-bold hover:text-secondary sm:text-lg">
                                                    +1 519 372 6595
                                                </a>
                                            </li>
                                            <li className="flex items-center gap-3">
                                                <div>
                                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            fillRule="evenodd"
                                                            clipRule="evenodd"
                                                            d="M0 7.34884C0 4.39476 2.39476 2 5.34884 2H14.6512C17.6052 2 20 4.39476 20 7.34884V12.9302C20 15.8843 17.6052 18.2791 14.6512 18.2791H5.34884C2.39476 18.2791 0 15.8843 0 12.9302V7.34884ZM4.8686 6.74884C4.53723 6.50031 4.06713 6.56747 3.8186 6.89884C3.57008 7.23021 3.63723 7.70031 3.9686 7.94884L8.35 11.2349C9.32778 11.9682 10.6722 11.9682 11.65 11.2349L16.0314 7.94884C16.3628 7.70031 16.4299 7.23021 16.1814 6.89884C15.9329 6.56747 15.4628 6.50031 15.1314 6.74884L10.75 10.0349C10.3056 10.3682 9.69444 10.3682 9.25 10.0349L4.8686 6.74884Z"
                                                            fill="#FF709D"
                                                        />
                                                    </svg>
                                                </div>
                                                <a className="text-sm font-bold hover:text-secondary sm:text-lg">
                                                    info@aust.edu
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="mt-10 rounded-[32px] bg-white dark:bg-gray-dark md:grid md:grid-cols-2 lg:mt-0">
                                    <img
                                        src="/assets/images/ofc.png"
                                        alt="office"
                                        className="h-full w-full rounded-r-[32px] rounded-l-[32px] object-cover md:rounded-r-none"
                                    />
                                    <div className="py-10 px-5 sm:px-8">

                                        <ul className="space-y-4 pt-10">
                                            <li className="flex gap-3">
                                                <div className="pt-1">
                                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            fillRule="evenodd"
                                                            clipRule="evenodd"
                                                            d="M1 8.45529C1 3.77836 4.8292 0 9.53659 0C14.244 0 18.0732 3.77836 18.0732 8.45529C18.0732 11.3641 16.3769 14.235 14.5791 16.3248C13.6693 17.3823 12.7037 18.2751 11.852 18.9101C11.4268 19.227 11.0181 19.4886 10.6492 19.6744C10.3034 19.8485 9.90853 20 9.53659 20C9.16464 20 8.76974 19.8485 8.42394 19.6744C8.05506 19.4886 7.6464 19.227 7.22121 18.9101C6.36948 18.2751 5.40386 17.3823 4.49409 16.3248C2.69631 14.235 1 11.3641 1 8.45529ZM9.53661 10.9748C7.92017 10.9748 6.60978 9.66437 6.60978 8.04792C6.60978 6.43148 7.92017 5.12109 9.53661 5.12109C11.1531 5.12109 12.4634 6.43148 12.4634 8.04792C12.4634 9.66437 11.1531 10.9748 9.53661 10.9748Z"
                                                            fill="#FFBD11"
                                                        />
                                                    </svg>
                                                </div>
                                                <div className="text-sm font-bold sm:text-lg">141 & 142, Love Road, Tejgaon Industrial Area, Dhaka-1208, Bangladesh</div>
                                            </li>
                                            <li className="flex items-center gap-3">
                                                <div>
                                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="M17.0621 18.2183C15.1077 20.1726 10.1028 18.3363 5.88327 14.1167C1.66372 9.89718 -0.172609 4.89227 1.7817 2.93795L3.06847 1.65118C3.9568 0.762856 5.42054 0.786338 6.33784 1.70363L8.33092 3.69672C9.24822 4.61401 9.2717 6.07776 8.38337 6.96609L8.10699 7.24247C7.62737 7.72209 7.58045 8.49581 8.0261 9.03587C8.45597 9.55679 8.9194 10.0756 9.42188 10.5781C9.92435 11.0806 10.4432 11.544 10.9641 11.9739C11.5042 12.4196 12.2779 12.3726 12.7575 11.893L13.0339 11.6166C13.9222 10.7283 15.386 10.7518 16.3033 11.6691L18.2964 13.6622C19.2137 14.5795 19.2371 16.0432 18.3488 16.9315L17.0621 18.2183Z"
                                                            fill="#45B649"
                                                        />
                                                    </svg>
                                                </div>
                                                <a href="tel:+15193726595" className="text-sm font-bold hover:text-secondary sm:text-lg">
                                                    +880 1711 111 11 11
                                                </a>
                                            </li>
                                            <li className="flex items-center gap-3">
                                                <div>
                                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            fillRule="evenodd"
                                                            clipRule="evenodd"
                                                            d="M0 7.34884C0 4.39476 2.39476 2 5.34884 2H14.6512C17.6052 2 20 4.39476 20 7.34884V12.9302C20 15.8843 17.6052 18.2791 14.6512 18.2791H5.34884C2.39476 18.2791 0 15.8843 0 12.9302V7.34884ZM4.8686 6.74884C4.53723 6.50031 4.06713 6.56747 3.8186 6.89884C3.57008 7.23021 3.63723 7.70031 3.9686 7.94884L8.35 11.2349C9.32778 11.9682 10.6722 11.9682 11.65 11.2349L16.0314 7.94884C16.3628 7.70031 16.4299 7.23021 16.1814 6.89884C15.9329 6.56747 15.4628 6.50031 15.1314 6.74884L10.75 10.0349C10.3056 10.3682 9.69444 10.3682 9.25 10.0349L4.8686 6.74884Z"
                                                            fill="#FF709D"
                                                        />
                                                    </svg>
                                                </div>
                                                <a className="text-sm font-bold hover:text-secondary sm:text-lg">
                                                    info@aust.edu
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OfficeSwiper;
