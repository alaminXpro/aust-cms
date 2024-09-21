import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Testimonial from '../components/Testimonial';
import CountUp from 'react-countup';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay, Navigation } from 'swiper/modules';
import { useSelector } from 'react-redux';
import { setPageTitle } from '../redux/themeConfigSlice';
import { useDispatch } from 'react-redux';

const Marketing = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setPageTitle('AUSTCMS'));
    }, [dispatch]);
    const isRtl = useSelector((state) => state.themeConfig.direction) === 'rtl' ? true : false;
    const feedbacks = [
        {
            id: 1,
            name: 'Prince AL AMIN',
            role: 'Founder of AUSTCMS',
            thumbnail: '/assets/images/alaminxpro.png',
            message:
                "AUSTCMS was born from a vision to streamline club management at our university. It's incredible to see how it has grown and positively impacted student engagement across various clubs. This platform is revolutionizing the way we connect and collaborate on campus.",
        },
        {
            id: 2,
            name: 'Harique Jaif',
            role: 'CEO of AUSTCMS',
            thumbnail: '/assets/images/jaif-square.png',
            message:
                "As CEO, I've witnessed firsthand the transformative power of AUSTCMS. It's not just a management system; it's a catalyst for student leadership and community building. The efficiency and connectivity it brings to club operations are unparalleled.",
        },
        {
            id: 3,
            name: 'Yeash Ahmed',
            role: 'CTO of AUSTCMS',
            thumbnail: '/assets/images/yeash-square.png',
            message:
                "The technical challenges we've overcome in developing AUSTCMS have been immense, but the results are worth it. Our platform's robust features and user-friendly interface are setting new standards for university club management systems.",
        },
        {
            id: 4,
            name: 'MD. AL AMIN',
            role: 'Software Engineer',
            thumbnail: '/assets/images/alaminxpro-400.png',
            message:
                "Working on AUSTCMS has been a rewarding experience. The codebase is well-structured and scalable, allowing us to continuously add new features and improvements. It's gratifying to see our work directly benefiting the student community at AUST.",
        },
    ];

    return (
        <div>
            <div className="overflow-hidden bg-black pt-[82px] sm:-mx-[250px] sm:rounded-b-[50%] lg:-mx-[150px] lg:pt-[106px]">
                <div className="relative">
                    <img src="/assets/images/banner-lefticon.png" alt="banner-lefticon" className="absolute left-0 top-20 sm:left-[250px] lg:left-[150px]" />
                    <img src="/assets/images/banner-rightIcon.png" alt="banner-rightIcon" className="absolute right-0 -top-4 sm:right-[250px] lg:right-[150px]" />
                    <div className="container">
                        <div className="relative bg-[url(/assets/images/world-map.png)] bg-cover bg-top bg-no-repeat pt-14 pb-0 lg:pt-20 lg:pb-60 xl:pt-36">
                            <div className="relative z-[1] text-center text-white lg:w-3/5 ltr:lg:text-left rtl:lg:text-right xl:w-1/2">
                                <h2 className="text-4xl font-extrabold leading-normal sm:text-5xl lg:text-[70px] lg:leading-[90px] ">
                                    Your <span className="italic text-primary">Campus</span>, Your <span className="italic text-secondary">Club</span> Community
                                </h2>
                                <p className="my-8 text-lg lg:w-[90%] ">Discover, join, and thrive in Ahsanullah University of Science and Technology&apos;s vibrant club ecosystem.</p>
                                <Link to="/login" className="btn mx-auto mt-2 block w-fit bg-white lg:mx-0 lg:rtl:ml-auto">
                                    Explore Clubs
                                </Link>
                            </div>
                            <div
                                className="bottom-0 mx-auto mt-5 mb-2 w-auto ltr:right-0 rtl:left-0 md:w-[540px] lg:absolute lg:mb-0 lg:mt-0 xl:w-[650px]"
                                data-aos={isRtl ? 'fade-right' : 'fade-left'}
                                data-aos-duration="1000"
                                data-aos-offset="0"
                                data-aos-delay="200"
                            >
                                <img src="/assets/images/home-banner-icon.svg" alt="home-banner-icon" className="rtl:rotate-y-180" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section className="py-14 pb-12 lg:py-20">
                <div className="container">
                    <div className="heading text-center">
                        <h6 className="!text-secondary">Community. Peoples. Support</h6>
                        <h4>
                            As featured with
                            <span className="relative text-primary after:absolute after:inset-x-0 after:bottom-0 after:h-1 after:w-full after:bg-gradient-to-r after:from-primary/10 after:via-primary after:to-primary/10">
                                {' '}
                                growth{' '}
                            </span>
                            partner
                        </h4>
                    </div>

                    <Swiper
                        loop={true}
                        slidesPerView="auto"
                        spaceBetween={30}
                        speed={2500}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                        }}
                        modules={[Autoplay]}
                        breakpoints={{
                            320: {
                                slidesPerView: 2,
                            },
                            600: {
                                slidesPerView: 3,
                            },
                            1000: {
                                slidesPerView: 4,
                            },
                            1600: {
                                slidesPerView: 6,
                            },
                        }}
                        dir={isRtl ? 'rtl' : 'ltr'}
                        key={isRtl ? 'true' : 'false'}
                    >
                        <SwiperSlide>
                            <Link to="#" className="flex items-center gap-3 transition hover:scale-110">
                                <div>
                                    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clipPath="url(#clip0_298_1769)">
                                            <mask id="mask0_298_1769" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="0" y="0" width="30" height="30">
                                                <circle cx="15" cy="15" r="15" fill="#C4C4C4" />
                                            </mask>
                                            <g mask="url(#mask0_298_1769)">
                                                <circle cx="7.86398" cy="-2.66231" r="12.4449" transform="rotate(-22 7.86398 -2.66231)" fill="#47BDFF" />
                                                <circle cx="22.1375" cy="32.6639" r="12.4449" transform="rotate(-22 22.1375 32.6639)" fill="#47BDFF" />
                                                <circle cx="-2.6629" cy="22.1365" r="12.4449" transform="rotate(-22 -2.6629 22.1365)" fill="#B476E5" />
                                                <circle cx="32.337" cy="7.05449" r="12.4449" transform="rotate(-22 32.337 7.05449)" fill="#B476E5" />
                                            </g>
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_298_1769">
                                                <rect width="30" height="30" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </div>
                                <span className="text-xl font-bold text-black dark:text-white">Camera</span>
                            </Link>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Link to="#" className="flex items-center gap-3 transition hover:scale-110">
                                <div>
                                    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M2 12.7576C2 6.26406 7.26406 1 13.7576 1V17.2417C13.7576 23.7352 8.49355 28.9993 2 28.9993V12.7576Z" fill="#FFBD11" />
                                        <path
                                            d="M15.4633 7.38899C15.4633 3.86045 18.3237 1 21.8522 1C25.3808 1 28.2412 3.86045 28.2412 7.38899V7.75786C28.2412 11.2864 25.3808 14.1469 21.8522 14.1469C18.3237 14.1469 15.4633 11.2864 15.4633 7.75786V7.38899Z"
                                            fill="#47BDFF"
                                        />
                                        <path
                                            d="M15.4633 22.2425C15.4633 18.714 18.3237 15.8535 21.8522 15.8535C25.3808 15.8535 28.2412 18.714 28.2412 22.2425V22.6114C28.2412 26.1399 25.3808 29.0004 21.8522 29.0004C18.3237 29.0004 15.4633 26.1399 15.4633 22.6114V22.2425Z"
                                            fill="#B476E5"
                                        />
                                    </svg>
                                </div>
                                <span className="text-xl font-bold text-black dark:text-white">Cefalo</span>
                            </Link>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Link to="#" className="flex items-center gap-3 transition hover:scale-110">
                                <div>
                                    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clipPath="url(#clip0_301_1299)">
                                            <rect x="5.55554" y="5.55469" width="18.8889" height="18.8889" rx="8" fill="#47BDFF" />
                                            <rect x="9.42285" width="2.88247" height="4.44444" rx="1.44123" fill="#B476E5" />
                                            <rect x="13.559" width="2.88247" height="4.44444" rx="1.44123" fill="#B476E5" />
                                            <rect x="17.696" width="2.88247" height="4.44444" rx="1.44123" fill="#B476E5" />
                                            <rect y="20.5762" width="2.88247" height="4.44444" rx="1.44123" transform="rotate(-90 0 20.5762)" fill="#B476E5" />
                                            <rect y="16.4395" width="2.88247" height="4.44444" rx="1.44123" transform="rotate(-90 0 16.4395)" fill="#B476E5" />
                                            <rect y="12.3047" width="2.88247" height="4.44444" rx="1.44123" transform="rotate(-90 0 12.3047)" fill="#B476E5" />
                                            <rect x="25.5558" y="20.5762" width="2.88247" height="4.44444" rx="1.44123" transform="rotate(-90 25.5558 20.5762)" fill="#B476E5" />
                                            <rect x="25.5558" y="16.4395" width="2.88247" height="4.44444" rx="1.44123" transform="rotate(-90 25.5558 16.4395)" fill="#B476E5" />
                                            <rect x="25.5558" y="12.3047" width="2.88247" height="4.44444" rx="1.44123" transform="rotate(-90 25.5558 12.3047)" fill="#B476E5" />
                                            <rect x="9.42285" y="25.5547" width="2.88247" height="4.44444" rx="1.44123" fill="#B476E5" />
                                            <rect x="13.559" y="25.5547" width="2.88247" height="4.44444" rx="1.44123" fill="#B476E5" />
                                            <rect x="17.696" y="25.5547" width="2.88247" height="4.44444" rx="1.44123" fill="#B476E5" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_301_1299">
                                                <rect width="30" height="30" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </div>
                                <span className="text-xl font-bold text-black dark:text-white">Software</span>
                            </Link>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Link to="#" className="flex items-center gap-3 transition hover:scale-110">
                                <div>
                                    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M16.7705 5.24752C16.7705 3.4509 18.9554 2.56542 20.2062 3.85514L29.1466 13.0738C29.5085 13.4469 29.7109 13.9463 29.7109 14.4661V25.0644C29.7109 26.861 27.526 27.7465 26.2752 26.4568L17.3348 17.2381C16.9729 16.865 16.7705 16.3656 16.7705 15.8457V5.24752Z"
                                            fill="#47BDFF"
                                        />
                                        <path
                                            d="M8.75098 4.93502C8.75098 3.1384 10.9359 2.25292 12.1867 3.54264L21.1271 12.7613C21.489 13.1344 21.6914 13.6338 21.6914 14.1536V24.7519C21.6914 26.5485 19.5064 27.434 18.2556 26.1443L9.31526 16.9256C8.95337 16.5525 8.75098 16.0531 8.75098 15.5332V4.93502Z"
                                            fill="#FFBD11"
                                        />
                                        <path
                                            d="M1 5.24752C1 3.4509 3.18492 2.56542 4.43571 3.85514L13.3761 13.0738C13.738 13.4469 13.9404 13.9463 13.9404 14.4661V25.0644C13.9404 26.861 11.7555 27.7465 10.5047 26.4568L1.56429 17.2381C1.20239 16.865 1 16.3656 1 15.8457V5.24752Z"
                                            fill="#B476E5"
                                        />
                                    </svg>
                                </div>
                                <span className="text-xl font-bold text-black dark:text-white">Techlify</span>
                            </Link>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Link to="#" className="flex items-center gap-3 transition hover:scale-110">
                                <div>
                                    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <mask id="mask0_301_1325" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="1" y="0" width="28" height="30">
                                            <path
                                                d="M12.0903 0.695468C13.6964 -0.231822 15.6753 -0.231823 17.2814 0.695467L25.7762 5.59995C27.3823 6.52724 28.3717 8.24094 28.3717 10.0955V19.9045C28.3717 21.7591 27.3823 23.4728 25.7762 24.4001L17.2814 29.3045C15.6753 30.2318 13.6964 30.2318 12.0903 29.3045L3.59552 24.4001C1.98941 23.4728 1 21.7591 1 19.9045V10.0955C1 8.24094 1.98941 6.52724 3.59552 5.59995L12.0903 0.695468Z"
                                                fill="#C4C4C4"
                                            />
                                        </mask>
                                        <g mask="url(#mask0_301_1325)">
                                            <rect width="17.3224" height="17.3224" transform="matrix(0.866025 0.5 -0.866025 0.5 14.686 -1.06055)" fill="#B476E5" />
                                            <rect width="15.939" height="15.939" transform="matrix(0.866025 0.5 -2.20305e-08 1 0.881958 7.72656)" fill="#47BDFF" />
                                            <rect width="15.939" height="15.939" transform="matrix(0.866025 -0.5 2.20305e-08 1 14.686 15.6973)" fill="#FFBD11" />
                                        </g>
                                    </svg>
                                </div>
                                <span className="text-xl font-bold text-black dark:text-white">Blockly</span>
                            </Link>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Link to="#" className="flex items-center gap-3 transition hover:scale-110">
                                <div>
                                    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M12.7673 26.3704C12.5926 26.3704 12.4091 26.3529 12.2256 26.3005C11.0285 26.0034 10.2946 24.7888 10.5916 23.5918L15.0653 5.69711C15.3711 4.50006 16.5857 3.77484 17.7827 4.06318C18.9798 4.36899 19.705 5.58353 19.4079 6.78058L14.9342 24.6753C14.6809 25.6888 13.7721 26.3704 12.7673 26.3704Z"
                                            fill="#47BDFF"
                                        />
                                        <path
                                            d="M23.2896 21.8976C22.7129 21.8976 22.1449 21.6791 21.7081 21.2422C20.8343 20.3685 20.8343 18.953 21.7081 18.0792L24.6002 15.1871L21.7081 12.2949C20.8343 11.4211 20.8343 10.0056 21.7081 9.13189C22.5818 8.25812 23.9973 8.25812 24.8711 9.13189L29.3448 13.6056C30.2185 14.4793 30.2185 15.8948 29.3448 16.7686L24.8711 21.2422C24.4342 21.6791 23.8663 21.8976 23.2896 21.8976Z"
                                            fill="#B476E5"
                                        />
                                        <path
                                            d="M6.7105 21.8976C6.13382 21.8976 5.56587 21.6791 5.12899 21.2422L0.655323 16.7686C-0.218441 15.8948 -0.218441 14.4793 0.655323 13.6056L5.12899 9.13189C6.00275 8.25812 7.41825 8.25812 8.29201 9.13189C9.16578 10.0056 9.16578 11.4211 8.29201 12.2949L5.39986 15.1871L8.29201 18.0792C9.16578 18.953 9.16578 20.3685 8.29201 21.2422C7.85513 21.6791 7.28718 21.8976 6.7105 21.8976Z"
                                            fill="#B476E5"
                                        />
                                    </svg>
                                </div>
                                <span className="text-xl font-bold text-black dark:text-white">Enosis</span>
                            </Link>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Link to="#" className="flex items-center gap-3 transition hover:scale-110">
                                <div>
                                    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect y="3" width="28.5828" height="24.7945" rx="2" fill="#47BDFF" />
                                        <path
                                            d="M28.0001 10.8555H15.9614C14.8569 10.8555 13.9614 11.7509 13.9614 12.8555V17.9394C13.9614 19.044 14.8569 19.9394 15.9614 19.9394H28.0001C29.1046 19.9394 30.0001 19.044 30.0001 17.9394V12.8555C30.0001 11.7509 29.1046 10.8555 28.0001 10.8555Z"
                                            fill="#B476E5"
                                        />
                                        <circle cx="18.3508" cy="15.3979" r="2.27099" fill="white" />
                                    </svg>
                                </div>
                                <span className="text-xl font-bold text-black dark:text-white">Financely</span>
                            </Link>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Link to="#" className="flex items-center gap-3 transition hover:scale-110">
                                <div>
                                    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M14.4159 6.37499C14.4159 3.95781 12.8496 2 10.9159 2C8.98433 2 7.41589 3.95781 7.41589 6.37499C7.41589 8.78998 8.98433 10.75 10.9159 10.75C12.8496 10.75 14.4159 8.78998 14.4159 6.37499Z"
                                            fill="#B476E5"
                                        />
                                        <path
                                            d="M7.99998 12.791C7.99998 10.3738 6.43373 8.41602 4.49999 8.41602C2.56625 8.41602 1 10.3738 1 12.791C1 15.2082 2.56625 17.166 4.49999 17.166C6.43373 17.166 7.99998 15.2082 7.99998 12.791Z"
                                            fill="#B476E5"
                                        />
                                        <path
                                            d="M29 12.791C29 10.3738 27.4337 8.41602 25.5 8.41602C23.5662 8.41602 22 10.3738 22 12.791C22 15.2082 23.5662 17.166 25.5 17.166C27.4337 17.166 29 15.2082 29 12.791Z"
                                            fill="#B476E5"
                                        />
                                        <path
                                            d="M22.5841 6.37499C22.5841 3.95781 21.0157 2 19.0841 2C17.1504 2 15.5841 3.95781 15.5841 6.37499C15.5841 8.78998 17.1504 10.75 19.0841 10.75C21.0157 10.75 22.5841 8.78998 22.5841 6.37499Z"
                                            fill="#B476E5"
                                        />
                                        <path
                                            d="M24.8808 23.0331C24.7561 21.8825 24.3864 20.7712 23.7958 19.7759C23.5267 19.3362 23.2708 18.9009 23.017 18.4787C20.928 14.9569 19.1255 11.9141 14.9999 11.9141C10.8743 11.9141 9.08052 14.9569 6.99147 18.4787C6.73991 18.9031 6.48178 19.3362 6.21272 19.7781C5.6221 20.7712 5.25022 21.8825 5.12772 23.0331C4.9571 24.4922 5.41866 25.9556 6.39647 27.0537C7.40709 28.1846 8.85303 28.8321 10.3711 28.83H19.6374C21.1555 28.8321 22.6014 28.1846 23.612 27.0537C24.5877 25.9556 25.0492 24.4922 24.8808 23.0331Z"
                                            fill="#47BDFF"
                                        />
                                    </svg>
                                </div>
                                <span className="text-xl font-bold text-black dark:text-white">Brain Station 23</span>
                            </Link>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </section>

            <section className="bg-gradient-to-b from-white/[55%] to-transparent py-12 dark:from-white/5 md:py-20">
                <div className="container">
                    <div className="heading text-center">
                        <h6 className="!text-secondary">Our Services</h6>
                        <h4>Empowering Your University Experience</h4>
                    </div>

                    <div
                        className="mt-24 grid grid-cols-1 gap-7 space-y-10 text-black ltr:text-right rtl:text-left sm:grid-cols-2 sm:space-y-0 lg:grid-cols-3"
                        data-aos="fade-up"
                        data-aos-duration="1000"
                    >
                        <div className="group relative rounded-3xl border-2 border-transparent bg-white p-6 shadow-[-20px_30px_70px_rgba(219,222,225,0.4)] transition duration-500 hover:border-secondary hover:bg-secondary/20 dark:border-white/10 dark:bg-transparent dark:bg-gradient-to-b dark:from-white/[0.04] dark:to-transparent dark:!shadow-none dark:hover:bg-secondary">
                            <Link
                                to="#"
                                className="absolute -top-[50px] flex h-[108px] w-[108px] items-center justify-center rounded-full bg-secondary text-white shadow-[0_15px_30px_rgba(180,118,229,0.4)] group-hover:bg-black group-hover:shadow-[0_15px_30px_rgba(199,55,253,0.4)] ltr:right-4 rtl:left-4"
                            >
                                <svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        opacity="0.4"
                                        d="M46.3017 24.6784V37.6568C46.3017 43.6368 41.4483 48.4901 35.4683 48.4901H16.5317C10.5517 48.4901 5.69833 43.6368 5.69833 37.6568V24.8301C7.345 26.6068 9.685 27.6251 12.22 27.6251C14.95 27.6251 17.5717 26.2601 19.2183 24.0718C20.6917 26.2601 23.205 27.6251 26 27.6251C28.7733 27.6251 31.2433 26.3251 32.7383 24.1584C34.4067 26.3034 36.985 27.6251 39.6717 27.6251C42.2933 27.6251 44.6767 26.5634 46.3017 24.6784Z"
                                        fill="currentcolor"
                                    />
                                    <path
                                        d="M32.4779 2.70801H19.4779L17.8746 18.6547C17.7446 20.128 17.9613 21.5147 18.5029 22.7713C19.7596 25.718 22.7063 27.6247 25.9996 27.6247C29.3363 27.6247 32.2179 25.7613 33.5179 22.793C33.9079 21.8613 34.1463 20.778 34.1679 19.673V19.2613L32.4779 2.70801Z"
                                        fill="currentcolor"
                                    />
                                    <path
                                        opacity="0.6"
                                        d="M48.4467 17.9185L47.8183 11.9168C46.9083 5.3735 43.94 2.7085 37.5917 2.7085H29.2717L30.875 18.9585C30.8967 19.1752 30.9183 19.4135 30.9183 19.8252C31.0483 20.9518 31.395 21.9918 31.915 22.9235C33.475 25.7835 36.5083 27.6252 39.6717 27.6252C42.5533 27.6252 45.1533 26.3468 46.7783 24.0935C48.0783 22.3602 48.6633 20.1718 48.4467 17.9185Z"
                                        fill="currentcolor"
                                    />
                                    <path
                                        opacity="0.6"
                                        d="M14.2783 2.7085C7.90834 2.7085 4.96167 5.3735 4.03 11.9818L3.445 17.9402C3.22834 20.2585 3.85667 22.5118 5.22167 24.2668C6.86834 26.4118 9.40334 27.6252 12.22 27.6252C15.3833 27.6252 18.4167 25.7835 19.955 22.9668C20.5183 21.9918 20.8867 20.8652 20.995 19.6952L22.685 2.73016H14.2783V2.7085Z"
                                        fill="currentcolor"
                                    />
                                    <path d="M24.5917 36.0969C21.84 36.3785 19.76 38.7185 19.76 41.4919V48.4902H32.2183V42.2502C32.24 37.7219 29.575 35.5769 24.5917 36.0969Z" fill="currentcolor" />
                                </svg>
                            </Link>
                            <h3 className="mt-[86px] text-[22px] font-extrabold dark:text-white dark:group-hover:text-black">Leadership Development</h3>
                            <p className="text=lg mt-4 font-semibold text-gray dark:group-hover:text-black">
                                We offer workshops and mentoring programs to help you develop essential leadership skills, preparing you for roles within clubs and beyond.
                            </p>
                            <Link
                                to="/services-detail"
                                className="mt-6 flex h-11 w-11 items-center justify-center rounded-full bg-[#F3F4F6] transition group-hover:bg-black group-hover:text-white ltr:float-right rtl:float-left dark:bg-gray-dark"
                            >
                                <svg
                                    width="20"
                                    height="20"
                                    viewBox="0 0 20 20"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="text-black transition group-hover:text-white rtl:rotate-180 dark:text-white"
                                >
                                    <path
                                        d="M9.41083 14.4109L10.5892 15.5892L16.1783 10.0001L10.5892 4.41089L9.41083 5.58922L12.9883 9.16672H5V10.8334H12.9883L9.41083 14.4109Z"
                                        fill="currentColor"
                                    ></path>
                                </svg>
                            </Link>
                        </div>
                        <div className="group relative rounded-3xl border-2 border-transparent bg-white p-6 shadow-[-20px_30px_70px_rgba(219,222,225,0.4)] transition duration-500 hover:border-secondary hover:bg-secondary/20 dark:border-white/10 dark:bg-transparent dark:bg-gradient-to-b dark:from-white/[0.04] dark:to-transparent dark:!shadow-none dark:hover:bg-secondary">
                            <Link
                                to="#"
                                className="absolute -top-[50px] flex h-[108px] w-[108px] items-center justify-center rounded-full bg-secondary text-white shadow-[0_15px_30px_rgba(180,118,229,0.4)] group-hover:bg-black group-hover:shadow-[0_15px_30px_rgba(199,55,253,0.4)] ltr:right-4 rtl:left-4"
                            >
                                <svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        opacity="0.4"
                                        d="M47.6663 16.9213V32.8463C47.038 32.543 46.3447 32.3263 45.5647 32.1963L44.893 32.088L44.3297 30.918C43.138 28.4913 41.188 27.083 38.9997 27.083C36.8113 27.083 34.8614 28.4913 33.6697 30.918L33.0847 32.088L32.4347 32.1963C29.8563 32.6297 27.993 34.0597 27.3213 36.0963C26.6713 38.1547 27.343 40.408 29.1847 42.2713L29.8563 42.943L29.7913 43.203C29.358 45.1313 29.5314 46.6047 29.943 47.6663H16.9213C9.03467 47.6663 4.33301 42.9647 4.33301 35.078V16.9213C4.33301 9.03468 9.03467 4.33301 16.9213 4.33301H35.078C42.9647 4.33301 47.6663 9.03468 47.6663 16.9213Z"
                                        fill="currentcolor"
                                    />
                                    <path
                                        d="M41.4271 32.3701L42.1205 33.7785C42.4671 34.4718 43.3555 35.1218 44.0921 35.2518L45.0238 35.4035C47.8621 35.8801 48.5121 37.9601 46.4971 39.9968L45.6304 40.8635C45.0454 41.4485 44.7421 42.5751 44.9155 43.3984L45.0238 43.9184C45.8038 47.3418 43.9838 48.6634 41.0154 46.8651L40.3871 46.4751C39.6288 46.0201 38.3721 46.0201 37.6137 46.4751L36.9855 46.8651C33.9955 48.6634 32.1971 47.3418 32.9771 43.9184L33.0854 43.3984C33.2588 42.5968 32.9555 41.4485 32.3705 40.8635L31.5038 39.9968C29.4888 37.9385 30.1388 35.8801 32.9771 35.4035L33.9088 35.2518C34.6671 35.1218 35.5338 34.4718 35.8804 33.7785L36.5738 32.3701C37.9171 29.6618 40.0838 29.6618 41.4271 32.3701Z"
                                        fill="currentcolor"
                                    />
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M34.9472 17.1542C35.6565 17.7041 35.7858 18.7248 35.236 19.4341L30.2213 25.9032C28.9324 27.5332 26.556 27.8305 24.898 26.5494L24.8867 26.5407L20.9292 23.4264C20.6847 23.2407 20.3436 23.287 20.158 23.5265C20.1578 23.5267 20.1581 23.5263 20.158 23.5265L15.0023 30.2201C14.4547 30.9312 13.4343 31.0636 12.7233 30.516C12.0123 29.9683 11.8799 28.948 12.4275 28.237L17.5858 21.54C18.8726 19.8747 21.2585 19.5737 22.9202 20.8577L22.9315 20.8665L26.8891 23.9807C27.1362 24.1683 27.4843 24.12 27.6687 23.8914L32.6673 17.443C33.2172 16.7337 34.2379 16.6044 34.9472 17.1542Z"
                                        fill="currentcolor"
                                    />
                                </svg>
                            </Link>
                            <h3 className="mt-[86px] text-[22px] font-extrabold dark:text-white dark:group-hover:text-black">Event Management</h3>
                            <p className="text=lg mt-4 font-semibold text-gray dark:group-hover:text-black">
                                Learn to plan and execute successful club events with our comprehensive event management training, covering budgeting, logistics, and promotion.
                            </p>
                            <Link
                                to="/services-detail"
                                className="mt-6 flex h-11 w-11 items-center justify-center rounded-full bg-[#F3F4F6] transition group-hover:bg-black group-hover:text-white ltr:float-right rtl:float-left dark:bg-gray-dark"
                            >
                                <svg
                                    width="20"
                                    height="20"
                                    viewBox="0 0 20 20"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="text-black transition group-hover:text-white rtl:rotate-180 dark:text-white"
                                >
                                    <path
                                        d="M9.41083 14.4109L10.5892 15.5892L16.1783 10.0001L10.5892 4.41089L9.41083 5.58922L12.9883 9.16672H5V10.8334H12.9883L9.41083 14.4109Z"
                                        fill="currentColor"
                                    ></path>
                                </svg>
                            </Link>
                        </div>
                        <div className="group relative rounded-3xl border-2 border-transparent bg-white p-6 shadow-[-20px_30px_70px_rgba(219,222,225,0.4)] transition duration-500 hover:border-secondary hover:bg-secondary/20 dark:border-white/10 dark:bg-transparent dark:bg-gradient-to-b dark:from-white/[0.04] dark:to-transparent dark:!shadow-none dark:hover:bg-secondary sm:!mt-10 lg:!mt-0">
                            <Link
                                to="#"
                                className="absolute -top-[50px] flex h-[108px] w-[108px] items-center justify-center rounded-full bg-secondary text-white shadow-[0_15px_30px_rgba(180,118,229,0.4)] group-hover:bg-black group-hover:shadow-[0_15px_30px_rgba(199,55,253,0.4)] ltr:right-4 rtl:left-4"
                            >
                                <svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        opacity="0.4"
                                        d="M41.1663 22.2731V37.7647C41.1013 43.9397 39.4113 45.4997 32.9763 45.4997H12.5231C5.97974 45.4997 4.33301 43.8747 4.33301 37.4181V22.2731C4.33301 16.4231 5.69801 14.5381 10.833 14.2347C11.353 14.2131 11.9164 14.1914 12.5231 14.1914H32.9763C39.5196 14.1914 41.1663 15.8164 41.1663 22.2731Z"
                                        fill="currentcolor"
                                    />
                                    <path
                                        d="M47.6663 14.5817V29.7267C47.6663 35.5767 46.3013 37.4617 41.1663 37.765V22.2733C41.1663 15.8167 39.5196 14.1917 32.9763 14.1917H12.5231C11.9164 14.1917 11.353 14.2133 10.833 14.235C10.898 8.06 12.5881 6.5 19.0231 6.5H39.4763C46.0196 6.5 47.6663 8.125 47.6663 14.5817Z"
                                        fill="currentcolor"
                                    />
                                    <path
                                        d="M15.08 40.2134H11.3533C10.4649 40.2134 9.72827 39.4767 9.72827 38.5884C9.72827 37.7 10.4649 36.9634 11.3533 36.9634H15.08C15.9683 36.9634 16.705 37.7 16.705 38.5884C16.705 39.4767 15.99 40.2134 15.08 40.2134Z"
                                        fill="currentcolor"
                                    />
                                    <path
                                        d="M27.1916 40.2134H19.7383C18.8499 40.2134 18.1133 39.4767 18.1133 38.5884C18.1133 37.7 18.8499 36.9634 19.7383 36.9634H27.1916C28.08 36.9634 28.8166 37.7 28.8166 38.5884C28.8166 39.4767 28.1016 40.2134 27.1916 40.2134Z"
                                        fill="currentcolor"
                                    />
                                    <path d="M41.1663 25.6963H4.33301V28.9463H41.1663V25.6963Z" fill="currentcolor" />
                                </svg>
                            </Link>
                            <h3 className="mt-[86px] text-[22px] font-extrabold dark:text-white dark:group-hover:text-black">Club Management</h3>
                            <p className="text=lg mt-4 font-semibold text-gray dark:group-hover:text-black">
                                Master the art of running successful clubs with our comprehensive management training, covering member engagement, financial planning, and strategic growth.
                            </p>
                            <Link
                                to="/services-detail"
                                className="mt-6 flex h-11 w-11 items-center justify-center rounded-full bg-[#F3F4F6] transition group-hover:bg-black group-hover:text-white ltr:float-right rtl:float-left dark:bg-gray-dark"
                            >
                                <svg
                                    width="20"
                                    height="20"
                                    viewBox="0 0 20 20"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="text-black transition group-hover:text-white rtl:rotate-180 dark:text-white"
                                >
                                    <path
                                        d="M9.41083 14.4109L10.5892 15.5892L16.1783 10.0001L10.5892 4.41089L9.41083 5.58922L12.9883 9.16672H5V10.8334H12.9883L9.41083 14.4109Z"
                                        fill="currentColor"
                                    ></path>
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-[url(/assets/images/marketing/business-owner.jpg)] bg-cover bg-center bg-no-repeat py-14 lg:py-[100px]">
                <div className="container relative">
                    <div className="heading text-center">
                        <h6 className="!text-secondary">Who we are</h6>
                        <h4 className="!text-white">
                            Your Gateway to Campus <span className="text-primary">Community</span>
                        </h4>
                    </div>

                    <div className="mx-auto grid max-w-[250px] gap-[30px] ltr:text-right rtl:text-left sm:max-w-none sm:grid-cols-2 lg:grid-cols-4">
                        <div
                            className="group flex cursor-pointer items-center gap-4 rounded-3xl bg-gray-dark py-10 px-6 transition duration-500 hover:bg-secondary"
                            data-aos="fade-up"
                            data-aos-duration="1000"
                        >
                            <div className="flex-1">
                                <div className="pb-2.5 text-4xl font-black leading-none transition group-hover:text-black">
                                    <CountUp start={0} end={10} duration={4} suffix="+"></CountUp>
                                </div>
                                <span className="font-semibold text-white transition group-hover:text-black">Vibrant Clubs</span>
                            </div>
                            <div className="shrink-0 text-[#47BDFF] group-hover:text-black">
                                <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clipPath="url(#clip0_132_8975)">
                                        <path
                                            opacity="0.3"
                                            d="M9.26504 23.1907C8.86698 22.5979 9.34237 21.8701 10.0565 21.8701H15.3123C16.0264 21.8701 16.5018 22.5979 16.1037 23.1907C15.3466 24.3185 14.3 25.2316 13.0656 25.8283C12.8248 25.9448 12.544 25.9448 12.3032 25.8283C11.0688 25.2316 10.0222 24.3185 9.26504 23.1907Z"
                                            fill="currentcolor"
                                        />
                                        <path
                                            d="M19.7602 15.3657C19.7602 15.6093 19.8491 15.8444 20.0102 16.0271L21.8688 18.1348C22.0299 18.3175 22.1188 18.5527 22.1188 18.7962V19.6908C22.1188 20.2431 21.6711 20.6908 21.1188 20.6908H4.25C3.69772 20.6908 3.25 20.2431 3.25 19.6908V18.7962C3.25 18.5527 3.33888 18.3175 3.49997 18.1348L5.35863 16.0271C5.51971 15.8444 5.6086 15.6093 5.6086 15.3657V8.89781C5.6086 4.89015 8.41975 1.46516 12.3859 0.0983C12.5792 0.0316815 12.7896 0.0316814 12.9829 0.0982998C16.949 1.46516 19.7602 4.89015 19.7602 8.89781V15.3657ZM12.6844 11.2564C13.3099 11.2564 13.9098 11.0079 14.3522 10.5656C14.7945 10.1233 15.043 9.52335 15.043 8.89781C15.043 8.27227 14.7945 7.67235 14.3522 7.23003C13.9098 6.78771 13.3099 6.53921 12.6844 6.53921C12.0589 6.53921 11.4589 6.78771 11.0166 7.23003C10.5743 7.67235 10.3258 8.27227 10.3258 8.89781C10.3258 9.52335 10.5743 10.1233 11.0166 10.5656C11.4589 11.0079 12.0589 11.2564 12.6844 11.2564Z"
                                            fill="currentcolor"
                                        />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_132_8975">
                                            <rect width="26" height="26" fill="currentcolor" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </div>
                        </div>

                        <div
                            className="group flex cursor-pointer items-center gap-4 rounded-3xl bg-gray-dark py-10 px-6 transition duration-500 hover:bg-secondary"
                            data-aos="fade-up"
                            data-aos-duration="1000"
                        >
                            <div className="flex-1">
                                <div className="pb-2.5 text-4xl font-black leading-none transition group-hover:text-black">
                                    <CountUp start={0} end={50} duration={4} suffix="+"></CountUp>
                                </div>
                                <span className="font-bold text-white transition group-hover:text-black">Club Partners</span>
                            </div>
                            <div className="shrink-0 text-[#47BDFF] group-hover:text-black">
                                <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clipPath="url(#clip0_132_8984)">
                                        <path
                                            opacity="0.3"
                                            d="M4.2757 15.6076C4.27493 15.6076 4.27425 15.6081 4.27403 15.6089C4.06737 16.3063 3.94528 17.026 3.9104 17.7526L3.9 18.1998V24.9998C3.9 25.5521 3.45228 25.9998 2.9 25.9998H1C0.447715 25.9998 1.18712e-07 25.5521 1.18712e-07 24.9998V20.1498C-0.000255849 19.0287 0.413437 17.9469 1.16173 17.112C1.91001 16.2771 2.94021 15.7479 4.0547 15.6258L4.2757 15.6076ZM22.0225 17.0045C21.9324 16.3159 22.4694 15.6611 23.1157 15.9154C23.7351 16.1593 24.299 16.5382 24.7632 17.0314C25.5575 17.8755 25.9998 18.9908 26 20.1498V24.9998C26 25.5521 25.5523 25.9998 25 25.9998H23.1C22.5477 25.9998 22.1 25.5521 22.1 24.9998V18.1998C22.1 17.7945 22.0737 17.3956 22.0225 17.0045ZM4.55 7.7998C5.41195 7.7998 6.2386 8.14221 6.8481 8.75171C7.45759 9.3612 7.8 10.1879 7.8 11.0498C7.8 11.9118 7.45759 12.7384 6.8481 13.3479C6.2386 13.9574 5.41195 14.2998 4.55 14.2998C3.68805 14.2998 2.8614 13.9574 2.2519 13.3479C1.64241 12.7384 1.3 11.9118 1.3 11.0498C1.3 10.1879 1.64241 9.3612 2.2519 8.75171C2.8614 8.14221 3.68805 7.7998 4.55 7.7998ZM21.45 7.7998C22.312 7.7998 23.1386 8.14221 23.7481 8.75171C24.3576 9.3612 24.7 10.1879 24.7 11.0498C24.7 11.9118 24.3576 12.7384 23.7481 13.3479C23.1386 13.9574 22.312 14.2998 21.45 14.2998C20.588 14.2998 19.7614 13.9574 19.1519 13.3479C18.5424 12.7384 18.2 11.9118 18.2 11.0498C18.2 10.1879 18.5424 9.3612 19.1519 8.75171C19.7614 8.14221 20.588 7.7998 21.45 7.7998Z"
                                            fill="currentcolor"
                                        />
                                        <path
                                            d="M13 11.7C14.7239 11.7 16.3772 12.3848 17.5962 13.6038C18.8152 14.8228 19.5 16.4761 19.5 18.2V25C19.5 25.5523 19.0523 26 18.5 26H7.5C6.94772 26 6.5 25.5523 6.5 25V18.2C6.5 16.4761 7.18482 14.8228 8.40381 13.6038C9.62279 12.3848 11.2761 11.7 13 11.7ZM13 0C14.3791 0 15.7018 0.547856 16.677 1.52304C17.6521 2.49823 18.2 3.82087 18.2 5.2C18.2 6.57913 17.6521 7.90177 16.677 8.87696C15.7018 9.85214 14.3791 10.4 13 10.4C11.6209 10.4 10.2982 9.85214 9.32304 8.87696C8.34786 7.90177 7.8 6.57913 7.8 5.2C7.8 3.82087 8.34786 2.49823 9.32304 1.52304C10.2982 0.547856 11.6209 0 13 0Z"
                                            fill="currentcolor"
                                        />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_132_8984">
                                            <rect width="26" height="26" fill="currentcolor" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </div>
                        </div>

                        <div
                            className="group flex cursor-pointer items-center gap-4 rounded-3xl bg-gray-dark py-10 px-6 transition duration-500 hover:bg-secondary"
                            data-aos="fade-up"
                            data-aos-duration="1000"
                        >
                            <div className="flex-1">
                                <div className="pb-2.5 text-4xl font-black leading-none transition group-hover:text-black">
                                    <CountUp start={0} end={9000} duration={4} suffix="+"></CountUp>
                                </div>
                                <span className="font-bold text-white transition group-hover:text-black">Happy Members</span>
                            </div>
                            <div className="shrink-0 text-[#47BDFF] group-hover:text-black">
                                <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clipPath="url(#clip0_132_8993)">
                                        <path opacity="0.3" d="M13 26C5.8201 26 0 20.1799 0 13C0 5.8201 5.8201 0 13 0C20.1799 0 26 5.8201 26 13C26 20.1799 20.1799 26 13 26Z" fill="currentcolor" />
                                        <path
                                            d="M6.49961 14.2998C6.49961 16.0237 7.18443 17.677 8.40342 18.896C9.6224 20.115 11.2757 20.7998 12.9996 20.7998C14.7235 20.7998 16.3768 20.115 17.5958 18.896C18.8148 17.677 19.4996 16.0237 19.4996 14.2998H16.8996C16.8996 15.3341 16.4887 16.3261 15.7573 17.0575C15.0259 17.7889 14.034 18.1998 12.9996 18.1998C11.9653 18.1998 10.9733 17.7889 10.2419 17.0575C9.5105 16.3261 9.09961 15.3341 9.09961 14.2998H6.49961ZM7.79961 11.6998C8.31678 11.6998 8.81277 11.4944 9.17847 11.1287C9.54416 10.763 9.74961 10.267 9.74961 9.7498C9.74961 9.23263 9.54416 8.73664 9.17847 8.37095C8.81277 8.00525 8.31678 7.7998 7.79961 7.7998C7.28244 7.7998 6.78645 8.00525 6.42075 8.37095C6.05505 8.73664 5.84961 9.23263 5.84961 9.7498C5.84961 10.267 6.05505 10.763 6.42075 11.1287C6.78645 11.4944 7.28244 11.6998 7.79961 11.6998ZM18.1996 11.6998C18.7168 11.6998 19.2128 11.4944 19.5785 11.1287C19.9442 10.763 20.1496 10.267 20.1496 9.7498C20.1496 9.23263 19.9442 8.73664 19.5785 8.37095C19.2128 8.00525 18.7168 7.7998 18.1996 7.7998C17.6824 7.7998 17.1864 8.00525 16.8208 8.37095C16.4551 8.73664 16.2496 9.23263 16.2496 9.7498C16.2496 10.267 16.4551 10.763 16.8208 11.1287C17.1864 11.4944 17.6824 11.6998 18.1996 11.6998Z"
                                            fill="currentcolor"
                                        />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_132_8993">
                                            <rect width="26" height="26" fill="currentcolor" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </div>
                        </div>

                        <div
                            className="group flex cursor-pointer items-center gap-4 rounded-3xl bg-gray-dark py-10 px-6 transition duration-500 hover:bg-secondary"
                            data-aos="fade-up"
                            data-aos-duration="1000"
                        >
                            <div className="flex-1">
                                <div className="pb-2.5 text-4xl font-black leading-none transition group-hover:text-black">
                                    <CountUp start={0} end={350} duration={4} suffix="+"></CountUp>
                                </div>
                                <span className="font-bold text-white transition group-hover:text-black">Project Done</span>
                            </div>
                            <div className="shrink-0 text-[#47BDFF] group-hover:text-black">
                                <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clipPath="url(#clip0_132_9002)">
                                        <path
                                            d="M1.31194 8.73486H24.6881C24.8695 8.73478 25.049 8.77235 25.2151 8.84519C25.3813 8.91803 25.5305 9.02456 25.6534 9.15805C25.7763 9.29153 25.8702 9.44906 25.929 9.62067C25.9879 9.79229 26.0105 9.97425 25.9955 10.1551L24.9018 23.2686C24.8745 23.5962 24.7251 23.9017 24.4832 24.1244C24.2413 24.3472 23.9245 24.4709 23.5957 24.4711H2.40429C2.07547 24.4709 1.75871 24.3472 1.5168 24.1244C1.27489 23.9017 1.12548 23.5962 1.09819 23.2686L0.00452488 10.1551C-0.010534 9.97425 0.0120899 9.79229 0.0709658 9.62067C0.129842 9.44906 0.223688 9.29153 0.346571 9.15805C0.469454 9.02456 0.618698 8.91803 0.784866 8.84519C0.951034 8.77235 1.13051 8.73478 1.31194 8.73486Z"
                                            fill="currentcolor"
                                        />
                                        <path
                                            opacity="0.3"
                                            d="M14.5617 3.1965C14.7493 3.38404 15.0036 3.4894 15.2689 3.4894H23.4912C23.839 3.4894 24.1725 3.62756 24.4185 3.87348C24.6644 4.11941 24.8025 4.45296 24.8025 4.80075V5.1121C24.8025 5.66438 24.3548 6.1121 23.8025 6.1121H2.19824C1.64596 6.1121 1.19824 5.66438 1.19824 5.1121V2.17805C1.19824 1.83026 1.3364 1.49671 1.58233 1.25078C1.82825 1.00486 2.1618 0.866699 2.50959 0.866699H11.8177C12.0829 0.866699 12.3373 0.972056 12.5248 1.15959L14.5617 3.1965Z"
                                            fill="currentcolor"
                                        />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_132_9002">
                                            <rect width="26" height="26" fill="currentcolor" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="overflow-hidden py-10 lg:py-20">
                <div className="container">
                    <div className="flex flex-col items-center gap-[30px] lg:flex-row">
                        <div className="w-full max-w-[484px]">
                            <img src="/assets/images/marketing/work-img.png" className="rtl:rotate-y-180" alt="" />
                        </div>
                        <div>
                            <div className="mb-6 flex items-center gap-2.5">
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0 0H20V20H0V0Z" fill="#47BDFF" />
                                </svg>
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="10" cy="10" r="6.5" stroke="#B476E5" strokeWidth="7" />
                                </svg>
                            </div>
                            <div className="heading mb-0 text-center ltr:sm:text-left rtl:sm:text-right">
                                <h6 className="!text-secondary">How it works</h6>
                                <h4>A Simple, yet effective three step process.</h4>
                            </div>
                            <div className="mt-12 grid grid-cols-3 space-y-7 text-center">
                                <div className="col-span-3 flex">
                                    <div>
                                        <h2 className="text-[70px] font-black leading-[57px] text-secondary">1</h2>
                                        <p className="mt-1 text-2xl font-bold">Join a Club</p>
                                    </div>
                                </div>
                                <div className="col-span-3">
                                    <h2 className="text-[70px] font-black leading-[57px] text-primary">2</h2>
                                    <p className="mt-1 text-2xl font-bold">Club Activities</p>
                                </div>
                                <div className="col-span-3 flex justify-end">
                                    <div className="relative">
                                        <span className="absolute inset-x-0 -top-12">
                                            <img src="/assets/images/marketing/shadow-box.svg" alt="" />
                                        </span>
                                        <h2 className="text-[70px] font-black leading-[57px] text-secondary">3</h2>
                                        <p className="mt-1 text-2xl font-bold">Growth & Scale</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-gradient-to-t from-transparent to-white/[55%] pt-10 dark:bg-gradient-to-b dark:from-white/5 dark:to-transparent lg:py-20">
                <div className="container">
                    <div className="flex flex-col items-center gap-12 lg:flex-row lg:gap-28">
                        <div className="order-2 lg:order-1">
                            <div className="heading mb-0 text-center ltr:sm:text-left rtl:sm:text-right">
                                <h6 className="!text-secondary">Our club community</h6>
                                <h4>Students who achieved pro results</h4>
                            </div>
                            <p className="mt-[18px] text-lg font-semibold">We admire that students to pro level which is highly impacts on career growth and marketing strength.</p>
                            <div className="text-black">
                                <div className="mt-14 flex items-center gap-4">
                                    <div className="text-primary">
                                        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M15 2.5C12.5277 2.5 10.111 3.23311 8.05538 4.60663C5.99976 5.98015 4.39761 7.93238 3.45151 10.2165C2.50542 12.5005 2.25787 15.0139 2.74019 17.4386C3.2225 19.8634 4.41301 22.0907 6.16117 23.8388C7.90933 25.587 10.1366 26.7775 12.5614 27.2598C14.9861 27.7421 17.4995 27.4946 19.7836 26.5485C22.0676 25.6024 24.0199 24.0002 25.3934 21.9446C26.7669 19.889 27.5 17.4723 27.5 15C27.5 13.3585 27.1767 11.733 26.5485 10.2165C25.9203 8.69989 24.9996 7.3219 23.8388 6.16117C22.6781 5.00043 21.3001 4.07969 19.7836 3.45151C18.267 2.82332 16.6415 2.5 15 2.5ZM20.8875 12.1375L13.3875 19.6375C13.2713 19.7547 13.1331 19.8477 12.9807 19.9111C12.8284 19.9746 12.665 20.0072 12.5 20.0072C12.335 20.0072 12.1716 19.9746 12.0193 19.9111C11.867 19.8477 11.7287 19.7547 11.6125 19.6375L9.11251 17.1375C8.99596 17.021 8.90351 16.8826 8.84043 16.7303C8.77736 16.578 8.74489 16.4148 8.74489 16.25C8.74489 16.0852 8.77736 15.922 8.84043 15.7697C8.90351 15.6174 8.99596 15.479 9.11251 15.3625C9.22905 15.246 9.36742 15.1535 9.51969 15.0904C9.67197 15.0273 9.83518 14.9949 10 14.9949C10.1648 14.9949 10.328 15.0273 10.4803 15.0904C10.6326 15.1535 10.771 15.246 10.8875 15.3625L12.5 16.9875L19.1125 10.3625C19.3479 10.1271 19.6671 9.99489 20 9.99489C20.3329 9.99489 20.6521 10.1271 20.8875 10.3625C21.1229 10.5979 21.2551 10.9171 21.2551 11.25C21.2551 11.5829 21.1229 11.9021 20.8875 12.1375Z"
                                                fill="currentcolor"
                                            />
                                        </svg>
                                    </div>
                                    <div>
                                        <h5 className="text-lg font-semibold dark:text-white">Participate in Club Activities</h5>
                                    </div>
                                </div>
                                <div className="mt-6 flex items-center gap-4">
                                    <div className="text-primary">
                                        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M15 2.5C12.5277 2.5 10.111 3.23311 8.05538 4.60663C5.99976 5.98015 4.39761 7.93238 3.45151 10.2165C2.50542 12.5005 2.25787 15.0139 2.74019 17.4386C3.2225 19.8634 4.41301 22.0907 6.16117 23.8388C7.90933 25.587 10.1366 26.7775 12.5614 27.2598C14.9861 27.7421 17.4995 27.4946 19.7836 26.5485C22.0676 25.6024 24.0199 24.0002 25.3934 21.9446C26.7669 19.889 27.5 17.4723 27.5 15C27.5 13.3585 27.1767 11.733 26.5485 10.2165C25.9203 8.69989 24.9996 7.3219 23.8388 6.16117C22.6781 5.00043 21.3001 4.07969 19.7836 3.45151C18.267 2.82332 16.6415 2.5 15 2.5ZM20.8875 12.1375L13.3875 19.6375C13.2713 19.7547 13.1331 19.8477 12.9807 19.9111C12.8284 19.9746 12.665 20.0072 12.5 20.0072C12.335 20.0072 12.1716 19.9746 12.0193 19.9111C11.867 19.8477 11.7287 19.7547 11.6125 19.6375L9.11251 17.1375C8.99596 17.021 8.90351 16.8826 8.84043 16.7303C8.77736 16.578 8.74489 16.4148 8.74489 16.25C8.74489 16.0852 8.77736 15.922 8.84043 15.7697C8.90351 15.6174 8.99596 15.479 9.11251 15.3625C9.22905 15.246 9.36742 15.1535 9.51969 15.0904C9.67197 15.0273 9.83518 14.9949 10 14.9949C10.1648 14.9949 10.328 15.0273 10.4803 15.0904C10.6326 15.1535 10.771 15.246 10.8875 15.3625L12.5 16.9875L19.1125 10.3625C19.3479 10.1271 19.6671 9.99489 20 9.99489C20.3329 9.99489 20.6521 10.1271 20.8875 10.3625C21.1229 10.5979 21.2551 10.9171 21.2551 11.25C21.2551 11.5829 21.1229 11.9021 20.8875 12.1375Z"
                                                fill="currentcolor"
                                            />
                                        </svg>
                                    </div>
                                    <div>
                                        <h5 className="text-lg font-semibold dark:text-white">Organize Club Activities</h5>
                                    </div>
                                </div>
                                <div className="mt-6 flex items-center gap-4">
                                    <div className="text-primary">
                                        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M15 2.5C12.5277 2.5 10.111 3.23311 8.05538 4.60663C5.99976 5.98015 4.39761 7.93238 3.45151 10.2165C2.50542 12.5005 2.25787 15.0139 2.74019 17.4386C3.2225 19.8634 4.41301 22.0907 6.16117 23.8388C7.90933 25.587 10.1366 26.7775 12.5614 27.2598C14.9861 27.7421 17.4995 27.4946 19.7836 26.5485C22.0676 25.6024 24.0199 24.0002 25.3934 21.9446C26.7669 19.889 27.5 17.4723 27.5 15C27.5 13.3585 27.1767 11.733 26.5485 10.2165C25.9203 8.69989 24.9996 7.3219 23.8388 6.16117C22.6781 5.00043 21.3001 4.07969 19.7836 3.45151C18.267 2.82332 16.6415 2.5 15 2.5ZM20.8875 12.1375L13.3875 19.6375C13.2713 19.7547 13.1331 19.8477 12.9807 19.9111C12.8284 19.9746 12.665 20.0072 12.5 20.0072C12.335 20.0072 12.1716 19.9746 12.0193 19.9111C11.867 19.8477 11.7287 19.7547 11.6125 19.6375L9.11251 17.1375C8.99596 17.021 8.90351 16.8826 8.84043 16.7303C8.77736 16.578 8.74489 16.4148 8.74489 16.25C8.74489 16.0852 8.77736 15.922 8.84043 15.7697C8.90351 15.6174 8.99596 15.479 9.11251 15.3625C9.22905 15.246 9.36742 15.1535 9.51969 15.0904C9.67197 15.0273 9.83518 14.9949 10 14.9949C10.1648 14.9949 10.328 15.0273 10.4803 15.0904C10.6326 15.1535 10.771 15.246 10.8875 15.3625L12.5 16.9875L19.1125 10.3625C19.3479 10.1271 19.6671 9.99489 20 9.99489C20.3329 9.99489 20.6521 10.1271 20.8875 10.3625C21.1229 10.5979 21.2551 10.9171 21.2551 11.25C21.2551 11.5829 21.1229 11.9021 20.8875 12.1375Z"
                                                fill="currentcolor"
                                            />
                                        </svg>
                                    </div>
                                    <div>
                                        <h5 className="text-lg font-semibold dark:text-white">Apply experience in real world</h5>
                                    </div>
                                </div>
                            </div>
                            <button type="button" className="btn mt-10 bg-secondary py-5 px-[50px] text-white hover:bg-primary">
                                Know more
                            </button>
                        </div>
                        <div className="order-1 w-full max-w-[560px] lg:order-2">
                            <img src="/assets/images/marketing/marketing3.png" className="rtl:rotate-y-180" alt="" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-gradient-to-b from-transparent to-white/[55%] py-10 dark:bg-gradient-to-t dark:from-white/5 dark:to-transparent lg:py-20">
                <div className="container">
                    <div className="heading text-center">
                        <h6 className="!text-secondary">Our core values</h6>
                        <h4>The principles guiding our university clubs</h4>
                    </div>
                    <div className="grid grid-cols-1 justify-between gap-7 ltr:text-right rtl:text-left md:grid-cols-2" data-aos="fade-up" data-aos-duration="1000">
                        <div className="group flex gap-6 rounded-[32px] border-2 border-white/[0.1] bg-white py-10 px-6 duration-200 hover:border-secondary hover:bg-secondary/20 dark:bg-transparent dark:bg-gradient-to-b dark:from-white/5 dark:to-transparent">
                            <div className="flex-1">
                                <h3 className="text-2xl font-extrabold text-primary">Leadership</h3>
                                <p className="mt-4 text-lg font-semibold">
                                    We foster leadership skills, empowering students to take initiative and guide their peers towards shared goals and visions.
                                </p>
                            </div>
                            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[rgba(71,189,255,0.06)] text-[#47BDFF]">
                                <svg width="34" height="36" viewBox="0 0 34 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M33.6822 11.1466L31.4947 7.35783C31.2046 6.85537 30.7268 6.48878 30.1665 6.33863C29.606 6.18848 29.009 6.26709 28.5066 6.55717L26.9578 7.45191C25.4683 6.11519 23.7148 5.10614 21.8106 4.49V2.6875C21.8106 2.10734 21.5801 1.55091 21.1699 1.14071C20.7597 0.73044 20.2033 0.5 19.6231 0.5H15.2481C14.668 0.5 14.1115 0.73044 13.7013 1.14071C13.2911 1.55091 13.0606 2.10734 13.0606 2.6875V4.48342C11.1508 5.09487 9.3932 6.10602 7.90472 7.44967L6.36031 6.55717C5.85869 6.26989 5.26376 6.19282 4.70544 6.34283C4.14719 6.49284 3.67098 6.85775 3.38097 7.35783L1.19347 11.1466C0.903388 11.649 0.824779 12.2461 0.974929 12.8064C1.12508 13.3668 1.49167 13.8446 1.99406 14.1347L3.55156 15.0359C3.13149 16.9919 3.13149 19.0147 3.55156 20.9706L1.99406 21.8697C1.49167 22.1597 1.12508 22.6376 0.974929 23.1979C0.824779 23.7583 0.903388 24.3554 1.19347 24.8578L3.38097 28.6466C3.67105 29.149 4.1488 29.5156 4.70922 29.6657C5.26957 29.8159 5.86667 29.7372 6.36906 29.4472L7.91781 28.5525C9.40734 29.892 11.1628 30.902 13.0694 31.5166V33.3125C13.0694 33.8927 13.2998 34.4491 13.7101 34.8593C14.1203 35.2696 14.6767 35.5 15.2569 35.5H19.6319C20.212 35.5 20.7684 35.2696 21.1787 34.8593C21.5889 34.4491 21.8194 33.8927 21.8194 33.3125V31.5187C23.7277 30.9067 25.4844 29.8964 26.9731 28.5547L28.5153 29.4472C29.0178 29.7372 29.6148 29.8159 30.1752 29.6657C30.7356 29.5156 31.2133 29.149 31.5035 28.6466L33.691 24.8578C33.981 24.3554 34.0596 23.7583 33.9094 23.1979C33.7594 22.6376 33.3927 22.1597 32.8903 21.8697L31.335 20.9728C31.7562 19.0155 31.7562 16.991 31.335 15.0338L32.8903 14.1347C33.3912 13.8431 33.756 13.3647 33.9045 12.8045C34.0529 12.2442 33.973 11.6479 33.6822 11.1466ZM17.4356 25.6562C15.9214 25.6562 14.4411 25.2072 13.182 24.3659C11.923 23.5247 10.9417 22.3289 10.3622 20.9299C9.78268 19.5309 9.63106 17.9915 9.92646 16.5063C10.2219 15.0211 10.9511 13.657 12.0218 12.5862C13.0926 11.5155 14.4568 10.7863 15.942 10.4909C17.4272 10.1954 18.9665 10.347 20.3656 10.9266C21.7646 11.506 22.9603 12.4874 23.8016 13.7464C24.6428 15.0055 25.0919 16.4858 25.0919 18C25.0919 20.0306 24.2852 21.978 22.8494 23.4138C21.4136 24.8496 19.4662 25.6562 17.4356 25.6562Z"
                                        fill="currentcolor"
                                    />
                                </svg>
                            </div>
                        </div>
                        <div className="group flex gap-6 rounded-[32px] border-2 border-white/[0.1] bg-white py-10 px-6 duration-200 hover:border-secondary hover:bg-secondary/20 dark:bg-transparent dark:bg-gradient-to-b dark:from-white/5 dark:to-transparent">
                            <div className="flex-1">
                                <h3 className="text-2xl font-extrabold text-secondary">Inclusivity</h3>
                                <p className="mt-4 text-lg font-semibold">
                                    We embrace diversity and create an inclusive environment where all students feel welcome, valued, and respected regardless of their background.
                                </p>
                            </div>
                            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[rgba(180,118,229,0.06)] text-[#B476E5]">
                                <svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M16.8133 0.821289C13.6502 0.821289 10.5582 1.75924 7.92817 3.51658C5.29817 5.27392 3.2483 7.77167 2.03784 10.694C0.827388 13.6163 0.51066 16.8319 1.12771 19.9343C1.74483 23.0365 3.26798 25.8862 5.50469 28.1228C7.74133 30.3596 10.591 31.8827 13.6933 32.4998C16.7956 33.1169 20.0112 32.8001 22.9335 31.5897C25.8559 30.3792 28.3536 28.3294 30.111 25.6994C31.8683 23.0694 32.8062 19.9773 32.8062 16.8142C32.8013 12.5741 31.1147 8.50915 28.1166 5.51096C25.1184 2.51278 21.0534 0.826226 16.8133 0.821289ZM26.0453 11.7498L16.9226 24.1296C16.8149 24.2725 16.6798 24.3925 16.5253 24.4827C16.3707 24.5728 16.1997 24.6312 16.0222 24.6545C15.8449 24.6778 15.6646 24.6656 15.4919 24.6185C15.3193 24.5714 15.1578 24.4904 15.0168 24.3802L8.50238 19.1718C8.36568 19.0624 8.25185 18.9272 8.16744 18.7738C8.08302 18.6204 8.02962 18.4519 8.01036 18.278C7.97135 17.9265 8.07356 17.5741 8.29448 17.2979C8.51539 17.0219 8.83691 16.8449 9.18834 16.8059C9.36232 16.7867 9.53844 16.8018 9.70658 16.8506C9.87471 16.8993 10.0316 16.9807 10.1683 17.09L15.6005 21.4361L23.8995 10.1731C23.9994 10.0232 24.1287 9.89511 24.2795 9.79658C24.4303 9.69798 24.5996 9.63101 24.777 9.59972C24.9544 9.56843 25.1363 9.57344 25.3118 9.6144C25.4873 9.65542 25.6525 9.73156 25.7977 9.83823C25.9429 9.94489 26.065 10.0799 26.1565 10.2351C26.248 10.3903 26.3071 10.5624 26.3303 10.7411C26.3535 10.9198 26.3401 11.1012 26.2911 11.2746C26.2421 11.448 26.1585 11.6096 26.0453 11.7498Z"
                                        fill="currentcolor"
                                    />
                                </svg>
                            </div>
                        </div>
                        <div className="group flex gap-6 rounded-[32px] border-2 border-white/[0.1] bg-white py-10 px-6 duration-200 hover:border-secondary hover:bg-secondary/20 dark:bg-transparent dark:bg-gradient-to-b dark:from-white/5 dark:to-transparent">
                            <div className="flex-1">
                                <h3 className="text-2xl font-extrabold text-secondary">Innovation</h3>
                                <p className="mt-4 text-lg font-semibold">
                                    We encourage creative thinking and innovative approaches to club activities, events, and problem-solving within our university community.
                                </p>
                            </div>
                            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[rgba(180,118,229,0.06)] text-[#B476E5]">
                                <svg width="39" height="23" viewBox="0 0 39 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M2.41997 22.2C3.0107 22.2012 3.57945 21.9763 4.00967 21.5715L14.2216 11.993C14.3677 11.8547 14.5621 11.779 14.7633 11.782C14.9645 11.785 15.1565 11.8665 15.2985 12.0091L18.7335 15.4457C19.767 16.4323 21.1408 16.9828 22.5696 16.9828C23.9984 16.9828 25.3722 16.4323 26.4057 15.4457L32.1553 9.69598C32.1912 9.66 32.2338 9.63151 32.2807 9.61205C32.3275 9.59252 32.3779 9.58251 32.4286 9.58251C32.4794 9.58251 32.5297 9.59252 32.5765 9.61205C32.6234 9.63151 32.6661 9.66 32.7019 9.69598L35.4248 12.4093C35.7156 12.6987 36.1092 12.8611 36.5195 12.861C36.9305 12.8605 37.3245 12.6972 37.6153 12.4067C37.9061 12.1163 38.0698 11.7224 38.0706 11.3114V2.04953C38.0702 1.63842 37.9066 1.24432 37.6158 0.953751C37.3249 0.663251 36.9306 0.500012 36.5195 0.500012H27.2206C26.9128 0.498822 26.6116 0.589332 26.3554 0.760062C26.0992 0.930722 25.8997 1.17383 25.7823 1.45838C25.6649 1.74293 25.6348 2.05597 25.696 2.35767C25.7573 2.65937 25.9069 2.93601 26.126 3.15224L28.8586 5.88483C28.9314 5.95777 28.9724 6.05661 28.9727 6.15972C28.9729 6.21054 28.9629 6.26094 28.9433 6.30784C28.9237 6.35481 28.8949 6.3973 28.8586 6.43293L23.1169 12.1762C22.971 12.3205 22.774 12.4015 22.5688 12.4015C22.3635 12.4015 22.1666 12.3205 22.0207 12.1762L18.584 8.73957C17.593 7.73857 16.2499 7.16443 14.8415 7.13986C13.4331 7.11522 12.0707 7.64197 11.0453 8.60776L0.830203 18.1783C0.491543 18.4975 0.256413 18.911 0.155263 19.3652C0.054043 19.8195 0.0914927 20.2937 0.262713 20.7265C0.433933 21.1593 0.731013 21.5307 1.11559 21.7928C1.50017 22.055 1.95454 22.1957 2.41997 22.1968V22.2Z"
                                        fill="currentcolor"
                                    />
                                </svg>
                            </div>
                        </div>
                        <div className="group flex gap-6 rounded-[32px] border-2 border-white/[0.1] bg-white py-10 px-6 duration-200 hover:border-secondary hover:bg-secondary/20 dark:bg-transparent dark:bg-gradient-to-b dark:from-white/5 dark:to-transparent">
                            <div className="flex-1">
                                <h3 className="text-2xl font-extrabold text-primary">Collaboration</h3>
                                <p className="mt-4 text-lg font-semibold">
                                    We promote teamwork and collaboration among club members, fostering a sense of community and shared purpose within our university.
                                </p>
                            </div>
                            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[rgba(71,189,255,0.06)] text-[#47BDFF]">
                                <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M41.7656 39.9469C41.7656 40.1702 41.8543 40.3843 42.0122 40.5421C42.17 40.7 42.3842 40.7887 42.6074 40.7887H47.3563C47.4942 40.7885 47.6299 40.7547 47.7516 40.6898C47.8732 40.6249 47.9772 40.5313 48.0541 40.4169C48.1311 40.3025 48.1788 40.171 48.193 40.0339C48.2073 39.8967 48.1876 39.7582 48.1357 39.6305C47.6363 38.3821 46.81 37.2913 45.7437 36.4723C44.6774 35.6533 43.4103 35.1364 42.0754 34.9758C41.9358 34.9589 41.7941 34.9773 41.6634 35.0293C41.5328 35.0813 41.4172 35.1652 41.3273 35.2734C41.2374 35.3815 41.176 35.5105 41.1488 35.6485C41.1216 35.7865 41.1293 35.9291 41.1714 36.0633C41.5654 37.3202 41.7657 38.6297 41.7656 39.9469Z"
                                        fill="currentcolor"
                                    />
                                    <path
                                        d="M16.2911 35.9898C16.3316 35.8638 16.3418 35.7299 16.3208 35.5991C16.2999 35.4683 16.2483 35.3443 16.1704 35.2372C16.0925 35.13 15.9904 35.0428 15.8724 34.9826C15.7544 34.9224 15.6239 34.8908 15.4914 34.8906H15.4712C13.9632 34.8913 12.4899 35.3432 11.2408 36.1879C9.99161 37.0327 9.02365 38.2318 8.46148 39.631C8.40989 39.7588 8.39057 39.8974 8.40506 40.0344C8.41955 40.1714 8.46743 40.3028 8.54457 40.417C8.62171 40.5312 8.72566 40.6247 8.84739 40.6894C8.96905 40.754 9.10478 40.7877 9.24254 40.7876H14.8316C15.0548 40.7876 15.2688 40.6989 15.4267 40.5411C15.5845 40.3832 15.6732 40.1691 15.6732 39.9459C15.6726 38.6031 15.8811 37.2685 16.2911 35.9898Z"
                                        fill="currentcolor"
                                    />
                                    <path
                                        d="M24.6457 29.5232C24.7113 29.5634 24.7645 29.6207 24.7997 29.689C24.835 29.7573 24.8509 29.8339 24.8457 29.9105C24.8405 29.9872 24.8144 30.061 24.7703 30.1239C24.7261 30.1867 24.6655 30.2364 24.5952 30.2673C22.6983 31.0772 21.081 32.4262 19.9438 34.147C18.8066 35.8676 18.1996 37.8844 18.1982 39.947C18.1982 40.1702 18.2869 40.3843 18.4448 40.5421C18.6026 40.7 18.8167 40.7886 19.0399 40.7886H38.3993C38.6225 40.7886 38.8366 40.7 38.9945 40.5421C39.1523 40.3843 39.241 40.1702 39.241 39.947C39.2375 37.8813 38.6266 35.8623 37.4844 34.1412C36.3422 32.4201 34.7191 31.0729 32.817 30.2673C32.7459 30.2364 32.6847 30.1866 32.64 30.1232C32.5953 30.0599 32.5689 29.9855 32.5637 29.9081C32.5585 29.8308 32.5746 29.7534 32.6104 29.6847C32.6462 29.6159 32.7002 29.5583 32.7666 29.5182C34.268 28.6264 35.4349 27.2659 36.0877 25.6462C36.7405 24.0264 36.843 22.237 36.3796 20.5533C35.9161 18.8695 34.9122 17.3847 33.5225 16.3272C32.1327 15.2697 30.434 14.698 28.6877 14.7002C26.9414 14.7024 25.2441 15.2783 23.857 16.3393C22.4699 17.4002 21.4698 18.8875 21.0105 20.5724C20.5512 22.2573 20.6582 24.0464 21.315 25.6645C21.9718 27.2826 23.1421 28.6401 24.6457 29.5282V29.5232ZM24.0902 22.67C24.0902 22.3517 24.1258 22.0344 24.1963 21.7239C24.2255 21.594 24.2852 21.4728 24.3703 21.3705C24.4555 21.2681 24.5637 21.1874 24.6861 21.135C24.8086 21.0825 24.9416 21.0599 25.0745 21.0689C25.2073 21.078 25.3362 21.1184 25.4504 21.1869C27.064 22.1583 28.9119 22.6711 30.7952 22.67C31.2877 22.6696 31.7795 22.633 32.2666 22.5606C32.3981 22.5409 32.5324 22.5527 32.6585 22.5949C32.7846 22.6372 32.8989 22.7086 32.992 22.8036C33.0852 22.8985 33.1545 23.0142 33.1943 23.1411C33.2341 23.2679 33.2433 23.4025 33.2211 23.5336C33.0071 24.6607 32.3802 25.6675 31.463 26.3567C30.5459 27.0459 29.4045 27.368 28.2624 27.26C27.1202 27.152 26.0595 26.6216 25.2878 25.7727C24.5161 24.9236 24.089 23.8173 24.0902 22.67Z"
                                        fill="currentcolor"
                                    />
                                    <path
                                        d="M41.1266 33.2135C42.0932 33.2194 43.0377 32.9244 43.8292 32.3695C44.6206 31.8146 45.2198 31.0272 45.5438 30.1164C45.8677 29.2057 45.9003 28.2168 45.637 27.2868C45.3737 26.3567 44.8276 25.5315 44.0744 24.9257C43.3211 24.32 42.3981 23.9635 41.4331 23.9058C40.4682 23.8481 39.5093 24.092 38.6893 24.6037C37.8691 25.1154 37.2286 25.8695 36.8564 26.7616C36.4841 27.6537 36.3986 28.6394 36.6117 29.5823C36.848 30.6062 37.4216 31.5209 38.2405 32.1795C39.0594 32.8381 40.0758 33.2023 41.1266 33.2135Z"
                                        fill="currentcolor"
                                    />
                                    <path
                                        d="M15.4712 33.2129C18.0279 33.2129 20.1006 31.1402 20.1006 28.5835C20.1006 26.0267 18.0279 23.9541 15.4712 23.9541C12.9144 23.9541 10.8418 26.0267 10.8418 28.5835C10.8418 31.1402 12.9144 33.2129 15.4712 33.2129Z"
                                        fill="currentcolor"
                                    />
                                    <path
                                        d="M28.2989 28.5546C31.1994 28.5546 33.5508 26.2033 33.5508 23.3027C33.5508 20.4022 31.1994 18.0508 28.2989 18.0508C25.3983 18.0508 23.047 20.4022 23.047 23.3027C23.047 26.2033 25.3983 28.5546 28.2989 28.5546Z"
                                        fill="currentcolor"
                                    />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="overflow-hidden py-12 lg:py-24">
                <div className="container">
                    <div className="heading text-center">
                        <h6 className="!text-secondary">Meet Our Team</h6>
                        <h4>Our experienced core members</h4>
                    </div>
                </div>

                <div className="container relative px-16">
                    <div className="swiper-button-prev2 absolute left-2 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border-2 border-secondary text-secondary duration-200 hover:bg-secondary hover:text-white">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.5892 14.4111L9.41083 15.5895L3.82167 10.0003L9.41083 4.41113L10.5892 5.58947L7.01167 9.16697H15V10.8336H7.01167L10.5892 14.4111Z" fill="currentcolor" />
                        </svg>
                    </div>

                    <div className="swiper-button-next1 absolute right-2 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border-2 border-secondary text-secondary duration-200 hover:bg-secondary hover:text-white">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.41083 14.4111L10.5892 15.5895L16.1783 10.0003L10.5892 4.41113L9.41083 5.58947L12.9883 9.16697H5V10.8336H12.9883L9.41083 14.4111Z" fill="currentcolor" />
                        </svg>
                    </div>

                    <Swiper
                        loop={true}
                        slidesPerView="auto"
                        spaceBetween={30}
                        navigation={{
                            nextEl: '.swiper-button-next1',
                            prevEl: '.swiper-button-prev2',
                        }}
                        modules={[Navigation]}
                        breakpoints={{
                            320: {
                                slidesPerView: 1,
                            },
                            600: {
                                slidesPerView: 2,
                            },
                            1000: {
                                slidesPerView: 3,
                            },
                            1600: {
                                slidesPerView: 4,
                            },
                        }}
                        dir={isRtl ? 'rtl' : 'ltr'}
                        key={isRtl ? 'true' : 'false'}
                    >
                        <SwiperSlide className="relative text-center">
                            <span className="absolute inset-x-0 -top-5">
                                <img src="/assets/images/marketing/team-shadow.svg" className="mx-auto" alt="" />
                            </span>
                            <div className="mx-auto w-48 rounded-full">
                                <img src="/assets/images/alaminxpro.svg" alt="" />
                            </div>
                            <h3 className="mt-2 text-xl font-extrabold text-black dark:text-white">MD. ALAMIN</h3>
                            <p className="mt-2.5 text-sm font-semibold">Founder of AUSTCMS</p>
                        </SwiperSlide>

                        <SwiperSlide className="relative text-center">
                            <span className="absolute inset-x-0 -top-5">
                                <img src="/assets/images/marketing/team-shadow1.svg" className="mx-auto" alt="" />
                            </span>
                            <div className="mx-auto w-48 rounded-full">
                                <img src="/assets/images/jaif.png" alt="" />
                            </div>
                            <h3 className="mt-2 text-xl font-extrabold text-black dark:text-white">Harique Jaif</h3>
                            <p className="mt-2.5 text-sm font-semibold">Head of SEO</p>
                        </SwiperSlide>

                        <SwiperSlide className="relative text-center">
                            <span className="absolute inset-x-0 -top-5">
                                <img src="/assets/images/marketing/team-shadow.svg" className="mx-auto" alt="" />
                            </span>
                            <div className="mx-auto w-48 rounded-full">
                                <img src="/assets/images/yeash.png" alt="" />
                            </div>
                            <h3 className="mt-2 text-xl font-extrabold text-black dark:text-white">Yeash</h3>
                            <p className="mt-2.5 text-sm font-semibold">Head of UI/UX</p>
                        </SwiperSlide>

                        <SwiperSlide className="relative text-center">
                            <div className="SwiperSlide">
                                <span className="absolute inset-x-0 -top-5">
                                    <img src="/assets/images/marketing/team-shadow1.svg" className="mx-auto" alt="" />
                                </span>
                                <div className="mx-auto w-48 rounded-full">
                                    <img src="/assets/images/atik.png" alt="" />
                                </div>
                                <h3 className="mt-2 text-xl font-extrabold text-black dark:text-white">Atikur Rahman</h3>
                                <p className="mt-2.5 text-sm font-semibold">Adjunct Lecturer</p>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </section>

            <section className="bg-gradient-to-t from-transparent to-white/[55%] py-12 dark:bg-gradient-to-b dark:from-white/5 dark:to-transparent lg:py-24">
                <div className="container">
                    <div className="heading mb-0 text-center">
                        <h6>Club Roles</h6>
                        <h4>Be a part of our university club</h4>
                    </div>
                    <div className="mt-14 grid grid-cols-1 justify-between gap-10 sm:grid-cols-2 md:mt-20 lg:grid-cols-3 lg:gap-7" data-aos="fade-up" data-aos-duration="1000">
                        <div className="group relative space-y-6 rounded-[32px] border-2 border-primary bg-white p-7 duration-200 hover:bg-primary hover:text-white dark:border-gray/[0.1] dark:bg-gray-dark dark:hover:border-primary">
                            <div className="item-center absolute -top-[30px] left-1/2 mx-auto inline-flex -translate-x-1/2 justify-between rounded-[78px] bg-primary py-4 px-8 text-white">
                                <h5 className="text-[22px] font-black">Developer</h5>
                            </div>
                            <div className="mt-14 flex items-center gap-2">
                                <div>
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="8" cy="8" r="8" fill="#45B649" />
                                        <path d="M5.11438 8.11438L7 10L10.7712 6.22876" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-sm font-bold">Maintain AUSTCMS</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <div>
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="8" cy="8" r="8" fill="#45B649" />
                                        <path d="M5.11438 8.11438L7 10L10.7712 6.22876" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-sm font-bold">Implement New Features</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <div>
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="8" cy="8" r="8" fill="#45B649" />
                                        <path d="M5.11438 8.11438L7 10L10.7712 6.22876" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-sm font-bold">Technical Support</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <div>
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="8" cy="8" r="8" fill="#45B649" />
                                        <path d="M5.11438 8.11438L7 10L10.7712 6.22876" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-sm font-bold">System Security</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <div>
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g opacity="0.3">
                                            <circle cx="8" cy="8" r="8" fill="#7780A1" />
                                        </g>
                                        <path d="M5.11438 8.11438L7 10L10.7712 6.22876" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-sm font-bold">Club Management</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <div>
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g opacity="0.3">
                                            <circle cx="8" cy="8" r="8" fill="#7780A1" />
                                        </g>
                                        <path d="M5.11438 8.11438L7 10L10.7712 6.22876" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-sm font-bold">Event Planning</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <div>
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g opacity="0.3">
                                            <circle cx="8" cy="8" r="8" fill="#7780A1" />
                                        </g>
                                        <path d="M5.11438 8.11438L7 10L10.7712 6.22876" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-sm font-bold">Member Engagement</p>
                                </div>
                            </div>
                            <div className="my-7 h-[2px] bg-gray/10"></div>
                            <div className="text-center">
                                <button type="button" className="btn py-[19px] px-[26px] text-[22px] font-black text-white group-hover:bg-white group-hover:text-primary">
                                    Apply<span className="text-sm font-bold"> Now</span>
                                </button>
                            </div>
                            <h5 className="font-blod mt-4 text-center text-sm">Be a developer of AUST</h5>
                        </div>
                        <div className="group relative space-y-6 rounded-[32px] border-2 border-transparent bg-black p-7 text-white duration-200 hover:border-2 hover:border-black hover:bg-white hover:text-black dark:bg-white/5 dark:hover:border-white dark:hover:text-white">
                            <div className="item-center absolute -top-[30px] left-1/2 mx-auto flex -translate-x-1/2 justify-between rounded-[78px] bg-gray py-4 px-8 text-white">
                                <h5 className="text-[22px] font-black">Executive</h5>
                            </div>
                            <div className="absolute top-0 group-hover:text-black ltr:right-0 rtl:left-0 dark:group-hover:text-white">
                                <svg width="78" height="78" viewBox="0 0 78 78" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M39 0L43.7406 12.1147L52.3388 2.35199L52.65 15.3575L64.0687 9.12427L59.913 21.4519L72.775 19.5L64.6536 29.6628L77.4075 32.2277L66.3 39L77.4075 45.7723L64.6536 48.3372L72.775 58.5L59.913 56.5481L64.0687 68.8757L52.65 62.6425L52.3388 75.648L43.7406 65.8853L39 78L34.2594 65.8853L25.6612 75.648L25.35 62.6425L13.9313 68.8757L18.087 56.5481L5.22501 58.5L13.3464 48.3372L0.592499 45.7723L11.7 39L0.592499 32.2277L13.3464 29.6628L5.22501 19.5L18.087 21.4519L13.9313 9.12427L25.35 15.3575L25.6612 2.35199L34.2594 12.1147L39 0Z"
                                        fill="currentcolor"
                                        fillOpacity="0.12"
                                    />
                                    <path
                                        d="M32.6583 23.032V33H31.0623V26.812L28.4163 33H27.2263L24.5663 26.882V33H22.9703V23.032H24.3983L27.8283 30.83L31.2303 23.032H32.6583ZM37.9168 33.112C37.1981 33.112 36.5635 32.9627 36.0128 32.664C35.4715 32.3653 35.0515 31.9407 34.7528 31.39C34.4635 30.83 34.3188 30.1767 34.3188 29.43C34.3188 28.6833 34.4635 28.0347 34.7528 27.484C35.0515 26.924 35.4715 26.4947 36.0128 26.196C36.5635 25.8973 37.1981 25.748 37.9168 25.748C38.6261 25.748 39.2515 25.8973 39.7928 26.196C40.3341 26.4947 40.7495 26.924 41.0388 27.484C41.3375 28.0347 41.4868 28.6833 41.4868 29.43C41.4868 30.1767 41.3375 30.83 41.0388 31.39C40.7495 31.9407 40.3341 32.3653 39.7928 32.664C39.2515 32.9627 38.6261 33.112 37.9168 33.112ZM37.9028 31.74C38.5001 31.74 38.9528 31.5487 39.2608 31.166C39.5781 30.774 39.7368 30.1953 39.7368 29.43C39.7368 28.674 39.5781 28.1 39.2608 27.708C38.9435 27.3067 38.4955 27.106 37.9168 27.106C37.3288 27.106 36.8761 27.3067 36.5588 27.708C36.2415 28.1 36.0828 28.674 36.0828 29.43C36.0828 30.1953 36.2368 30.774 36.5448 31.166C36.8621 31.5487 37.3148 31.74 37.9028 31.74ZM45.5859 33.112C44.3073 33.112 43.2899 32.8133 42.5339 32.216L43.0239 30.984C43.7799 31.544 44.6433 31.824 45.6139 31.824C46.0339 31.824 46.3559 31.754 46.5799 31.614C46.8133 31.474 46.9299 31.278 46.9299 31.026C46.9299 30.8113 46.8506 30.6433 46.6919 30.522C46.5333 30.3913 46.2626 30.2793 45.8799 30.186L44.7039 29.92C43.4159 29.64 42.7719 28.982 42.7719 27.946C42.7719 27.5167 42.8933 27.1387 43.1359 26.812C43.3786 26.476 43.7193 26.2147 44.1579 26.028C44.5966 25.8413 45.1053 25.748 45.6839 25.748C46.1879 25.748 46.6733 25.8273 47.1399 25.986C47.6066 26.1353 48.0173 26.3547 48.3719 26.644L47.8539 27.834C47.1446 27.3113 46.4166 27.05 45.6699 27.05C45.2686 27.05 44.9559 27.1247 44.7319 27.274C44.5079 27.4233 44.3959 27.6287 44.3959 27.89C44.3959 28.0953 44.4613 28.2587 44.5919 28.38C44.7319 28.5013 44.9653 28.604 45.2919 28.688L46.4959 28.954C47.1959 29.1127 47.7046 29.36 48.0219 29.696C48.3486 30.0227 48.5119 30.452 48.5119 30.984C48.5119 31.6373 48.2506 32.1553 47.7279 32.538C47.2053 32.9207 46.4913 33.112 45.5859 33.112ZM52.1673 27.246V30.41C52.1673 31.2407 52.5546 31.656 53.3293 31.656C53.5439 31.656 53.7773 31.6187 54.0293 31.544V32.93C53.7213 33.042 53.3479 33.098 52.9093 33.098C52.1066 33.098 51.4906 32.874 51.0613 32.426C50.6319 31.978 50.4173 31.334 50.4173 30.494V27.246H49.0593V25.93H50.4173V24.208L52.1673 23.62V25.93H54.0433V27.246H52.1673ZM19.0895 43.748C19.6961 43.748 20.2328 43.9067 20.6995 44.224C21.1755 44.532 21.5441 44.9707 21.8055 45.54C22.0761 46.1 22.2115 46.744 22.2115 47.472C22.2115 48.2 22.0808 48.8393 21.8195 49.39C21.5581 49.9407 21.1895 50.3653 20.7135 50.664C20.2468 50.9627 19.7055 51.112 19.0895 51.112C18.5761 51.112 18.1188 51.0047 17.7175 50.79C17.3161 50.566 17.0081 50.258 16.7935 49.866V54.024H15.0575V45.932C15.0575 45.1853 15.0201 44.518 14.9455 43.93H16.5835L16.7235 45.148C16.9101 44.7093 17.2135 44.3687 17.6335 44.126C18.0535 43.874 18.5388 43.748 19.0895 43.748ZM18.6135 49.74C19.2015 49.74 19.6541 49.544 19.9715 49.152C20.2888 48.76 20.4475 48.2 20.4475 47.472C20.4475 46.7347 20.2888 46.1607 19.9715 45.75C19.6541 45.33 19.2061 45.12 18.6275 45.12C18.0301 45.12 17.5728 45.3207 17.2555 45.722C16.9381 46.1233 16.7795 46.6973 16.7795 47.444C16.7795 48.1813 16.9381 48.7507 17.2555 49.152C17.5728 49.544 18.0255 49.74 18.6135 49.74ZM26.9451 51.112C26.2264 51.112 25.5918 50.9627 25.0411 50.664C24.4998 50.3653 24.0798 49.9407 23.7811 49.39C23.4918 48.83 23.3471 48.1767 23.3471 47.43C23.3471 46.6833 23.4918 46.0347 23.7811 45.484C24.0798 44.924 24.4998 44.4947 25.0411 44.196C25.5918 43.8973 26.2264 43.748 26.9451 43.748C27.6544 43.748 28.2798 43.8973 28.8211 44.196C29.3624 44.4947 29.7778 44.924 30.0671 45.484C30.3658 46.0347 30.5151 46.6833 30.5151 47.43C30.5151 48.1767 30.3658 48.83 30.0671 49.39C29.7778 49.9407 29.3624 50.3653 28.8211 50.664C28.2798 50.9627 27.6544 51.112 26.9451 51.112ZM26.9311 49.74C27.5284 49.74 27.9811 49.5487 28.2891 49.166C28.6064 48.774 28.7651 48.1953 28.7651 47.43C28.7651 46.674 28.6064 46.1 28.2891 45.708C27.9718 45.3067 27.5238 45.106 26.9451 45.106C26.3571 45.106 25.9044 45.3067 25.5871 45.708C25.2698 46.1 25.1111 46.674 25.1111 47.43C25.1111 48.1953 25.2651 48.774 25.5731 49.166C25.8904 49.5487 26.3431 49.74 26.9311 49.74ZM36.0563 43.748C36.6629 43.748 37.1996 43.9067 37.6663 44.224C38.1423 44.532 38.5109 44.9707 38.7723 45.54C39.0429 46.1 39.1783 46.744 39.1783 47.472C39.1783 48.2 39.0476 48.8393 38.7863 49.39C38.5249 49.9407 38.1563 50.3653 37.6803 50.664C37.2136 50.9627 36.6723 51.112 36.0563 51.112C35.5429 51.112 35.0856 51.0047 34.6843 50.79C34.2829 50.566 33.9749 50.258 33.7603 49.866V54.024H32.0243V45.932C32.0243 45.1853 31.9869 44.518 31.9123 43.93H33.5503L33.6903 45.148C33.8769 44.7093 34.1803 44.3687 34.6003 44.126C35.0203 43.874 35.5056 43.748 36.0563 43.748ZM35.5803 49.74C36.1683 49.74 36.6209 49.544 36.9383 49.152C37.2556 48.76 37.4143 48.2 37.4143 47.472C37.4143 46.7347 37.2556 46.1607 36.9383 45.75C36.6209 45.33 36.1729 45.12 35.5943 45.12C34.9969 45.12 34.5396 45.3207 34.2223 45.722C33.9049 46.1233 33.7463 46.6973 33.7463 47.444C33.7463 48.1813 33.9049 48.7507 34.2223 49.152C34.5396 49.544 34.9923 49.74 35.5803 49.74ZM47.1459 43.93V51H45.4379V49.908C45.2139 50.3 44.9152 50.5987 44.5419 50.804C44.1686 51.0093 43.7392 51.112 43.2539 51.112C41.5272 51.112 40.6639 50.1413 40.6639 48.2V43.93H42.3999V48.214C42.3999 48.7273 42.5026 49.1053 42.7079 49.348C42.9226 49.5907 43.2492 49.712 43.6879 49.712C44.2012 49.712 44.6119 49.544 44.9199 49.208C45.2279 48.872 45.3819 48.424 45.3819 47.864V43.93H47.1459ZM49.0458 40.696H50.7818V51H49.0458V40.696ZM59.4581 43.93V51H57.7361V49.866C57.5215 50.258 57.2135 50.566 56.8121 50.79C56.4108 51.0047 55.9535 51.112 55.4401 51.112C54.8241 51.112 54.2781 50.9627 53.8021 50.664C53.3261 50.3653 52.9575 49.9407 52.6961 49.39C52.4348 48.8393 52.3041 48.2 52.3041 47.472C52.3041 46.744 52.4348 46.1 52.6961 45.54C52.9668 44.9707 53.3401 44.532 53.8161 44.224C54.2921 43.9067 54.8335 43.748 55.4401 43.748C55.9535 43.748 56.4108 43.86 56.8121 44.084C57.2135 44.2987 57.5215 44.602 57.7361 44.994V43.93H59.4581ZM55.9161 49.74C56.4948 49.74 56.9428 49.5393 57.2601 49.138C57.5775 48.7367 57.7361 48.172 57.7361 47.444C57.7361 46.6973 57.5775 46.1233 57.2601 45.722C56.9428 45.3207 56.4901 45.12 55.9021 45.12C55.3235 45.12 54.8708 45.33 54.5441 45.75C54.2268 46.1607 54.0681 46.7347 54.0681 47.472C54.0681 48.2 54.2268 48.76 54.5441 49.152C54.8708 49.544 55.3281 49.74 55.9161 49.74ZM65.1721 43.762C65.4428 43.762 65.6761 43.7993 65.8721 43.874L65.8581 45.47C65.5594 45.3487 65.2514 45.288 64.9341 45.288C64.3368 45.288 63.8794 45.4607 63.5621 45.806C63.2541 46.1513 63.1001 46.6087 63.1001 47.178V51H61.3641V45.932C61.3641 45.1853 61.3268 44.518 61.2521 43.93H62.8901L63.0301 45.176C63.2074 44.7187 63.4874 44.3687 63.8701 44.126C64.2528 43.8833 64.6868 43.762 65.1721 43.762Z"
                                        fill="currentcolor"
                                    />
                                </svg>
                            </div>
                            <div className="mt-14 flex items-center gap-2">
                                <div>
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="8" cy="8" r="8" fill="#45B649" />
                                        <path d="M5.11438 8.11438L7 10L10.7712 6.22876" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-sm font-bold">Club Leadership</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <div>
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="8" cy="8" r="8" fill="#45B649" />
                                        <path d="M5.11438 8.11438L7 10L10.7712 6.22876" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-sm font-bold">Event Planning & Execution</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <div>
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="8" cy="8" r="8" fill="#45B649" />
                                        <path d="M5.11438 8.11438L7 10L10.7712 6.22876" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-sm font-bold">Budget Management</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <div>
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="8" cy="8" r="8" fill="#45B649" />
                                        <path d="M5.11438 8.11438L7 10L10.7712 6.22876" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-sm font-bold">Member Engagement</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <div>
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="8" cy="8" r="8" fill="#45B649" />
                                        <path d="M5.11438 8.11438L7 10L10.7712 6.22876" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-sm font-bold">Club Strategy Development</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <div>
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="8" cy="8" r="8" fill="#45B649" />
                                        <path d="M5.11438 8.11438L7 10L10.7712 6.22876" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-sm font-bold">University Liaison</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <div>
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="8" cy="8" r="8" fill="#45B649" />
                                        <path d="M5.11438 8.11438L7 10L10.7712 6.22876" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-sm font-bold">Club Representation</p>
                                </div>
                            </div>
                            <div className="my-7 h-[2px] bg-gray/10"></div>
                            <div className="text-center">
                                <button type="button" className="btn bg-white py-[19px] px-[26px] text-[22px] font-black text-black group-hover:bg-black group-hover:text-white">
                                    Apply<span className="text-sm font-bold"> Now</span>
                                </button>
                            </div>
                            <h5 className="font-blod mt-4 text-center text-sm text-white group-hover:text-black">Lead and shape the club&apos;s future</h5>
                        </div>
                        <div className="group relative space-y-6 rounded-[32px] border-2 border-secondary bg-white p-7 duration-200 hover:bg-secondary hover:text-white dark:border-gray/[0.1] dark:bg-gray-dark dark:hover:border-secondary">
                            <div className="item-center absolute -top-[30px] left-1/2 mx-auto flex -translate-x-1/2 justify-between rounded-[78px] bg-secondary py-4 px-8 text-white">
                                <h5 className="text-[22px] font-black">Club Member</h5>
                            </div>
                            <div className="mt-14 flex items-center gap-2">
                                <div>
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="8" cy="8" r="8" fill="#45B649" />
                                        <path d="M5.11438 8.11438L7 10L10.7712 6.22876" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-sm font-bold">Participate in Club Activities</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <div>
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="8" cy="8" r="8" fill="#45B649" />
                                        <path d="M5.11438 8.11438L7 10L10.7712 6.22876" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-sm font-bold">Learn New Skills</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <div>
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="8" cy="8" r="8" fill="#45B649" />
                                        <path d="M5.11438 8.11438L7 10L10.7712 6.22876" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-sm font-bold">Network with Peers</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <div>
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="8" cy="8" r="8" fill="#45B649" />
                                        <path d="M5.11438 8.11438L7 10L10.7712 6.22876" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-sm font-bold">Attend Workshops</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <div>
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="8" cy="8" r="8" fill="#45B649" />
                                        <path d="M5.11438 8.11438L7 10L10.7712 6.22876" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-sm font-bold">Career Growth Opportunities</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <div>
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="8" cy="8" r="8" fill="#45B649" />
                                        <path d="M5.11438 8.11438L7 10L10.7712 6.22876" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-sm font-bold">Access to Resources</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <div>
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="8" cy="8" r="8" fill="#45B649" />
                                        <path d="M5.11438 8.11438L7 10L10.7712 6.22876" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-sm font-bold">Leadership Development</p>
                                </div>
                            </div>
                            <div className="my-7 h-[2px] bg-gray/10"></div>
                            <div className="text-center">
                                <button type="button" className="btn bg-secondary py-[19px] px-[26px] text-[22px] font-black text-white group-hover:bg-white group-hover:text-secondary">
                                    Join<span className="text-sm font-bold"> Now</span>
                                </button>
                            </div>
                            <h5 className="font-blod mt-4 text-center text-sm">For all students of AUST</h5>
                        </div>
                    </div>
                </div>
            </section>

            <section className="relative overflow-hidden bg-black py-12 lg:py-24">
                <div className="absolute top-0 ltr:right-0 rtl:left-0 rtl:rotate-y-180">
                    <svg width="758" height="741" viewBox="0 0 758 741" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g opacity="0.03">
                            <ellipse
                                opacity="0.1"
                                cx="752"
                                cy="370.646"
                                rx="750"
                                ry="749.646"
                                stroke="white"
                                strokeWidth="3"
                                strokeMiterlimit="4.62023"
                                strokeLinecap="round"
                                strokeDasharray="35 50 15 15"
                            />
                            <path
                                opacity="0.1"
                                d="M1443.13 370.646C1443.13 752.153 1133.7 1061.43 752 1061.43C370.296 1061.43 60.8655 752.153 60.8655 370.646C60.8655 -10.8606 370.296 -320.134 752 -320.134C1133.7 -320.134 1443.13 -10.8606 1443.13 370.646Z"
                                stroke="white"
                                strokeWidth="3"
                            />
                            <ellipse
                                opacity="0.2"
                                cx="752"
                                cy="370.646"
                                rx="634.561"
                                ry="634.207"
                                stroke="white"
                                strokeWidth="3"
                                strokeMiterlimit="4.62023"
                                strokeLinecap="round"
                                strokeDasharray="35 50 15 15"
                            />
                            <path
                                opacity="0.3"
                                d="M1328.4 370.646C1328.4 688.789 1070.34 946.696 752 946.696C433.66 946.696 175.596 688.789 175.596 370.646C175.596 52.5037 433.66 -205.403 752 -205.403C1070.34 -205.403 1328.4 52.5037 1328.4 370.646Z"
                                stroke="white"
                                strokeWidth="3"
                            />
                            <ellipse
                                opacity="0.4"
                                cx="752"
                                cy="370.646"
                                rx="519.83"
                                ry="519.476"
                                stroke="white"
                                strokeWidth="3"
                                strokeMiterlimit="4.62023"
                                strokeLinecap="round"
                                strokeDasharray="35 50 15 15"
                            />
                            <path
                                opacity="0.5"
                                d="M1211.55 370.646C1211.55 624.251 1005.8 829.84 752 829.84C498.197 829.84 292.452 624.251 292.452 370.646C292.452 117.041 498.197 -88.5479 752 -88.5479C1005.8 -88.5479 1211.55 117.041 1211.55 370.646Z"
                                stroke="white"
                                strokeWidth="3"
                            />
                            <path
                                opacity="0.6"
                                d="M1155.6 370.646C1155.6 593.351 974.903 773.891 752 773.891C529.097 773.891 348.401 593.351 348.401 370.646C348.401 147.942 529.097 -32.5986 752 -32.5986C974.903 -32.5986 1155.6 147.942 1155.6 370.646Z"
                                stroke="white"
                                strokeWidth="3"
                            />
                            <ellipse
                                opacity="0.7"
                                cx="752"
                                cy="370.646"
                                rx="350.567"
                                ry="350.212"
                                stroke="white"
                                strokeWidth="3"
                                strokeMiterlimit="4.62023"
                                strokeLinecap="round"
                                strokeDasharray="35 50 15 15"
                            />
                            <path
                                opacity="0.8"
                                d="M1040.16 370.647C1040.16 529.596 911.148 658.453 752 658.453C592.852 658.453 463.84 529.596 463.84 370.647C463.84 211.698 592.852 82.8408 752 82.8408C911.148 82.8408 1040.16 211.698 1040.16 370.647Z"
                                stroke="white"
                                strokeWidth="3"
                            />
                            <ellipse
                                opacity="0.9"
                                cx="752"
                                cy="370.646"
                                rx="223.088"
                                ry="222.734"
                                stroke="white"
                                strokeWidth="3"
                                strokeMiterlimit="4.62023"
                                strokeLinecap="round"
                                strokeDasharray="35 50 15 15"
                            />
                            <path
                                d="M909.848 370.646C909.848 457.624 839.18 528.14 752 528.14C664.82 528.14 594.152 457.624 594.152 370.646C594.152 283.667 664.82 213.151 752 213.151C839.18 213.151 909.848 283.667 909.848 370.646Z"
                                stroke="white"
                                strokeWidth="3"
                            />
                            <ellipse cx="752" cy="370.646" rx="106.941" ry="106.586" stroke="white" strokeWidth="3" strokeMiterlimit="4.62023" strokeLinecap="round" strokeDasharray="35 50 15 15" />
                        </g>
                    </svg>
                </div>
                <div className="container relative">
                    <div className="heading overflow-hidden !pb-0 text-center">
                        <h6>Testimonial</h6>
                        <h4 className="!text-white">Feedback from our members</h4>
                    </div>
                    <Testimonial type="marketing" feedbacks={feedbacks}></Testimonial>
                </div>
            </section>

            <section className="py-14 dark:bg-gray-dark lg:py-[100px]">
                <div className="container">
                    <div className="relative z-10 lg:flex">
                        <div className="heading text-center lg:mb-0 lg:w-1/3 ltr:lg:pr-10 ltr:lg:text-left rtl:lg:pl-10 rtl:lg:text-right">
                            <h6>Get In Touch.</h6>
                            <h4 className="sm:!leading-[50px]">Ready to Get Started?</h4>
                            <div className="block dark:hidden">
                                <svg className="mx-auto" width="328" height="328" viewBox="0 0 328 328" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M256.296 146.855L206.276 143.116C201.431 142.749 196.568 143.55 192.098 145.453L178.792 151.124C177.003 154.373 174.804 157.378 172.249 160.067C165.83 166.922 141.214 179.667 128.22 182.346C125.158 182.891 122.003 182.34 119.308 180.788C113.421 185.512 107.253 189.872 100.837 193.848C100.837 193.848 112.989 228.467 158.237 208.898L194.227 193.287L186.343 212.201C186.561 223.014 186.623 237.191 185.907 246.641C194.356 249.214 203.368 249.301 211.865 246.889C215.26 223.83 217.846 187.435 209.059 173.694L252.061 173.289C257.48 163.529 257.002 157.979 256.296 146.855Z"
                                        fill="#B476E5"
                                    ></path>
                                    <path
                                        d="M176.4 133.457L181.635 110.429C181.752 109.925 181.661 109.396 181.387 108.958C181.112 108.519 180.674 108.208 180.171 108.092C179.667 107.977 179.137 108.066 178.699 108.341C178.26 108.615 177.95 109.053 177.834 109.557L171.664 136.697"
                                        fill="#B476E5"
                                    ></path>
                                    <path
                                        d="M176.4 133.457L181.635 110.429C181.752 109.925 181.661 109.396 181.387 108.958C181.112 108.519 180.674 108.208 180.171 108.092C179.667 107.977 179.137 108.066 178.699 108.341C178.26 108.615 177.95 109.053 177.834 109.557L171.664 136.697C172.44 139.559 174.524 143.397 176.4 133.457Z"
                                        fill="#B476E5"
                                    ></path>
                                    <path
                                        d="M172.349 46.2072C172.349 50.0714 171.203 53.8487 169.056 57.0616C166.909 60.2745 163.858 62.7786 160.288 64.2574C156.718 65.7362 152.79 66.1231 149 65.3692C145.21 64.6154 141.729 62.7547 138.997 60.0223C136.264 57.2899 134.404 53.8086 133.65 50.0188C132.896 46.2289 133.283 42.3006 134.761 38.7306C136.24 35.1607 138.744 32.1093 141.957 29.9625C145.17 27.8158 148.948 26.6699 152.812 26.6699C157.992 26.673 162.96 28.7324 166.624 32.3957C170.286 36.0589 172.346 41.0266 172.349 46.2072Z"
                                        fill="#B476E5"
                                    ></path>
                                    <path
                                        d="M274.372 149.317C270.787 157.817 265.722 165.614 259.415 172.345C262.874 172.874 266.332 173.657 269.293 174.121C272.376 172.776 275.267 171.028 277.889 168.92C286.089 162.314 302.981 154.119 306.681 149.445C299.982 148.476 283.592 149.13 274.372 149.317Z"
                                        fill="#47BDFF"
                                    ></path>
                                    <path
                                        d="M210.987 265.857C202.353 262.597 194.364 257.828 187.399 251.771C186.994 255.232 186.371 258.722 185.997 261.713C187.458 264.747 189.313 267.576 191.512 270.126C198.4 278.041 207.219 294.618 212.012 298.17C212.763 291.44 211.519 275.081 210.987 265.857Z"
                                        fill="#47BDFF"
                                    ></path>
                                    <path
                                        d="M104.015 167.079C103.392 167.39 102.737 167.671 102.083 167.951C99.027 164.359 96.1553 160.616 93.4797 156.733C93.7601 157.389 102.36 175.99 116.632 183.001C117.566 182.253 118.47 181.537 119.311 180.82C113.98 177.922 108.44 172.313 104.015 167.079Z"
                                        fill="#47BDFF"
                                    ></path>
                                    <path d="M185.966 196.836C185.966 196.836 186.246 203.411 186.402 212.167L194.223 193.284L185.966 196.836Z" fill="#47BDFF"></path>
                                    <path
                                        d="M102.052 85.3147C102.052 85.3147 96.5957 75.0926 83.761 81.3262C70.9264 87.5598 73.4159 112.611 73.4159 112.611C73.4159 112.611 62.0097 118.064 55.9335 127.256C46.5232 141.496 51.2612 162.997 80.5237 162.997C79.1287 156.859 78.6457 150.548 79.0903 144.269C79.8693 133.208 83.889 123.081 87.4412 112.704C91.9709 99.2908 90.9984 100.363 92.5826 95.4417C88.8106 91.8583 93.2993 87.5582 95.3247 91.0465C96.1824 92.4569 96.3874 92.5126 97.0729 92.7275C100.786 93.8902 107.523 95.1875 111.177 93.9772C111.182 93.8821 111.493 85.3147 102.052 85.3147Z"
                                        fill="#47BDFF"
                                    ></path>
                                    <path d="M95.1347 117.035L91.8008 108.685C92.9128 110.175 94.2234 111.506 95.6958 112.642C95.4217 114.094 95.2344 115.561 95.1347 117.035Z" fill="#47BDFF"></path>
                                    <path
                                        d="M139.226 258.535C139.442 259.59 139.34 260.684 138.934 261.679C138.528 262.675 137.835 263.527 136.944 264.131C136.053 264.733 135.004 265.058 133.928 265.064C132.853 265.069 131.8 264.756 130.902 264.164C130.004 263.572 129.303 262.725 128.886 261.735C128.468 260.743 128.355 259.65 128.559 258.594C128.762 257.538 129.275 256.566 130.031 255.801C130.787 255.037 131.754 254.514 132.807 254.297C133.507 254.15 134.229 254.143 134.932 254.278C135.634 254.412 136.304 254.683 136.9 255.078C137.497 255.472 138.01 255.98 138.409 256.574C138.809 257.167 139.086 257.833 139.226 258.535Z"
                                        fill="#47BDFF"
                                    ></path>
                                    <path
                                        d="M172.349 46.2072C172.349 50.0714 171.203 53.8487 169.056 57.0616C166.909 60.2745 163.858 62.7786 160.288 64.2574C156.718 65.7362 152.79 66.1231 149 65.3692C145.21 64.6154 141.729 62.7547 138.997 60.0223C136.264 57.2899 134.404 53.8086 133.65 50.0188C132.896 46.2289 133.283 42.3006 134.761 38.7306C136.24 35.1607 138.744 32.1093 141.957 29.9625C145.17 27.8158 148.948 26.6699 152.812 26.6699C157.992 26.673 162.96 28.7324 166.624 32.3957C170.286 36.0589 172.346 41.0266 172.349 46.2072Z"
                                        stroke="#08111F"
                                        strokeWidth="1.9"
                                    ></path>
                                    <path
                                        d="M215.069 208.21L231.179 216.343C234.485 218.007 238.318 218.292 241.834 217.136C245.352 215.98 248.266 213.476 249.939 210.173L268.386 173.653"
                                        stroke="#08111F"
                                        strokeWidth="1.9"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    ></path>
                                    <path
                                        d="M280.071 150.532L291.444 128.035C293.109 124.728 293.394 120.896 292.238 117.38C291.082 113.863 288.577 110.949 285.274 109.276L171.44 51.7656M106.913 126.608L139.939 61.1864"
                                        stroke="#08111F"
                                        strokeWidth="1.9"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    ></path>
                                    <path d="M291.974 116.505L196.903 131.836L161.762 63.5879" stroke="#08111F" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"></path>
                                    <path
                                        d="M144.812 213.413C137.719 221.211 129.129 227.501 119.553 231.906C109.977 236.312 99.6115 238.744 89.0751 239.058C78.5388 239.371 68.0474 237.559 58.2264 233.729C48.4056 229.9 39.4566 224.132 31.9133 216.77C24.3699 209.406 18.3867 200.601 14.3205 190.876C10.2543 181.151 8.18852 170.706 8.2463 160.165C8.30407 149.624 10.4843 139.203 14.6568 129.523C18.8293 119.843 24.9088 111.103 32.5324 103.823"
                                        stroke="#08111F"
                                        strokeWidth="1.9"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    ></path>
                                    <path
                                        d="M95.1344 119.622C95.0468 117.26 95.2474 114.897 95.7314 112.583C99.5296 115.124 102.669 113.544 104.973 110.258C107.928 105.475 109.445 99.9421 109.343 94.3203"
                                        stroke="#08111F"
                                        strokeWidth="1.9"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    ></path>
                                    <path
                                        d="M93.4794 156.734C96.1541 160.617 99.0244 164.36 102.08 167.951C106.99 165.893 111.514 163.012 115.455 159.433C118.376 156.783 120.996 153.819 123.268 150.595C117.892 143.565 112.909 136.241 108.344 128.659C106.121 124.961 102.784 122.061 98.8111 120.377C97.1071 119.715 95.2672 119.479 93.4515 119.691C92.1031 120.045 90.6906 120.076 89.3278 119.783C87.9651 119.489 86.6906 118.879 85.6074 118.002"
                                        stroke="#08111F"
                                        strokeWidth="1.9"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    ></path>
                                    <path
                                        d="M256.545 149.286C260.782 149.442 269.196 149.411 274.337 149.317C270.762 157.814 265.709 165.611 259.413 172.345C257.824 172.095 254.458 171.752 252.932 171.659"
                                        stroke="#08111F"
                                        strokeWidth="1.9"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    ></path>
                                    <path
                                        d="M306.679 149.441C308.455 149.691 309.597 150.097 309.733 150.657C310.596 154.196 292.073 162.793 283.745 169.508C281.323 171.486 278.614 173.084 275.709 174.245C273.591 174.633 271.416 174.592 269.313 174.12C272.402 172.779 275.296 171.03 277.92 168.92C286.097 162.327 302.973 154.147 306.679 149.441Z"
                                        stroke="#08111F"
                                        strokeWidth="1.9"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    ></path>
                                    <path
                                        d="M274.372 149.317C283.595 149.13 299.985 148.476 306.68 149.442C302.972 154.116 286.089 162.319 277.888 168.917C275.265 171.027 272.374 172.777 269.288 174.12C266.327 173.653 262.869 172.874 259.41 172.344C265.719 165.614 270.785 157.817 274.372 149.317Z"
                                        stroke="#08111F"
                                        strokeWidth="1.9"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    ></path>
                                    <path
                                        d="M210.614 247.255C210.333 251.929 210.614 258.815 210.988 265.888C202.365 262.621 194.389 257.852 187.431 251.804C187.618 250.215 187.742 248.626 187.773 247.13"
                                        stroke="#08111F"
                                        strokeWidth="1.9"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    ></path>
                                    <path
                                        d="M212.016 298.17C211.829 299.974 211.489 301.106 210.925 301.286C207.45 302.393 198.144 284.058 191.138 275.985C189.062 273.631 187.36 270.973 186.09 268.101C185.635 265.997 185.602 263.822 185.997 261.705C187.453 264.742 189.308 267.571 191.512 270.118C198.4 278.067 207.217 294.618 212.016 298.17Z"
                                        stroke="#08111F"
                                        strokeWidth="1.9"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    ></path>
                                    <path
                                        d="M210.987 265.857C211.517 275.081 212.763 291.441 212.015 298.165C207.217 294.613 198.377 278.054 191.515 270.121C189.313 267.573 187.458 264.744 186 261.708C186.374 258.717 186.997 255.225 187.402 251.767C194.366 257.825 202.352 262.596 210.987 265.857Z"
                                        stroke="#08111F"
                                        strokeWidth="1.9"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    ></path>
                                    <path d="M116.635 183.001C102.364 175.99 93.7634 157.388 93.4797 156.733" stroke="#08111F" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"></path>
                                    <path
                                        d="M104.016 167.078C108.444 172.313 113.99 177.948 119.315 180.854C122.017 182.386 125.169 182.925 128.227 182.381C141.232 179.757 165.837 166.957 172.256 160.102C183.88 147.687 182.926 138.229 181.915 122.429C181.505 116.01 180.699 116.164 179.734 119.149C178.299 123.603 176.489 134.401 174.998 138.655C174.859 139.084 174.572 139.448 174.188 139.684C173.04 140.34 172.317 138.905 171.728 136.879C171.103 134.729 170.657 131.866 170.076 130.155C169.058 127.139 166.98 124.391 166.649 133.24C166.455 138.444 166.442 147.406 160.791 150.69C156.392 153.196 151.809 155.363 147.08 157.171C142.189 159.086 137.065 160.344 131.843 160.91C129.008 161.061 125.206 157.825 121.592 152.809"
                                        stroke="#08111F"
                                        strokeWidth="1.9"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    ></path>
                                    <path
                                        d="M176.399 133.457L181.634 110.429C181.751 109.925 181.661 109.396 181.387 108.958C181.111 108.519 180.673 108.208 180.17 108.092C179.666 107.977 179.137 108.066 178.699 108.341C178.259 108.615 177.949 109.053 177.833 109.557L171.663 136.697"
                                        stroke="#08111F"
                                        strokeWidth="1.9"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    ></path>
                                    <path
                                        d="M185.976 196.866C190.837 194.778 194.231 193.284 194.231 193.284L186.402 212.167"
                                        stroke="#08111F"
                                        strokeWidth="1.9"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    ></path>
                                    <path
                                        d="M119.315 180.851C113.428 185.559 107.257 189.9 100.837 193.848C90.3679 186.542 83.0982 175.499 80.5237 162.996"
                                        stroke="#08111F"
                                        strokeWidth="1.9"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    ></path>
                                    <path
                                        d="M178.768 151.125L193.382 144.924C197.001 143.395 200.931 142.743 204.848 143.023L256.295 146.856C257.453 157.623 257.315 163.815 252.058 173.28L209.117 173.685"
                                        stroke="#08111F"
                                        strokeWidth="1.9"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    ></path>
                                    <path
                                        d="M102.052 85.3147C102.052 85.3147 96.5957 75.0926 83.761 81.3262C70.9264 87.5598 73.4159 112.611 73.4159 112.611C73.4159 112.611 62.0097 118.064 55.9335 127.256C46.5232 141.496 51.2612 162.997 80.5237 162.997C79.1287 156.859 78.6457 150.548 79.0903 144.269C79.8693 133.208 83.889 123.081 87.4412 112.704C88.2514 110.305 90.1833 104.447 90.8376 102.015C91.4297 99.7418 91.7101 98.151 92.5826 95.4417C88.8106 91.8583 93.2993 87.5582 95.3247 91.0465C96.2185 92.5225 96.3923 92.4372 97.3714 92.7603C99.7953 93.5573 106.326 95.3663 111.185 93.9083C111.182 93.9132 111.493 85.3147 102.052 85.3147Z"
                                        stroke="#08111F"
                                        strokeWidth="1.9"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    ></path>
                                    <path
                                        d="M40.5402 90.6723C29.4937 96.0007 19.1002 102.589 9.56714 110.305C9.29884 110.472 9.07503 110.701 8.9149 110.974C8.75477 111.246 8.66313 111.553 8.64781 111.869C8.63247 112.184 8.69396 112.499 8.82695 112.785C8.95993 113.072 9.16047 113.322 9.41134 113.514L16.5159 119.154C20.8209 113.508 26.6576 108.735 32.5223 103.805C28.0082 109.645 24.0548 115.897 20.7143 122.478L28.3583 128.533C28.605 128.729 28.8951 128.863 29.2042 128.923C29.5134 128.984 29.8323 128.969 30.1346 128.88C30.4368 128.792 30.7135 128.632 30.9412 128.414C31.1688 128.197 31.341 127.928 31.4432 127.63L43.4693 92.988C43.6097 92.5997 43.6244 92.1769 43.5114 91.7797C43.3983 91.3825 43.1631 91.0308 42.8392 90.7748C42.5151 90.5187 42.1187 90.3709 41.7061 90.3525C41.2936 90.3342 40.8856 90.446 40.5402 90.6723Z"
                                        stroke="#08111F"
                                        strokeWidth="1.9"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    ></path>
                                    <path
                                        d="M251.808 31.2836C245.607 28.1971 238.659 32.5956 239.656 39.0736L236.758 41.7517L240.746 42.0633C244.267 48.0148 253.21 48.2658 256.139 42.406C257.035 40.356 257.081 38.0351 256.269 35.9508C255.457 33.8666 253.853 32.1885 251.808 31.2836Z"
                                        stroke="#08111F"
                                        strokeWidth="1.9"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    ></path>
                                    <path
                                        d="M288.702 211.325C287.761 210.838 286.733 210.541 285.678 210.451C284.622 210.361 283.558 210.479 282.547 210.801C281.539 211.122 280.601 211.639 279.792 212.322C278.982 213.006 278.315 213.843 277.827 214.784C277.827 214.784 272.561 225.069 268.137 224.755L290.136 236.129C287.3 232.701 292.161 222.202 292.161 222.202C292.648 221.26 292.947 220.232 293.035 219.176C293.125 218.12 293.007 217.057 292.686 216.047C292.364 215.037 291.848 214.1 291.164 213.29C290.48 212.48 289.644 211.812 288.702 211.325Z"
                                        stroke="#08111F"
                                        strokeWidth="1.9"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    ></path>
                                    <path
                                        d="M282.75 232.327C282.255 233.286 281.397 234.008 280.369 234.336C279.341 234.662 278.226 234.567 277.266 234.072C276.307 233.577 275.585 232.719 275.257 231.691C274.931 230.662 275.026 229.547 275.521 228.588"
                                        stroke="#08111F"
                                        strokeWidth="1.9"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    ></path>
                                    <path d="M312.695 92.2949L306.868 112.362" stroke="#08111F" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"></path>
                                    <path d="M319.8 105.226L299.733 99.3994" stroke="#08111F" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"></path>
                                    <path d="M186.434 236.348C195.285 237.804 204.301 237.97 213.2 236.84" stroke="#08111F" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"></path>
                                    <path d="M244.393 146.045C245.797 155.393 244.285 164.946 240.062 173.403" stroke="#08111F" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"></path>
                                    <path
                                        d="M139.226 258.535C139.441 259.59 139.34 260.684 138.934 261.679C138.528 262.675 137.835 263.527 136.944 264.131C136.053 264.733 135.003 265.058 133.928 265.064C132.852 265.069 131.799 264.756 130.902 264.164C130.004 263.572 129.303 262.725 128.885 261.735C128.468 260.743 128.355 259.65 128.558 258.594C128.762 257.538 129.275 256.566 130.031 255.801C130.787 255.037 131.753 254.514 132.807 254.297C133.507 254.15 134.229 254.143 134.932 254.278C135.634 254.412 136.303 254.683 136.9 255.078C137.497 255.472 138.01 255.98 138.409 256.574C138.808 257.167 139.086 257.833 139.226 258.535Z"
                                        stroke="#08111F"
                                        strokeWidth="1.9"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    ></path>
                                    <path
                                        d="M136.764 241.491C138.853 239.537 141.475 238.247 144.297 237.784C147.12 237.32 150.016 237.704 152.62 238.886C155.225 240.069 157.42 241.997 158.928 244.428C160.437 246.857 161.191 249.681 161.095 252.539C160.999 255.398 160.057 258.163 158.39 260.487C156.722 262.811 154.402 264.587 151.725 265.592C149.047 266.597 146.132 266.786 143.347 266.135C140.562 265.484 138.032 264.021 136.079 261.932C133.461 259.129 132.062 255.403 132.191 251.569C132.319 247.736 133.964 244.111 136.764 241.491Z"
                                        stroke="#08111F"
                                        strokeWidth="1.9"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    ></path>
                                    <path
                                        d="M100.837 193.848C100.837 193.848 112.989 228.467 158.237 208.898L185.976 196.866C186.32 209.956 187.045 232.111 185.943 246.631C194.392 249.204 203.402 249.291 211.899 246.881C215.296 223.821 217.921 187.421 209.126 173.684C197.731 155.885 162.698 167.296 162.698 167.296"
                                        stroke="#08111F"
                                        strokeWidth="1.9"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    ></path>
                                    <path
                                        d="M95.7317 112.583C94.2303 111.513 92.9112 110.208 91.8252 108.718L95.1347 117.036"
                                        stroke="#08111F"
                                        strokeWidth="1.9"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    ></path>
                                </svg>
                            </div>
                            <div className="hidden dark:block">
                                <svg className="mx-auto" width="328" height="328" viewBox="0 0 328 328" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M256.296 146.855L206.276 143.116C201.431 142.749 196.568 143.55 192.098 145.453L178.792 151.124C177.003 154.373 174.804 157.378 172.249 160.067C165.83 166.922 141.213 179.667 128.22 182.346C125.158 182.891 122.003 182.34 119.308 180.788C113.421 185.512 107.253 189.872 100.837 193.848C100.837 193.848 112.989 228.467 158.237 208.898L194.226 193.287L186.343 212.201C186.561 223.014 186.623 237.191 185.907 246.641C194.356 249.214 203.368 249.301 211.865 246.889C215.259 223.83 217.846 187.435 209.059 173.694L252.061 173.289C257.48 163.529 257.002 157.979 256.296 146.855Z"
                                        fill="#B476E5"
                                    ></path>
                                    <path
                                        d="M176.4 133.457L181.635 110.429C181.751 109.925 181.661 109.396 181.387 108.958C181.112 108.519 180.674 108.208 180.171 108.092C179.667 107.977 179.137 108.066 178.699 108.341C178.26 108.615 177.95 109.053 177.833 109.557L171.664 136.697"
                                        fill="#B476E5"
                                    ></path>
                                    <path
                                        d="M176.4 133.457L181.635 110.429C181.751 109.925 181.661 109.396 181.387 108.958C181.112 108.519 180.674 108.208 180.171 108.092C179.667 107.977 179.137 108.066 178.699 108.341C178.26 108.615 177.95 109.053 177.833 109.557L171.664 136.697C172.44 139.559 174.524 143.397 176.4 133.457Z"
                                        fill="#B476E5"
                                    ></path>
                                    <path
                                        d="M172.349 46.2072C172.349 50.0714 171.203 53.8487 169.056 57.0616C166.909 60.2745 163.858 62.7786 160.288 64.2574C156.718 65.7362 152.79 66.1231 149 65.3692C145.21 64.6154 141.729 62.7547 138.997 60.0223C136.264 57.2899 134.404 53.8086 133.65 50.0188C132.896 46.2289 133.283 42.3006 134.761 38.7306C136.24 35.1607 138.744 32.1093 141.957 29.9625C145.17 27.8158 148.948 26.6699 152.812 26.6699C157.992 26.673 162.96 28.7324 166.624 32.3957C170.286 36.0589 172.346 41.0266 172.349 46.2072Z"
                                        fill="#B476E5"
                                    ></path>
                                    <path
                                        d="M274.372 149.317C270.787 157.817 265.722 165.614 259.415 172.345C262.874 172.874 266.332 173.657 269.293 174.121C272.376 172.776 275.267 171.028 277.889 168.92C286.089 162.314 302.981 154.119 306.681 149.445C299.982 148.476 283.592 149.13 274.372 149.317Z"
                                        fill="#47BDFF"
                                    ></path>
                                    <path
                                        d="M210.987 265.857C202.353 262.597 194.364 257.828 187.399 251.771C186.994 255.232 186.371 258.722 185.997 261.713C187.458 264.747 189.313 267.576 191.512 270.126C198.4 278.041 207.219 294.618 212.012 298.17C212.764 291.44 211.519 275.081 210.987 265.857Z"
                                        fill="#47BDFF"
                                    ></path>
                                    <path
                                        d="M104.015 167.079C103.392 167.39 102.738 167.671 102.083 167.951C99.027 164.359 96.1554 160.616 93.4797 156.733C93.7602 157.389 102.36 175.99 116.632 183.001C117.566 182.253 118.47 181.537 119.311 180.82C113.98 177.922 108.44 172.313 104.015 167.079Z"
                                        fill="#47BDFF"
                                    ></path>
                                    <path d="M185.966 196.836C185.966 196.836 186.246 203.411 186.402 212.167L194.223 193.284L185.966 196.836Z" fill="#47BDFF"></path>
                                    <path
                                        d="M102.052 85.3147C102.052 85.3147 96.5957 75.0926 83.7611 81.3262C70.9264 87.5598 73.416 112.611 73.416 112.611C73.416 112.611 62.0098 118.064 55.9336 127.256C46.5232 141.496 51.2612 162.997 80.5237 162.997C79.1287 156.859 78.6458 150.548 79.0904 144.269C79.8694 133.208 83.889 123.081 87.4412 112.704C91.9709 99.2908 90.9984 100.363 92.5826 95.4417C88.8106 91.8583 93.2993 87.5582 95.3247 91.0465C96.1824 92.4569 96.3874 92.5126 97.073 92.7275C100.786 93.8902 107.523 95.1875 111.177 93.9772C111.182 93.8821 111.493 85.3147 102.052 85.3147Z"
                                        fill="#47BDFF"
                                    ></path>
                                    <path d="M95.1347 117.035L91.8008 108.685C92.9129 110.175 94.2234 111.506 95.6958 112.642C95.4217 114.094 95.2344 115.561 95.1347 117.035Z" fill="#47BDFF"></path>
                                    <path
                                        d="M139.226 258.535C139.442 259.59 139.34 260.684 138.934 261.679C138.528 262.675 137.835 263.527 136.944 264.131C136.053 264.733 135.004 265.058 133.928 265.064C132.853 265.069 131.8 264.756 130.902 264.164C130.004 263.572 129.303 262.725 128.886 261.735C128.468 260.743 128.355 259.65 128.559 258.594C128.763 257.538 129.275 256.566 130.031 255.801C130.787 255.037 131.754 254.514 132.807 254.297C133.507 254.15 134.229 254.143 134.932 254.278C135.634 254.412 136.304 254.683 136.901 255.078C137.497 255.472 138.01 255.98 138.409 256.574C138.809 257.167 139.086 257.833 139.226 258.535Z"
                                        fill="#47BDFF"
                                    ></path>
                                    <path
                                        d="M172.349 46.2072C172.349 50.0714 171.203 53.8487 169.056 57.0616C166.909 60.2745 163.858 62.7786 160.288 64.2574C156.718 65.7362 152.79 66.1231 149 65.3692C145.21 64.6154 141.729 62.7547 138.997 60.0223C136.264 57.2899 134.404 53.8086 133.65 50.0188C132.896 46.2289 133.283 42.3006 134.761 38.7306C136.24 35.1607 138.744 32.1093 141.957 29.9625C145.17 27.8158 148.948 26.6699 152.812 26.6699C157.992 26.673 162.96 28.7324 166.624 32.3957C170.286 36.0589 172.346 41.0266 172.349 46.2072Z"
                                        stroke="white"
                                        strokeWidth="1.9"
                                    ></path>
                                    <path
                                        d="M215.069 208.21L231.179 216.343C234.485 218.007 238.318 218.292 241.834 217.136C245.352 215.98 248.266 213.476 249.939 210.173L268.386 173.653"
                                        stroke="white"
                                        strokeWidth="1.9"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    ></path>
                                    <path
                                        d="M280.071 150.532L291.444 128.035C293.109 124.728 293.394 120.896 292.238 117.38C291.082 113.863 288.577 110.949 285.274 109.276L171.44 51.7656M106.913 126.608L139.939 61.1864"
                                        stroke="white"
                                        strokeWidth="1.9"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    ></path>
                                    <path d="M291.974 116.505L196.903 131.836L161.762 63.5879" stroke="white" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"></path>
                                    <path
                                        d="M144.812 213.413C137.719 221.211 129.129 227.501 119.553 231.906C109.977 236.312 99.6115 238.744 89.0751 239.058C78.5388 239.371 68.0474 237.559 58.2264 233.729C48.4056 229.9 39.4566 224.132 31.9133 216.77C24.3699 209.406 18.3867 200.601 14.3205 190.876C10.2543 181.151 8.18852 170.706 8.2463 160.165C8.30407 149.624 10.4843 139.203 14.6568 129.523C18.8293 119.843 24.9088 111.103 32.5324 103.823"
                                        stroke="white"
                                        strokeWidth="1.9"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    ></path>
                                    <path
                                        d="M95.1345 119.622C95.0469 117.26 95.2475 114.897 95.7314 112.583C99.5297 115.124 102.669 113.544 104.973 110.258C107.928 105.475 109.445 99.9421 109.343 94.3203"
                                        stroke="white"
                                        strokeWidth="1.9"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    ></path>
                                    <path
                                        d="M93.4794 156.734C96.1541 160.617 99.0244 164.36 102.08 167.951C106.99 165.893 111.514 163.012 115.455 159.433C118.376 156.783 120.996 153.819 123.268 150.595C117.892 143.565 112.909 136.241 108.344 128.659C106.121 124.961 102.784 122.061 98.8111 120.377C97.1071 119.715 95.2672 119.479 93.4515 119.691C92.1031 120.045 90.6906 120.076 89.3278 119.783C87.9651 119.489 86.6906 118.879 85.6074 118.002"
                                        stroke="white"
                                        strokeWidth="1.9"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    ></path>
                                    <path
                                        d="M256.545 149.286C260.782 149.442 269.196 149.411 274.337 149.317C270.762 157.814 265.709 165.611 259.413 172.345C257.824 172.095 254.458 171.752 252.932 171.659"
                                        stroke="white"
                                        strokeWidth="1.9"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    ></path>
                                    <path
                                        d="M306.679 149.441C308.455 149.691 309.597 150.097 309.733 150.657C310.596 154.196 292.073 162.793 283.745 169.508C281.323 171.486 278.614 173.084 275.709 174.245C273.591 174.633 271.416 174.592 269.313 174.12C272.402 172.779 275.296 171.03 277.92 168.92C286.097 162.327 302.973 154.147 306.679 149.441Z"
                                        stroke="white"
                                        strokeWidth="1.9"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    ></path>
                                    <path
                                        d="M274.372 149.317C283.595 149.13 299.985 148.476 306.68 149.442C302.972 154.116 286.089 162.319 277.888 168.917C275.265 171.027 272.374 172.777 269.288 174.12C266.327 173.653 262.869 172.874 259.41 172.344C265.719 165.614 270.785 157.817 274.372 149.317Z"
                                        stroke="white"
                                        strokeWidth="1.9"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    ></path>
                                    <path
                                        d="M210.614 247.255C210.333 251.929 210.614 258.815 210.988 265.888C202.365 262.621 194.389 257.852 187.431 251.804C187.618 250.215 187.742 248.626 187.773 247.13"
                                        stroke="white"
                                        strokeWidth="1.9"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    ></path>
                                    <path
                                        d="M212.016 298.17C211.829 299.974 211.489 301.106 210.925 301.286C207.45 302.393 198.144 284.058 191.138 275.985C189.062 273.631 187.36 270.973 186.09 268.101C185.635 265.997 185.602 263.822 185.997 261.705C187.453 264.742 189.308 267.571 191.512 270.118C198.4 278.067 207.217 294.618 212.016 298.17Z"
                                        stroke="white"
                                        strokeWidth="1.9"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    ></path>
                                    <path
                                        d="M210.987 265.857C211.517 275.081 212.763 291.441 212.015 298.165C207.217 294.613 198.377 278.054 191.515 270.121C189.313 267.573 187.458 264.744 186 261.708C186.374 258.717 186.997 255.225 187.402 251.767C194.366 257.825 202.352 262.596 210.987 265.857Z"
                                        stroke="white"
                                        strokeWidth="1.9"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    ></path>
                                    <path d="M116.635 183.001C102.364 175.99 93.7635 157.388 93.4797 156.733" stroke="white" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"></path>
                                    <path
                                        d="M104.016 167.078C108.444 172.313 113.99 177.948 119.315 180.854C122.017 182.386 125.169 182.925 128.227 182.381C141.232 179.757 165.837 166.957 172.256 160.102C183.88 147.687 182.926 138.229 181.915 122.429C181.505 116.01 180.699 116.164 179.734 119.149C178.299 123.603 176.489 134.401 174.998 138.655C174.859 139.084 174.572 139.448 174.188 139.684C173.04 140.34 172.317 138.905 171.728 136.879C171.103 134.729 170.657 131.866 170.076 130.155C169.058 127.139 166.98 124.391 166.649 133.24C166.455 138.444 166.442 147.406 160.791 150.69C156.392 153.196 151.809 155.363 147.08 157.171C142.189 159.086 137.065 160.344 131.843 160.91C129.008 161.061 125.206 157.825 121.592 152.809"
                                        stroke="white"
                                        strokeWidth="1.9"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    ></path>
                                    <path
                                        d="M176.399 133.457L181.634 110.429C181.751 109.925 181.661 109.396 181.387 108.958C181.111 108.519 180.673 108.208 180.17 108.092C179.666 107.977 179.137 108.066 178.699 108.341C178.259 108.615 177.949 109.053 177.833 109.557L171.663 136.697"
                                        stroke="white"
                                        strokeWidth="1.9"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    ></path>
                                    <path
                                        d="M185.976 196.866C190.837 194.778 194.231 193.284 194.231 193.284L186.402 212.167"
                                        stroke="white"
                                        strokeWidth="1.9"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    ></path>
                                    <path
                                        d="M119.315 180.851C113.428 185.559 107.257 189.9 100.837 193.848C90.3679 186.542 83.0982 175.499 80.5237 162.996"
                                        stroke="white"
                                        strokeWidth="1.9"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    ></path>
                                    <path
                                        d="M178.768 151.125L193.382 144.924C197.001 143.395 200.931 142.743 204.848 143.023L256.295 146.856C257.453 157.623 257.315 163.815 252.058 173.28L209.117 173.685"
                                        stroke="white"
                                        strokeWidth="1.9"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    ></path>
                                    <path
                                        d="M102.052 85.3147C102.052 85.3147 96.5957 75.0926 83.7611 81.3262C70.9264 87.5598 73.416 112.611 73.416 112.611C73.416 112.611 62.0098 118.064 55.9336 127.256C46.5232 141.496 51.2612 162.997 80.5237 162.997C79.1287 156.859 78.6458 150.548 79.0904 144.269C79.8694 133.208 83.889 123.081 87.4412 112.704C88.2514 110.305 90.1833 104.447 90.8377 102.015C91.4297 99.7418 91.7102 98.151 92.5826 95.4417C88.8106 91.8583 93.2993 87.5582 95.3247 91.0465C96.2185 92.5225 96.3924 92.4372 97.3714 92.7603C99.7954 93.5573 106.326 95.3663 111.185 93.9083C111.182 93.9132 111.493 85.3147 102.052 85.3147Z"
                                        stroke="white"
                                        strokeWidth="1.9"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    ></path>
                                    <path
                                        d="M40.5402 90.6723C29.4937 96.0007 19.1002 102.589 9.56714 110.305C9.29884 110.472 9.07503 110.701 8.9149 110.974C8.75477 111.246 8.66313 111.553 8.64781 111.869C8.63247 112.184 8.69396 112.499 8.82695 112.785C8.95993 113.072 9.16047 113.322 9.41134 113.514L16.5159 119.154C20.8209 113.508 26.6576 108.735 32.5223 103.805C28.0082 109.645 24.0548 115.897 20.7143 122.478L28.3583 128.533C28.605 128.729 28.8951 128.863 29.2042 128.923C29.5134 128.984 29.8323 128.969 30.1346 128.88C30.4368 128.792 30.7135 128.632 30.9412 128.414C31.1688 128.197 31.341 127.928 31.4432 127.63L43.4693 92.988C43.6097 92.5997 43.6244 92.1769 43.5114 91.7797C43.3983 91.3825 43.1631 91.0308 42.8392 90.7748C42.5151 90.5187 42.1187 90.3709 41.7061 90.3525C41.2936 90.3342 40.8856 90.446 40.5402 90.6723Z"
                                        stroke="white"
                                        strokeWidth="1.9"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    ></path>
                                    <path
                                        d="M251.808 31.2836C245.607 28.1971 238.659 32.5956 239.656 39.0736L236.758 41.7517L240.746 42.0633C244.267 48.0148 253.21 48.2658 256.139 42.406C257.035 40.356 257.081 38.0351 256.269 35.9508C255.457 33.8666 253.853 32.1885 251.808 31.2836Z"
                                        stroke="white"
                                        strokeWidth="1.9"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    ></path>
                                    <path
                                        d="M288.702 211.325C287.761 210.838 286.733 210.541 285.678 210.451C284.622 210.361 283.558 210.479 282.547 210.801C281.539 211.122 280.601 211.639 279.792 212.322C278.982 213.006 278.315 213.843 277.827 214.784C277.827 214.784 272.561 225.069 268.137 224.755L290.136 236.129C287.3 232.701 292.161 222.202 292.161 222.202C292.648 221.26 292.947 220.232 293.035 219.176C293.125 218.12 293.007 217.057 292.686 216.047C292.364 215.037 291.848 214.1 291.164 213.29C290.48 212.48 289.644 211.812 288.702 211.325Z"
                                        stroke="white"
                                        strokeWidth="1.9"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    ></path>
                                    <path
                                        d="M282.75 232.327C282.255 233.286 281.397 234.008 280.369 234.336C279.341 234.662 278.226 234.567 277.266 234.072C276.307 233.577 275.585 232.719 275.257 231.691C274.931 230.662 275.026 229.547 275.521 228.588"
                                        stroke="white"
                                        strokeWidth="1.9"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    ></path>
                                    <path d="M312.695 92.2949L306.868 112.362" stroke="white" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"></path>
                                    <path d="M319.8 105.226L299.733 99.3994" stroke="white" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"></path>
                                    <path d="M186.434 236.348C195.285 237.804 204.301 237.97 213.2 236.84" stroke="white" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"></path>
                                    <path d="M244.393 146.045C245.797 155.393 244.285 164.946 240.062 173.403" stroke="white" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"></path>
                                    <path
                                        d="M139.226 258.535C139.441 259.59 139.34 260.684 138.934 261.679C138.528 262.675 137.835 263.527 136.944 264.131C136.053 264.733 135.003 265.058 133.928 265.064C132.852 265.069 131.799 264.756 130.902 264.164C130.004 263.572 129.303 262.725 128.885 261.735C128.468 260.743 128.355 259.65 128.558 258.594C128.762 257.538 129.275 256.566 130.031 255.801C130.787 255.037 131.753 254.514 132.807 254.297C133.507 254.15 134.229 254.143 134.932 254.278C135.634 254.412 136.303 254.683 136.9 255.078C137.497 255.472 138.01 255.98 138.409 256.574C138.808 257.167 139.086 257.833 139.226 258.535Z"
                                        stroke="white"
                                        strokeWidth="1.9"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    ></path>
                                    <path
                                        d="M136.764 241.491C138.853 239.537 141.475 238.247 144.297 237.784C147.12 237.32 150.016 237.704 152.62 238.886C155.225 240.069 157.42 241.997 158.928 244.428C160.437 246.857 161.19 249.681 161.095 252.539C160.999 255.398 160.057 258.163 158.39 260.487C156.722 262.811 154.402 264.587 151.725 265.592C149.047 266.597 146.131 266.786 143.346 266.135C140.562 265.484 138.032 264.021 136.079 261.932C133.461 259.129 132.062 255.403 132.191 251.569C132.319 247.736 133.964 244.111 136.764 241.491Z"
                                        stroke="white"
                                        strokeWidth="1.9"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    ></path>
                                    <path
                                        d="M100.837 193.848C100.837 193.848 112.989 228.467 158.237 208.898L185.976 196.866C186.32 209.956 187.045 232.111 185.943 246.631C194.392 249.204 203.402 249.291 211.899 246.881C215.296 223.821 217.921 187.421 209.126 173.684C197.731 155.885 162.697 167.296 162.697 167.296"
                                        stroke="white"
                                        strokeWidth="1.9"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    ></path>
                                    <path
                                        d="M95.7317 112.583C94.2303 111.513 92.9112 110.208 91.8252 108.718L95.1347 117.036"
                                        stroke="white"
                                        strokeWidth="1.9"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    ></path>
                                </svg>
                            </div>
                        </div>
                        <form action="" className="rounded-3xl bg-white px-4 py-12 dark:bg-[#101626] lg:w-2/3 lg:px-8">
                            <div className="grid gap-10 sm:grid-cols-2">
                                <div className="relative">
                                    <input
                                        type="text"
                                        name="name"
                                        className="w-full rounded-2xl border-2 border-gray/20 bg-transparent p-4 font-bold outline-none transition focus:border-secondary ltr:pr-12 rtl:pl-12"
                                    />
                                    <label className="absolute -top-3 bg-white px-2 font-bold ltr:left-6 rtl:right-6 dark:bg-[#101626] dark:text-white">Full Name</label>
                                    <svg
                                        width="20"
                                        height="22"
                                        viewBox="0 0 20 22"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="absolute top-1/2 -translate-y-1/2 ltr:right-4 rtl:left-4 dark:text-white"
                                    >
                                        <path
                                            d="M5.42855 5.57875C5.42855 8.10348 7.47525 10.1502 9.99998 10.1502C12.5247 10.1502 14.5714 8.10348 14.5714 5.57875C14.5714 3.05402 12.5247 1.00732 9.99998 1.00732"
                                            stroke="currentColor"
                                            strokeWidth="1.8"
                                            strokeLinecap="round"
                                        />
                                        <path
                                            d="M2 16.9328C2 15.9495 2.61812 15.0724 3.5441 14.7417V14.7417C7.71891 13.2507 12.2811 13.2507 16.4559 14.7417V14.7417C17.3819 15.0724 18 15.9495 18 16.9328V18.7014C18 19.9185 16.922 20.8535 15.7172 20.6813L13.8184 20.4101C11.2856 20.0483 8.71435 20.0483 6.18162 20.4101L4.28284 20.6813C3.07798 20.8535 2 19.9185 2 18.7014V16.9328Z"
                                            stroke="currentColor"
                                            strokeWidth="1.8"
                                        />
                                    </svg>
                                </div>
                                <div className="relative">
                                    <input
                                        type="email"
                                        name="email"
                                        className="w-full rounded-2xl border-2 border-gray/20 bg-transparent p-4 font-bold outline-none transition focus:border-secondary ltr:pr-12 rtl:pl-12"
                                    />
                                    <label className="absolute -top-3 bg-white px-2 font-bold ltr:left-6 rtl:right-6 dark:bg-[#101626] dark:text-white">Email Address</label>
                                    <svg
                                        width="22"
                                        height="21"
                                        viewBox="0 0 22 21"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="absolute top-1/2 -translate-y-1/2 ltr:right-4 rtl:left-4 dark:text-white"
                                    >
                                        <path
                                            d="M1 8.00732V7.00732C1 4.2459 3.23858 2.00732 6 2.00732H16C18.7614 2.00732 21 4.2459 21 7.00732V13.0073C21 15.7687 18.7614 18.0073 16 18.0073H6C3.23858 18.0073 1 15.7687 1 13.0073V12.0073"
                                            stroke="currentColor"
                                            strokeWidth="1.8"
                                            strokeLinecap="round"
                                        />
                                        <path
                                            d="M5 7.00732L9.8 10.6073C10.5111 11.1407 11.4889 11.1407 12.2 10.6073L17 7.00732"
                                            stroke="currentColor"
                                            strokeWidth="1.8"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </div>
                                <div className="relative">
                                    <input
                                        type="text"
                                        name="mobile"
                                        className="w-full rounded-2xl border-2 border-gray/20 bg-transparent p-4 font-bold outline-none transition focus:border-secondary ltr:pr-12 rtl:pl-12"
                                    />
                                    <label className="absolute -top-3 bg-white px-2 font-bold ltr:left-6 rtl:right-6 dark:bg-[#101626] dark:text-white">Mobile Number</label>
                                    <svg
                                        width="22"
                                        height="22"
                                        viewBox="0 0 22 22"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="absolute top-1/2 -translate-y-1/2 ltr:right-4 rtl:left-4 dark:text-white"
                                    >
                                        <path
                                            d="M6.45241 1.40806C5.45292 0.783702 4.14202 0.887138 3.2983 1.73086L1.86856 3.1606C-0.302899 5.33207 1.73747 10.8931 6.42586 15.5815C11.1142 20.2699 16.6753 22.3102 18.8467 20.1388L20.2765 18.709C21.2635 17.722 21.2374 16.0956 20.2182 15.0764L18.0036 12.8619C16.9844 11.8426 15.358 11.8165 14.371 12.8036L14.0639 13.1107C13.531 13.6436 12.6713 13.6957 12.0713 13.2005C11.4925 12.7229 10.9159 12.208 10.3576 11.6497C9.79933 11.0914 9.28441 10.5149 8.80678 9.93607C8.31161 9.33601 8.36374 8.47631 8.89666 7.9434L9.20375 7.63631C9.98187 6.85819 10.1303 5.68271 9.65898 4.72062"
                                            stroke="currentColor"
                                            strokeWidth="1.8"
                                            strokeLinecap="round"
                                        />
                                    </svg>
                                </div>
                                <div className="relative">
                                    <input
                                        type="text"
                                        name="city"
                                        className="w-full rounded-2xl border-2 border-gray/20 bg-transparent p-4 font-bold outline-none transition focus:border-secondary ltr:pr-12 rtl:pl-12"
                                    />
                                    <label className="absolute -top-3 bg-white px-2 font-bold ltr:left-6 rtl:right-6 dark:bg-[#101626] dark:text-white">City</label>
                                    <svg
                                        width="20"
                                        height="22"
                                        viewBox="0 0 20 22"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="absolute top-1/2 -translate-y-1/2 ltr:right-4 rtl:left-4 dark:text-white"
                                    >
                                        <path
                                            d="M5.89416 2.31259C7.20149 1.48625 8.75475 1.00732 10.4211 1.00732C15.0719 1.00732 18.8421 4.73828 18.8421 9.34066C18.8421 15.0541 12.1053 21.0073 10.4211 21.0073C8.73684 21.0073 2 15.0541 2 9.34066C2 7.87581 2.38193 6.49924 3.05263 5.30315"
                                            stroke="currentColor"
                                            strokeWidth="1.8"
                                            strokeLinecap="round"
                                        />
                                        <path
                                            d="M13.4571 9.77392C13.5365 9.49702 13.579 9.20456 13.579 8.90216C13.579 7.15811 12.1651 5.74427 10.4211 5.74427C8.67702 5.74427 7.26318 7.15811 7.26318 8.90216C7.26318 10.6462 8.67702 12.0601 10.4211 12.0601C10.6633 12.0601 10.8991 12.0328 11.1256 11.9812"
                                            stroke="currentColor"
                                            strokeWidth="1.8"
                                            strokeLinecap="round"
                                        />
                                    </svg>
                                </div>
                            </div>
                            <div className="relative mt-10">
                                <input
                                    type="text"
                                    name="message"
                                    className="w-full rounded-2xl border-2 border-gray/20 bg-transparent p-4 font-bold outline-none transition focus:border-secondary ltr:pr-12 rtl:pl-12"
                                />
                                <label className="absolute -top-3 bg-white px-2 font-bold ltr:left-6 rtl:right-6 dark:bg-[#101626] dark:text-white">Message</label>
                                <svg
                                    width="22"
                                    height="22"
                                    viewBox="0 0 22 22"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="absolute top-1/2 -translate-y-1/2 ltr:right-4 rtl:left-4 dark:text-white"
                                >
                                    <path
                                        d="M1 11.467V18.9267C1 19.7652 1.96993 20.2314 2.6247 19.7076L5.45217 17.4456C5.8068 17.1619 6.24742 17.0073 6.70156 17.0073H16C18.7614 17.0073 21 14.7687 21 12.0073V6.00732C21 3.2459 18.7614 1.00732 16 1.00732H6C3.23858 1.00732 1 3.2459 1 6.00732V7.62225"
                                        stroke="currentColor"
                                        strokeWidth="1.8"
                                        strokeLinecap="round"
                                    />
                                    <circle cx="6.05005" cy="9.05713" r="1.25" fill="currentColor" />
                                    <circle cx="11.05" cy="9.05713" r="1.25" fill="currentColor" />
                                    <circle cx="16.05" cy="9.05713" r="1.25" fill="currentColor" />
                                </svg>
                            </div>
                            <div className="mt-10 text-center ltr:lg:text-right rtl:lg:text-left">
                                <button type="button" className="btn bg-gray px-12 capitalize text-white dark:bg-white dark:text-black dark:hover:bg-secondary">
                                    Send Message
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Marketing;
