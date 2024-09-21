import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay, Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Testimonial = ({
    showTitle = true,
    type = 'common',
    feedbacks = [
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
    ],
    className = '',
}) => {
    const isRtl = useSelector((state) => state.themeConfig.rtlClass) === 'rtl' ? true : false;

    return (
        <section className={`relative bg-black py-14 dark:bg-transparent lg:py-[100px] ${className}`}>
            {type.toLowerCase() === 'marketing' ? (
                <Swiper
                    loop={true}
                    slidesPerView="auto"
                    spaceBetween={30}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    navigation={{
                        nextEl: '.swiper-button-next2',
                        prevEl: '.swiper-button-prev2',
                    }}
                    modules={[Navigation, Autoplay]}
                    dir={isRtl ? 'rtl' : 'ltr'}
                    key={isRtl ? 'true' : 'false'}
                >
                    {feedbacks.map((feedback) => {
                        return (
                            <SwiperSlide key={feedback.id}>
                                <div className="flex flex-col items-center gap-7 pb-3 sm:pb-[70px] lg:flex-row xl:gap-12">
                                    <div className="relative pl-10 pt-[30px] rtl:rotate-y-180">
                                        <span className="absolute top-0 left-0">
                                            <img src="/assets/images/testimonial-shadow.svg" alt="" />
                                        </span>
                                        <div className="w-full max-w-[347px] overflow-hidden rounded-b-3xl rounded-tl-[200px]">
                                            <img src={feedback.thumbnail} alt="" />
                                        </div>
                                        <span className="absolute -bottom-5 -right-5">
                                            <svg width="42" height="47" viewBox="0 0 42 47" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M1 45.2263C12.6553 45.2263 24.325 39.9256 30.3725 29.8141C35.6466 20.9958 37.7394 10.8446 40.2006 1"
                                                    stroke="url(#paint0_linear_134_9118)"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                />
                                                <defs>
                                                    <linearGradient id="paint0_linear_134_9118" x1="40" y1="6" x2="-2" y2="39.5" gradientUnits="userSpaceOnUse">
                                                        <stop stopColor="#B476E5" />
                                                        <stop offset="1" stopColor="#B476E5" stopOpacity="0" />
                                                    </linearGradient>
                                                </defs>
                                            </svg>
                                        </span>
                                        <span className="absolute top-0 -right-6 hidden md:block">
                                            <img src="/assets/images/blue-quote.png" alt="blue-quote" className="" />
                                        </span>
                                    </div>
                                    <div className="w-full max-w-[570px] lg:mt-[150px]">
                                        <div className="rounded-3xl bg-gray-dark p-6">
                                            <div className="pb-8">
                                                <svg width="96" height="16" viewBox="0 0 96 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M86.2864 2.84744C87.0637 1.5558 88.9363 1.5558 89.7136 2.84744L90.1964 3.64962C90.4756 4.11365 90.9311 4.44459 91.4587 4.56678L92.3708 4.77803C93.8395 5.11816 94.4181 6.8991 93.4299 8.03752L92.8162 8.74454C92.4612 9.15352 92.2872 9.68898 92.334 10.2285L92.4149 11.1613C92.5453 12.6631 91.0303 13.7638 89.6423 13.1757L88.7802 12.8105C88.2815 12.5993 87.7185 12.5993 87.2198 12.8105L86.3577 13.1757C84.9697 13.7638 83.4547 12.6631 83.5851 11.1613L83.666 10.2285C83.7128 9.68899 83.5388 9.15352 83.1838 8.74454L82.5701 8.03752C81.5819 6.89911 82.1605 5.11816 83.6292 4.77803L84.5413 4.56678C85.0689 4.44459 85.5244 4.11365 85.8036 3.64962L86.2864 2.84744Z"
                                                        fill="#7780A1"
                                                    />
                                                    <path
                                                        d="M66.2864 2.84744C67.0637 1.5558 68.9363 1.5558 69.7136 2.84744L70.1964 3.64962C70.4756 4.11365 70.9311 4.44459 71.4587 4.56678L72.3708 4.77803C73.8395 5.11816 74.4181 6.8991 73.4299 8.03752L72.8162 8.74454C72.4612 9.15352 72.2872 9.68898 72.334 10.2285L72.4149 11.1613C72.5453 12.6631 71.0303 13.7638 69.6423 13.1757L68.7802 12.8105C68.2815 12.5993 67.7185 12.5993 67.2198 12.8105L66.3577 13.1757C64.9697 13.7638 63.4547 12.6631 63.5851 11.1613L63.666 10.2285C63.7128 9.68899 63.5388 9.15352 63.1838 8.74454L62.5701 8.03752C61.5819 6.89911 62.1605 5.11816 63.6292 4.77803L64.5413 4.56678C65.0689 4.44459 65.5244 4.11365 65.8036 3.64962L66.2864 2.84744Z"
                                                        fill="#FFBD11"
                                                    />
                                                    <path
                                                        d="M46.2864 2.84744C47.0637 1.5558 48.9363 1.5558 49.7136 2.84744L50.1964 3.64962C50.4756 4.11365 50.9311 4.44459 51.4587 4.56678L52.3708 4.77803C53.8395 5.11816 54.4181 6.8991 53.4299 8.03752L52.8162 8.74454C52.4612 9.15352 52.2872 9.68898 52.334 10.2285L52.4149 11.1613C52.5453 12.6631 51.0303 13.7638 49.6423 13.1757L48.7802 12.8105C48.2815 12.5993 47.7185 12.5993 47.2198 12.8105L46.3577 13.1757C44.9697 13.7638 43.4547 12.6631 43.5851 11.1613L43.666 10.2285C43.7128 9.68899 43.5388 9.15352 43.1838 8.74454L42.5701 8.03752C41.5819 6.89911 42.1605 5.11816 43.6292 4.77803L44.5413 4.56678C45.0689 4.44459 45.5244 4.11365 45.8036 3.64962L46.2864 2.84744Z"
                                                        fill="#FFBD11"
                                                    />
                                                    <path
                                                        d="M26.2864 2.84744C27.0637 1.5558 28.9363 1.5558 29.7136 2.84744L30.1964 3.64962C30.4756 4.11365 30.9311 4.44459 31.4587 4.56678L32.3708 4.77803C33.8395 5.11816 34.4181 6.8991 33.4299 8.03752L32.8162 8.74454C32.4612 9.15352 32.2872 9.68898 32.334 10.2285L32.4149 11.1613C32.5453 12.6631 31.0303 13.7638 29.6423 13.1757L28.7802 12.8105C28.2815 12.5993 27.7185 12.5993 27.2198 12.8105L26.3577 13.1757C24.9697 13.7638 23.4547 12.6631 23.5851 11.1613L23.666 10.2285C23.7128 9.68899 23.5388 9.15352 23.1838 8.74454L22.5701 8.03752C21.5819 6.89911 22.1605 5.11816 23.6292 4.77803L24.5413 4.56678C25.0689 4.44459 25.5244 4.11365 25.8036 3.64962L26.2864 2.84744Z"
                                                        fill="#FFBD11"
                                                    />
                                                    <path
                                                        d="M6.28638 2.84744C7.0637 1.5558 8.9363 1.5558 9.71362 2.84744L10.1964 3.64962C10.4756 4.11365 10.9311 4.44459 11.4587 4.56678L12.3708 4.77803C13.8395 5.11816 14.4181 6.8991 13.4299 8.03752L12.8162 8.74454C12.4612 9.15352 12.2872 9.68898 12.334 10.2285L12.4149 11.1613C12.5453 12.6631 11.0303 13.7638 9.64225 13.1757L8.78018 12.8105C8.28151 12.5993 7.71849 12.5993 7.21982 12.8105L6.35775 13.1757C4.96968 13.7638 3.45472 12.6631 3.58506 11.1613L3.66601 10.2285C3.71283 9.68899 3.53885 9.15352 3.18383 8.74454L2.57009 8.03752C1.58187 6.89911 2.16054 5.11816 3.62916 4.77803L4.54126 4.56678C5.06887 4.44459 5.52437 4.11365 5.80362 3.64962L6.28638 2.84744Z"
                                                        fill="#FFBD11"
                                                    />
                                                </svg>
                                            </div>
                                            <p className="font-medium italic text-white">{feedback.message}</p>
                                            <div className="relative mt-12">
                                                <h5 className="font-extrabold text-primary">{feedback.name}</h5>
                                                <h6 className="text-sm font-bold italic">{feedback.role}</h6>
                                                <span className="absolute right-0 bottom-0">
                                                    <svg width="100" height="73" viewBox="0 0 100 73" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <g opacity="0.05">
                                                            <path
                                                                d="M79.5222 0C85.1084 0 89.8948 2.12795 93.8833 6.1167C98.1392 10.1054 100 14.8935 100 20.2128C100 25.2666 98.4045 29.7875 94.9462 33.7764C91.4881 38.0323 85.9039 38.8302 81.3825 39.0952C82.1803 45.7443 85.9037 52.6589 89.3619 57.4472C89.8944 58.245 90.425 59.0427 91.2246 59.5752C92.2876 60.6382 92.2876 62.2356 91.2246 63.2986L83.5126 71.543C82.4495 72.8732 80.3216 72.606 79.2567 71.543C76.0657 68.0849 72.8731 63.831 70.2144 59.5751C62.7675 47.6072 59.044 35.6393 59.044 23.669C59.044 16.7544 61.1719 10.9032 65.1606 6.64734C69.1493 2.39334 74.2029 0.000144939 79.5217 0.000144939L79.5222 0Z"
                                                                fill="#93A2B2"
                                                            />
                                                            <path
                                                                d="M20.4783 0C26.0645 0 30.8509 2.12795 34.8394 6.1167C39.0952 10.1054 40.9561 14.8935 40.9561 20.2128C40.9561 25.2666 39.3606 29.7875 35.9023 33.7764C32.4442 38.0323 26.86 38.8302 22.3386 39.0952C23.1363 45.7443 26.8597 52.6589 30.318 57.4472C30.8504 58.245 31.381 59.0427 32.1806 59.5752C33.2437 60.6382 33.2437 62.2356 32.1806 63.2986L24.4686 71.543C23.4056 72.8732 21.2776 72.606 20.2128 71.543C17.0218 68.0849 13.8292 63.831 11.1705 59.5751C3.72351 47.6072 7.62939e-06 35.6393 7.62939e-06 23.669C7.62939e-06 16.7544 2.12797 10.9032 6.11671 6.64734C10.1054 2.39334 14.8921 0.000144939 20.4778 0.000144939L20.4783 0Z"
                                                                fill="#93A2B2"
                                                            />
                                                        </g>
                                                    </svg>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        );
                    })}
                    <div className="bottom-0 z-[1] mt-5 flex items-center justify-end gap-4 ltr:right-28 rtl:left-28 sm:absolute sm:mt-0 sm:justify-end">
                        <Link to="#" className="text-sm font-extrabold text-white transition hover:text-secondary dark:hover:text-secondary">
                            {' '}
                            View All{' '}
                        </Link>

                        <button
                            type="button"
                            className="swiper-button-prev2 static mt-0 flex h-10 w-10 items-center justify-center rounded-full bg-white/5 transition after:text-[0px] hover:bg-secondary rtl:rotate-180"
                        >
                            <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M5.95007 1.2002L1.48924 5.3424C1.06317 5.73803 1.06317 6.41236 1.48924 6.80799L5.95007 10.9502"
                                    stroke="white"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                />
                            </svg>
                        </button>

                        <button
                            type="button"
                            className="swiper-button-next2 static mt-0 flex h-10 w-10 items-center justify-center rounded-full bg-white/5 transition after:text-[0px] hover:bg-secondary rtl:rotate-180"
                        >
                            <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M1.05005 10.7998L5.51089 6.6576C5.93695 6.26197 5.93695 5.58764 5.51089 5.19201L1.05005 1.0498"
                                    stroke="white"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                />
                            </svg>
                        </button>
                    </div>
                </Swiper>
            ) : (
                <>
                    {type.toLowerCase() === 'common' && (
                        <div className="absolute top-0 ltr:right-0 rtl:left-0 rtl:-rotate-180">
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
                                    <ellipse
                                        cx="752"
                                        cy="370.646"
                                        rx="106.941"
                                        ry="106.586"
                                        stroke="white"
                                        strokeWidth="3"
                                        strokeMiterlimit="4.62023"
                                        strokeLinecap="round"
                                        strokeDasharray="35 50 15 15"
                                    />
                                </g>
                            </svg>
                        </div>
                    )}
                    {type.toLowerCase() === 'modern-saas' && (
                        <div>
                            <div className="absolute top-0 ltr:left-1/4 rtl:right-1/4 rtl:rotate-y-180">
                                <svg width="191" height="66" viewBox="0 0 191 66" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M170.824 61.5578C175.418 60.5885 180.185 59.2256 183.479 57.6552C184.495 57.171 185.331 56.6855 185.965 56.2111C186.611 55.7268 186.962 55.3161 187.121 55.0099C187.253 54.7559 187.246 54.6023 187.185 54.4414C187.098 54.215 186.83 53.8109 186.087 53.2803C181.964 50.3354 179.058 47.674 177.124 44.6091C175.171 41.5143 174.287 38.1331 173.982 33.8874C173.922 33.0611 174.544 32.343 175.37 32.2835C176.196 32.224 176.914 32.8456 176.974 33.6719C177.257 37.5995 178.051 40.4569 179.661 43.0082C181.29 45.5892 183.83 47.9812 187.831 50.8392L187.112 51.845L187.831 50.8392C188.828 51.5512 189.61 52.3819 189.988 53.3725C190.39 54.4286 190.26 55.4742 189.784 56.3918C189.335 57.2571 188.593 57.9902 187.763 58.6121C186.92 59.2438 185.896 59.8267 184.77 60.3633C180.303 62.4927 173.608 64.1814 168.027 65.1505L168.027 65.1506C166.756 65.371 165.708 64.6347 165.345 63.6195C164.986 62.6159 165.315 61.396 166.397 60.7379L166.397 60.7378L174.882 55.5806C152.61 51.8672 140.004 40.8181 133.482 27.8829C127.159 15.3435 126.631 1.19667 128.247 -9.40786C106.166 13.6399 88.6882 19.9881 73.8366 17.1671C59.2682 14.3999 47.7799 2.8588 37.4629 -8.53095C30.7044 21.1799 11.7482 31.9735 2.43129 33.5822C1.61495 33.7232 0.838896 33.1757 0.697937 32.3593C0.556977 31.543 1.10449 30.7669 1.92083 30.626C10.0533 29.2217 28.4196 19.199 34.7432 -10.1243C35.1562 -12.0396 37.6201 -12.8334 39.0166 -11.2858L39.0167 -11.2857C49.61 0.455029 60.6479 11.6083 74.3964 14.2198C87.9663 16.7974 104.76 11.1066 127.019 -12.4698L127.019 -12.47C127.903 -13.4061 129.149 -13.4012 130.003 -12.992C130.862 -12.5804 131.659 -11.593 131.431 -10.2917C129.624 0.024426 129.93 14.1773 136.16 26.5322C142.345 38.7973 154.454 49.4712 176.659 52.8253C177.798 52.9972 178.531 53.8584 178.738 54.7623C178.948 55.6773 178.65 56.8003 177.626 57.4234L177.626 57.4238L170.824 61.5578ZM128.476 -10.8096C128.476 -10.8095 128.476 -10.8095 128.476 -10.8094ZM176.211 55.7916C176.211 55.7917 176.211 55.7917 176.211 55.7917Z"
                                        fill="url(#paint0_linear_823_12546)"
                                        fillOpacity="0.5"
                                    />
                                    <defs>
                                        <linearGradient id="paint0_linear_823_12546" x1="180" y1="51.5" x2="34" y2="-15.5" gradientUnits="userSpaceOnUse">
                                            <stop stopColor="#B476E5" />
                                            <stop offset="1" stopColor="#B476E5" stopOpacity="0" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                            </div>
                            <div className="absolute top-1/4 hidden ltr:right-4 rtl:left-4 rtl:rotate-y-180 lg:block">
                                <svg width="301" height="322" viewBox="0 0 301 322" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M284.743 4C284.743 1.79086 282.952 0 280.743 0C278.534 0 276.743 1.79086 276.743 4V11.0115C276.743 13.2206 278.534 15.0115 280.743 15.0115C282.952 15.0115 284.743 13.2206 284.743 11.0115V4ZM280.743 28.7715C282.952 28.7715 284.743 30.5623 284.743 32.7715V96.6719H296.066C298.275 96.6719 300.066 98.4627 300.066 100.672C300.066 102.881 298.275 104.672 296.066 104.672H284.743V115.228C284.743 117.437 282.952 119.228 280.743 119.228C278.534 119.228 276.743 117.437 276.743 115.228V104.672H213.361V185.877H225.432C227.641 185.877 229.432 187.668 229.432 189.877C229.432 192.086 227.641 193.877 225.432 193.877H213.361V204.621C213.361 206.831 211.571 208.621 209.361 208.621C207.152 208.621 205.361 206.831 205.361 204.621V193.877H122.547V249.516H134.616C136.826 249.516 138.616 251.306 138.616 253.516C138.616 255.725 136.826 257.516 134.616 257.516H122.547V267.699C122.547 269.908 120.756 271.699 118.547 271.699C116.337 271.699 114.547 269.908 114.547 267.699V257.516H8V317.341C8 319.55 6.20914 321.341 4 321.341C1.79086 321.341 0 319.55 0 317.341V249.516H114.547V185.877H205.361V96.6719H276.743V32.7715C276.743 30.5623 278.534 28.7715 280.743 28.7715Z"
                                        fill="url(#paint0_linear_823_12555)"
                                        fillOpacity="0.3"
                                    />
                                    <defs>
                                        <linearGradient id="paint0_linear_823_12555" x1="177" y1="146" x2="218.5" y2="201.5" gradientUnits="userSpaceOnUse">
                                            <stop stopColor="#47BDFF" />
                                            <stop offset="1" stopColor="#47BDFF" stopOpacity="0" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                            </div>
                        </div>
                    )}
                    <div className="container">
                        <div className={`heading text-center ltr:lg:text-left rtl:lg:text-right ${showTitle ? '' : 'hidden'}`}>
                            <h6>Testimonial</h6>
                            <h4 className="!text-white">Feedback from our clients</h4>
                        </div>
                        <div className={`mx-auto ${type.toLowerCase() === 'common' ? 'lg:w-11/12' : ''} `}>
                            <div className="relative sm:py-12 md:py-0">
                                <Swiper
                                    modules={[Navigation, Autoplay]}
                                    slidesPerView="auto"
                                    spaceBetween={30}
                                    loop={true}
                                    speed={1000}
                                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                                    navigation={{
                                        nextEl: '.testimonial-button-next',
                                        prevEl: '.testimonial-button-prev',
                                    }}
                                    dir={isRtl ? 'rtl' : 'ltr'}
                                    key={isRtl ? 'true' : 'false'}
                                >
                                    {type.toLowerCase() === 'common' &&
                                        feedbacks.map((feedback) => {
                                            return (
                                                <SwiperSlide key={feedback.id}>
                                                    <div className="items-center gap-4 sm:grid sm:grid-cols-3">
                                                        <div className="col-span-2">
                                                            <div className="relative rounded-3xl bg-white/[0.02] p-6">
                                                                <img
                                                                    src="/assets/images/blue-quote.png"
                                                                    alt="blue-quote"
                                                                    className="absolute top-0 ltr:right-0 rtl:left-0 sm:-top-6 ltr:sm:-right-6 rtl:sm:-left-6"
                                                                />
                                                                <div className="pb-8">
                                                                    <svg
                                                                        width="96"
                                                                        height="16"
                                                                        viewBox="0 0 96 16"
                                                                        fill="none"
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                    >
                                                                        <path
                                                                            d="M86.2864 2.84744C87.0637 1.5558 88.9363 1.5558 89.7136 2.84744L90.1964 3.64962C90.4756 4.11365 90.9311 4.44459 91.4587 4.56678L92.3708 4.77803C93.8395 5.11816 94.4181 6.8991 93.4299 8.03752L92.8162 8.74454C92.4612 9.15352 92.2872 9.68898 92.334 10.2285L92.4149 11.1613C92.5453 12.6631 91.0303 13.7638 89.6423 13.1757L88.7802 12.8105C88.2815 12.5993 87.7185 12.5993 87.2198 12.8105L86.3577 13.1757C84.9697 13.7638 83.4547 12.6631 83.5851 11.1613L83.666 10.2285C83.7128 9.68899 83.5388 9.15352 83.1838 8.74454L82.5701 8.03752C81.5819 6.89911 82.1605 5.11816 83.6292 4.77803L84.5413 4.56678C85.0689 4.44459 85.5244 4.11365 85.8036 3.64962L86.2864 2.84744Z"
                                                                            fill="#7780A1"
                                                                        />
                                                                        <path
                                                                            d="M66.2864 2.84744C67.0637 1.5558 68.9363 1.5558 69.7136 2.84744L70.1964 3.64962C70.4756 4.11365 70.9311 4.44459 71.4587 4.56678L72.3708 4.77803C73.8395 5.11816 74.4181 6.8991 73.4299 8.03752L72.8162 8.74454C72.4612 9.15352 72.2872 9.68898 72.334 10.2285L72.4149 11.1613C72.5453 12.6631 71.0303 13.7638 69.6423 13.1757L68.7802 12.8105C68.2815 12.5993 67.7185 12.5993 67.2198 12.8105L66.3577 13.1757C64.9697 13.7638 63.4547 12.6631 63.5851 11.1613L63.666 10.2285C63.7128 9.68899 63.5388 9.15352 63.1838 8.74454L62.5701 8.03752C61.5819 6.89911 62.1605 5.11816 63.6292 4.77803L64.5413 4.56678C65.0689 4.44459 65.5244 4.11365 65.8036 3.64962L66.2864 2.84744Z"
                                                                            fill="#FFBD11"
                                                                        />
                                                                        <path
                                                                            d="M46.2864 2.84744C47.0637 1.5558 48.9363 1.5558 49.7136 2.84744L50.1964 3.64962C50.4756 4.11365 50.9311 4.44459 51.4587 4.56678L52.3708 4.77803C53.8395 5.11816 54.4181 6.8991 53.4299 8.03752L52.8162 8.74454C52.4612 9.15352 52.2872 9.68898 52.334 10.2285L52.4149 11.1613C52.5453 12.6631 51.0303 13.7638 49.6423 13.1757L48.7802 12.8105C48.2815 12.5993 47.7185 12.5993 47.2198 12.8105L46.3577 13.1757C44.9697 13.7638 43.4547 12.6631 43.5851 11.1613L43.666 10.2285C43.7128 9.68899 43.5388 9.15352 43.1838 8.74454L42.5701 8.03752C41.5819 6.89911 42.1605 5.11816 43.6292 4.77803L44.5413 4.56678C45.0689 4.44459 45.5244 4.11365 45.8036 3.64962L46.2864 2.84744Z"
                                                                            fill="#FFBD11"
                                                                        />
                                                                        <path
                                                                            d="M26.2864 2.84744C27.0637 1.5558 28.9363 1.5558 29.7136 2.84744L30.1964 3.64962C30.4756 4.11365 30.9311 4.44459 31.4587 4.56678L32.3708 4.77803C33.8395 5.11816 34.4181 6.8991 33.4299 8.03752L32.8162 8.74454C32.4612 9.15352 32.2872 9.68898 32.334 10.2285L32.4149 11.1613C32.5453 12.6631 31.0303 13.7638 29.6423 13.1757L28.7802 12.8105C28.2815 12.5993 27.7185 12.5993 27.2198 12.8105L26.3577 13.1757C24.9697 13.7638 23.4547 12.6631 23.5851 11.1613L23.666 10.2285C23.7128 9.68899 23.5388 9.15352 23.1838 8.74454L22.5701 8.03752C21.5819 6.89911 22.1605 5.11816 23.6292 4.77803L24.5413 4.56678C25.0689 4.44459 25.5244 4.11365 25.8036 3.64962L26.2864 2.84744Z"
                                                                            fill="#FFBD11"
                                                                        />
                                                                        <path
                                                                            d="M6.28638 2.84744C7.0637 1.5558 8.9363 1.5558 9.71362 2.84744L10.1964 3.64962C10.4756 4.11365 10.9311 4.44459 11.4587 4.56678L12.3708 4.77803C13.8395 5.11816 14.4181 6.8991 13.4299 8.03752L12.8162 8.74454C12.4612 9.15352 12.2872 9.68898 12.334 10.2285L12.4149 11.1613C12.5453 12.6631 11.0303 13.7638 9.64225 13.1757L8.78018 12.8105C8.28151 12.5993 7.71849 12.5993 7.21982 12.8105L6.35775 13.1757C4.96968 13.7638 3.45472 12.6631 3.58506 11.1613L3.66601 10.2285C3.71283 9.68899 3.53885 9.15352 3.18383 8.74454L2.57009 8.03752C1.58187 6.89911 2.16054 5.11816 3.62916 4.77803L4.54126 4.56678C5.06887 4.44459 5.52437 4.11365 5.80362 3.64962L6.28638 2.84744Z"
                                                                            fill="#FFBD11"
                                                                        />
                                                                    </svg>
                                                                </div>
                                                                <p className="relative font-medium italic text-white">
                                                                    {feedback.message}
                                                                    <span className="absolute -left-2 -top-2">
                                                                        <svg
                                                                            width="100"
                                                                            height="73"
                                                                            viewBox="0 0 100 73"
                                                                            fill="none"
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                        >
                                                                            <g opacity="0.05">
                                                                                <path
                                                                                    d="M79.5222 0C85.1084 0 89.8948 2.12795 93.8833 6.1167C98.1392 10.1054 100 14.8935 100 20.2128C100 25.2666 98.4045 29.7875 94.9462 33.7764C91.4881 38.0323 85.9039 38.8302 81.3825 39.0952C82.1803 45.7443 85.9037 52.6589 89.3619 57.4472C89.8944 58.245 90.425 59.0427 91.2246 59.5752C92.2876 60.6382 92.2876 62.2356 91.2246 63.2986L83.5126 71.543C82.4495 72.8732 80.3216 72.606 79.2567 71.543C76.0657 68.0849 72.8731 63.831 70.2144 59.5751C62.7675 47.6072 59.044 35.6393 59.044 23.669C59.044 16.7544 61.1719 10.9032 65.1606 6.64734C69.1493 2.39334 74.2029 0.000144939 79.5217 0.000144939L79.5222 0Z"
                                                                                    fill="#93A2B2"
                                                                                />
                                                                                <path
                                                                                    d="M20.4783 0C26.0645 0 30.8509 2.12795 34.8394 6.1167C39.0952 10.1054 40.9561 14.8935 40.9561 20.2128C40.9561 25.2666 39.3606 29.7875 35.9023 33.7764C32.4442 38.0323 26.86 38.8302 22.3386 39.0952C23.1363 45.7443 26.8597 52.6589 30.318 57.4472C30.8504 58.245 31.381 59.0427 32.1806 59.5752C33.2437 60.6382 33.2437 62.2356 32.1806 63.2986L24.4686 71.543C23.4056 72.8732 21.2776 72.606 20.2128 71.543C17.0218 68.0849 13.8292 63.831 11.1705 59.5751C3.72351 47.6072 7.62939e-06 35.6393 7.62939e-06 23.669C7.62939e-06 16.7544 2.12797 10.9032 6.11671 6.64734C10.1054 2.39334 14.8921 0.000144939 20.4778 0.000144939L20.4783 0Z"
                                                                                    fill="#93A2B2"
                                                                                />
                                                                            </g>
                                                                        </svg>
                                                                    </span>
                                                                </p>
                                                                <div className="mt-12">
                                                                    <h5 className="font-extrabold text-primary">{feedback.name}</h5>
                                                                    <h6 className="text-sm font-bold italic">{feedback.role}</h6>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="mx-auto mt-4 h-20 w-20 max-w-[255px] overflow-hidden rounded-full bg-white ltr:ml-auto rtl:mr-auto dark:bg-gray-dark sm:mt-0 sm:h-auto sm:w-auto sm:rounded-[150px] ltr:sm:mr-0 rtl:sm:ml-0">
                                                            <img src={feedback.thumbnail} alt="testimonial" className="h-full w-full object-cover object-top" />
                                                        </div>
                                                    </div>
                                                </SwiperSlide>
                                            );
                                        })}
                                    {type.toLowerCase() === 'modern-saas' &&
                                        feedbacks.map((feedback) => {
                                            return (
                                                <SwiperSlide key={feedback.id}>
                                                    <div className="mb-6 flex flex-col items-center justify-between gap-6 md:mb-14 md:flex-row">
                                                        <div className="relative rounded-3xl bg-white/[0.02] p-6 md:w-2/3 lg:w-1/2">
                                                            <div className="absolute right-4 top-4">
                                                                <svg width="90" height="73" viewBox="0 0 90 73" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <g opacity="0.05">
                                                                        <path
                                                                            d="M69.4343 72.4434C75.0205 72.4434 79.8069 70.3154 83.7954 66.3267C88.0513 62.338 89.9121 57.5499 89.9121 52.2306C89.9121 47.1768 88.3166 42.6559 84.8583 38.6669C81.4002 34.4111 75.816 33.6131 71.2946 33.3481C72.0924 26.699 75.8158 19.7844 79.274 14.9962C79.8065 14.1984 80.3371 13.4007 81.1367 12.8682C82.1997 11.8052 82.1997 10.2078 81.1367 9.1448L73.4247 0.900398C72.3616 -0.429802 70.2337 -0.162651 69.1688 0.900398C65.9779 4.3585 62.7852 8.6124 60.1266 12.8683C52.6796 24.8362 48.9561 36.8041 48.9561 48.7743C48.9561 55.6889 51.084 61.5401 55.0728 65.796C59.0615 70.05 64.1151 72.4432 69.4339 72.4432L69.4343 72.4434Z"
                                                                            fill="#93A2B2"
                                                                        />
                                                                        <path
                                                                            d="M20.4783 72.4434C26.0645 72.4434 30.8509 70.3154 34.8394 66.3267C39.0952 62.338 40.9561 57.5499 40.9561 52.2306C40.9561 47.1768 39.3606 42.6559 35.9023 38.6669C32.4442 34.4111 26.86 33.6131 22.3386 33.3481C23.1363 26.699 26.8597 19.7844 30.318 14.9962C30.8504 14.1984 31.381 13.4007 32.1806 12.8682C33.2437 11.8052 33.2437 10.2078 32.1806 9.1448L24.4686 0.900398C23.4056 -0.429802 21.2776 -0.162651 20.2128 0.900398C17.0218 4.3585 13.8292 8.6124 11.1705 12.8683C3.72351 24.8362 7.62939e-06 36.8041 7.62939e-06 48.7743C7.62939e-06 55.6889 2.12797 61.5401 6.11671 65.796C10.1054 70.05 14.8921 72.4432 20.4778 72.4432L20.4783 72.4434Z"
                                                                            fill="#93A2B2"
                                                                        />
                                                                    </g>
                                                                </svg>
                                                            </div>
                                                            <div className="pb-8">
                                                                <svg width="96" height="16" viewBox="0 0 96 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path
                                                                        d="M86.2864 2.84744C87.0637 1.5558 88.9363 1.5558 89.7136 2.84744L90.1964 3.64962C90.4756 4.11365 90.9311 4.44459 91.4587 4.56678L92.3708 4.77803C93.8395 5.11816 94.4181 6.8991 93.4299 8.03752L92.8162 8.74454C92.4612 9.15352 92.2872 9.68898 92.334 10.2285L92.4149 11.1613C92.5453 12.6631 91.0303 13.7638 89.6423 13.1757L88.7802 12.8105C88.2815 12.5993 87.7185 12.5993 87.2198 12.8105L86.3577 13.1757C84.9697 13.7638 83.4547 12.6631 83.5851 11.1613L83.666 10.2285C83.7128 9.68899 83.5388 9.15352 83.1838 8.74454L82.5701 8.03752C81.5819 6.89911 82.1605 5.11816 83.6292 4.77803L84.5413 4.56678C85.0689 4.44459 85.5244 4.11365 85.8036 3.64962L86.2864 2.84744Z"
                                                                        fill="#7780A1"
                                                                    />
                                                                    <path
                                                                        d="M66.2864 2.84744C67.0637 1.5558 68.9363 1.5558 69.7136 2.84744L70.1964 3.64962C70.4756 4.11365 70.9311 4.44459 71.4587 4.56678L72.3708 4.77803C73.8395 5.11816 74.4181 6.8991 73.4299 8.03752L72.8162 8.74454C72.4612 9.15352 72.2872 9.68898 72.334 10.2285L72.4149 11.1613C72.5453 12.6631 71.0303 13.7638 69.6423 13.1757L68.7802 12.8105C68.2815 12.5993 67.7185 12.5993 67.2198 12.8105L66.3577 13.1757C64.9697 13.7638 63.4547 12.6631 63.5851 11.1613L63.666 10.2285C63.7128 9.68899 63.5388 9.15352 63.1838 8.74454L62.5701 8.03752C61.5819 6.89911 62.1605 5.11816 63.6292 4.77803L64.5413 4.56678C65.0689 4.44459 65.5244 4.11365 65.8036 3.64962L66.2864 2.84744Z"
                                                                        fill="#FFBD11"
                                                                    />
                                                                    <path
                                                                        d="M46.2864 2.84744C47.0637 1.5558 48.9363 1.5558 49.7136 2.84744L50.1964 3.64962C50.4756 4.11365 50.9311 4.44459 51.4587 4.56678L52.3708 4.77803C53.8395 5.11816 54.4181 6.8991 53.4299 8.03752L52.8162 8.74454C52.4612 9.15352 52.2872 9.68898 52.334 10.2285L52.4149 11.1613C52.5453 12.6631 51.0303 13.7638 49.6423 13.1757L48.7802 12.8105C48.2815 12.5993 47.7185 12.5993 47.2198 12.8105L46.3577 13.1757C44.9697 13.7638 43.4547 12.6631 43.5851 11.1613L43.666 10.2285C43.7128 9.68899 43.5388 9.15352 43.1838 8.74454L42.5701 8.03752C41.5819 6.89911 42.1605 5.11816 43.6292 4.77803L44.5413 4.56678C45.0689 4.44459 45.5244 4.11365 45.8036 3.64962L46.2864 2.84744Z"
                                                                        fill="#FFBD11"
                                                                    />
                                                                    <path
                                                                        d="M26.2864 2.84744C27.0637 1.5558 28.9363 1.5558 29.7136 2.84744L30.1964 3.64962C30.4756 4.11365 30.9311 4.44459 31.4587 4.56678L32.3708 4.77803C33.8395 5.11816 34.4181 6.8991 33.4299 8.03752L32.8162 8.74454C32.4612 9.15352 32.2872 9.68898 32.334 10.2285L32.4149 11.1613C32.5453 12.6631 31.0303 13.7638 29.6423 13.1757L28.7802 12.8105C28.2815 12.5993 27.7185 12.5993 27.2198 12.8105L26.3577 13.1757C24.9697 13.7638 23.4547 12.6631 23.5851 11.1613L23.666 10.2285C23.7128 9.68899 23.5388 9.15352 23.1838 8.74454L22.5701 8.03752C21.5819 6.89911 22.1605 5.11816 23.6292 4.77803L24.5413 4.56678C25.0689 4.44459 25.5244 4.11365 25.8036 3.64962L26.2864 2.84744Z"
                                                                        fill="#FFBD11"
                                                                    />
                                                                    <path
                                                                        d="M6.28638 2.84744C7.0637 1.5558 8.9363 1.5558 9.71362 2.84744L10.1964 3.64962C10.4756 4.11365 10.9311 4.44459 11.4587 4.56678L12.3708 4.77803C13.8395 5.11816 14.4181 6.8991 13.4299 8.03752L12.8162 8.74454C12.4612 9.15352 12.2872 9.68898 12.334 10.2285L12.4149 11.1613C12.5453 12.6631 11.0303 13.7638 9.64225 13.1757L8.78018 12.8105C8.28151 12.5993 7.71849 12.5993 7.21982 12.8105L6.35775 13.1757C4.96968 13.7638 3.45472 12.6631 3.58506 11.1613L3.66601 10.2285C3.71283 9.68899 3.53885 9.15352 3.18383 8.74454L2.57009 8.03752C1.58187 6.89911 2.16054 5.11816 3.62916 4.77803L4.54126 4.56678C5.06887 4.44459 5.52437 4.11365 5.80362 3.64962L6.28638 2.84744Z"
                                                                        fill="#FFBD11"
                                                                    />
                                                                </svg>
                                                            </div>
                                                            <p className="relative font-medium italic text-white">{feedback.message}</p>
                                                            <div className="mt-12">
                                                                <h5 className="font-extrabold text-primary">{feedback.name}</h5>
                                                                <h6 className="text-sm font-bold italic">{feedback.role}</h6>
                                                            </div>
                                                        </div>
                                                        <div className="mx-auto w-40 flex-1 md:mx-0 md:w-full md:max-w-sm">
                                                            <img
                                                                src={feedback.thumbnail}
                                                                alt="testimonial"
                                                                className="h-full w-full rounded-[30px] object-cover"
                                                            />
                                                        </div>
                                                    </div>
                                                </SwiperSlide>
                                            );
                                        })}
                                </Swiper>
                                <div
                                    className={`bottom-0 z-[1] mt-5 flex items-center justify-center gap-4 ${
                                        type.toLowerCase() === 'common' && 'ltr:right-1/3 rtl:left-1/3 sm:absolute sm:mt-0 sm:justify-end'
                                    } ${type.toLowerCase() === 'modern-saas' && 'ltr:left-0 rtl:right-0 md:absolute md:mt-0 md:justify-end'}`}
                                >
                                    <Link to="#" className="text-sm font-extrabold text-white transition hover:text-secondary dark:hover:text-secondary">
                                        View All
                                    </Link>
                                    <button
                                        type="button"
                                        className="testimonial-button-prev static mt-0 flex h-10 w-10 items-center justify-center rounded-full bg-white/5 transition after:hidden after:text-[0px] hover:bg-secondary rtl:rotate-180"
                                    >
                                        <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M5.95007 1.2002L1.48924 5.3424C1.06317 5.73803 1.06317 6.41236 1.48924 6.80799L5.95007 10.9502"
                                                stroke="white"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                            />
                                        </svg>
                                    </button>
                                    <button
                                        type="button"
                                        className="testimonial-button-next static mt-0 flex h-10 w-10 items-center justify-center rounded-full bg-white/5 transition after:hidden after:text-[0px] hover:bg-secondary rtl:rotate-180"
                                    >
                                        <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M1.05005 10.7998L5.51089 6.6576C5.93695 6.26197 5.93695 5.58764 5.51089 5.19201L1.05005 1.0498"
                                                stroke="white"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                            />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </section>
    );
};

export default Testimonial;
