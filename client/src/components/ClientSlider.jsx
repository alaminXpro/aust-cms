import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay, Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ClientSlider = ({
    type = 'common',
    feedbacks = [
        {
            id: 1,
            name: 'amelia smith',
            role: 'customer',
            thumbnail: '/assets/images/realestate/customer-avatar.svg',
            message: `“It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.”`,
        },
    ],
}) => {
    const isRtl = useSelector((state) => state.themeConfig.rtlClass) === 'rtl' ? true : false;

    return (
        <>
            {type.toLowerCase() === 'creative-agency' ? (
                <>
                    <Swiper
                        loop={true}
                        slidesPerView="auto"
                        spaceBetween={30}
                        speed={1000}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                        }}
                        navigation={{
                            nextEl: '.client-swiper-button-next',
                            prevEl: '.client-swiper-button-prev',
                        }}
                        modules={[Autoplay, Navigation]}
                        breakpoints={{
                            320: {
                                slidesPerView: 1,
                            },
                            600: {
                                slidesPerView: 2,
                            },
                        }}
                        dir={isRtl ? 'rtl' : 'ltr'}
                        key={isRtl ? 'true' : 'false'}
                    >
                        {feedbacks.map((feedback) => {
                            return (
                                <SwiperSlide key={feedback.id}>
                                    <div className="border-2 border-gray/10 bg-gray/[0.06] p-[30px]">
                                        <p className="font-semibold leading-7">{feedback.message}</p>
                                        <div className="mt-12 flex items-center gap-2.5">
                                            <div>
                                                <img src={feedback.thumbnail} alt="" />
                                            </div>
                                            <div>
                                                <h5 className="text-lg font-bold text-black dark:text-white">{feedback.name}</h5>
                                                <p className="mt-[2px] text-sm font-bold italic">{feedback.role}</p>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            );
                        })}
                    </Swiper>
                    <div className="mt-5 flex items-center justify-end gap-2.5">
                        <button
                            type="button"
                            className="client-swiper-button-prev flex h-9 w-[38px] items-center justify-center bg-black duration-200 hover:bg-secondary rtl:rotate-y-180 dark:bg-gray-dark dark:hover:bg-secondary"
                        >
                            <svg width="19" height="16" viewBox="0 0 19 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8 2L2 8L8 14" stroke="white" strokeWidth="2" strokeLinecap="square" />
                                <path d="M18 8H4" stroke="white" strokeWidth="2" strokeLinecap="square" />
                            </svg>
                        </button>
                        <button
                            type="button"
                            className="client-swiper-button-next flex h-9 w-[38px] items-center justify-center bg-black duration-200 hover:bg-secondary rtl:rotate-y-180 dark:bg-gray-dark dark:hover:bg-secondary"
                        >
                            <svg width="19" height="16" viewBox="0 0 19 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11 2L17 8L11 14" stroke="white" strokeWidth="2" strokeLinecap="square" />
                                <path d="M1 8H15" stroke="white" strokeWidth="2" strokeLinecap="square" />
                            </svg>
                        </button>
                    </div>
                </>
            ) : (
                <>
                    <Swiper
                        loop={true}
                        slidesPerView="auto"
                        spaceBetween={30}
                        speed={1000}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                        }}
                        navigation={{
                            prevEl: '.feedback-slider-button-prev',
                            nextEl: '.feedback-slider-button-next',
                        }}
                        modules={[Navigation, Autoplay]}
                        dir={isRtl ? 'rtl' : 'ltr'}
                        key={isRtl ? 'true' : 'false'}
                    >
                        {feedbacks.map((feedback) => {
                            return (
                                <SwiperSlide key={feedback.id}>
                                    <div className="flex justify-between gap-7 p-7">
                                        <div className="flex items-center gap-2.5">
                                            <div className="flex h-14 w-14 items-end justify-center overflow-hidden rounded-full border border-[rgba(125,132,150,0.2)] bg-gradient-to-t from-[rgba(125,132,150,0.1)] to-[125,132,150]">
                                                <img src={feedback.thumbnail} alt="" className="h-full w-full object-cover" />
                                            </div>
                                            <div>
                                                <h5 className="text-lg font-bold text-black dark:text-white">{feedback.name}</h5>
                                                <p className="text-sm font-bold italic">{feedback.role}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="border border-gray/10"></div>
                                    <div className="p-7">
                                        <h3 className="text-lg font-bold italic text-black dark:text-white">new bungalow house</h3>
                                        <p className="mt-4 text-base font-semibold leading-7">{feedback.message}</p>
                                        <div className="text-right">
                                            <p className="mt-7 inline-flex bg-[rgba(8,17,31,0.06)] p-2 text-sm font-semibold text-black dark:text-white">
                                                San Diego, California
                                            </p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            );
                        })}
                    </Swiper>
                    <div className="absolute top-7 z-10 flex gap-2.5 ltr:right-7 rtl:left-7">
                        <Link
                            to="#"
                            className="feedback-slider-button-prev flex h-8 w-8 items-center justify-center bg-[rgba(8,17,31,0.08)] text-black duration-200 after:hidden hover:bg-black hover:text-white dark:bg-white/80 dark:hover:bg-secondary"
                        >
                            <svg width="9" height="18" viewBox="0 0 9 18" fill="none" xmlns="http://www.w3.org/2000/svg" className="rtl:rotate-180">
                                <path
                                    d="M7 16L1 9L2.5 7.25M7 2L5 4.33333"
                                    stroke="currentcolor"
                                    strokeWidth="2"
                                    strokeLinecap="square"
                                    strokeLinejoin="round"
                                ></path>
                            </svg>
                        </Link>
                        <Link
                            to="#"
                            className="feedback-slider-button-next flex h-8 w-8 items-center justify-center bg-[rgba(8,17,31,0.08)] text-black duration-200 after:hidden hover:bg-black hover:text-white dark:bg-white/80 dark:hover:bg-secondary"
                        >
                            <svg width="9" height="18" viewBox="0 0 9 18" fill="none" xmlns="http://www.w3.org/2000/svg" className="rtl:rotate-180">
                                <path
                                    d="M2 2L4 4.33333M2 16L8 9L6.5 7.25"
                                    stroke="currentcolor"
                                    strokeWidth="2"
                                    strokeLinecap="square"
                                    strokeLinejoin="round"
                                ></path>
                            </svg>
                        </Link>
                    </div>
                </>
            )}
        </>
    );
};

export default ClientSlider;
