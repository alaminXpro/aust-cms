import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Autoplay } from 'swiper/modules';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const BlogSlider = ({
    title1 = '',
    title2 = '',
    blogs = [
        {
            id: 1,
            thumbnail: '/assets/images/blog1.png',
            title: 'UI/UX Design',
            excerpt: 'Simple & constructive methods to improve your visual/UI design',
            description:
                'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.',
        },
        {
            id: 2,
            thumbnail: '/assets/images/blog2.png',
            title: 'Project Management',
            excerpt: 'Why is JIRA important for managing projects?',
            description:
                'Jira works well for Agile development projects for many reasons, including the ability to create Kanban and Scrum boards with sprint planning and issue time estimation capabilities.',
        },
        {
            id: 3,
            thumbnail: '/assets/images/blog3.png',
            title: 'SEO Marketing',
            excerpt: 'What is SEO (Search Engine Optimization)?',
            description:
                'Search engine optimization is the process of improving the quality and quantity of website traffic to a website or a web page from search engines.',
        },
    ],
    type = 'service',
    className = '',
}) => {
    const isRtl = useSelector((state) => state.themeConfig.rtlClass) === 'rtl' ? true : false;

    return (
        <section className={`py-14 lg:py-[100px] ${className}`}>
            <div className="container">
                <div className={`flex flex-col items-center justify-center lg:flex-row lg:justify-between ${title1.length > 0 ? '' : 'mb-10'}`}>
                    <div className={`heading text-center ltr:lg:text-left rtl:lg:text-right ${title1.length > 0 ? '' : 'mb-0'}`}>
                        {title1.length > 0 && <h6 className={type.toLowerCase() === 'modern-saas' ? '!text-secondary' : ''}>{title1}</h6>}
                        {title2.length > 0 && <h4>{title2}</h4>}
                    </div>
                    <div className="mb-8 flex items-center justify-end gap-4 lg:mb-0">
                        <Link
                            to="/blog"
                            className="text-sm font-extrabold text-black transition hover:text-secondary dark:text-white dark:hover:text-secondary"
                        >
                            View All
                        </Link>
                        <button
                            type="button"
                            className="blog-slider-button-prev flex h-10 w-10 items-center justify-center rounded-full bg-black/5 transition hover:bg-secondary dark:bg-white/5 dark:hover:bg-secondary"
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
                            className="blog-slider-button-next text-p flex h-10 w-10 items-center justify-center rounded-full bg-black/5 transition hover:bg-secondary dark:bg-white/5 dark:hover:bg-secondary"
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
                <Swiper
                    modules={[Navigation, Autoplay]}
                    slidesPerView="auto"
                    spaceBetween={30}
                    loop={true}
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                    navigation={{
                        nextEl: '.blog-slider-button-next',
                        prevEl: '.blog-slider-button-prev',
                    }}
                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                        },
                        1024: {
                            slidesPerView: 3,
                        },
                    }}
                    dir={isRtl ? 'rtl' : 'ltr'}
                    key={isRtl ? 'true' : 'false'}
                >
                    {type.toLowerCase() === 'service' &&
                        blogs.map((blog, i) => {
                            return (
                                <SwiperSlide key={blog.id}>
                                    <div className="relative rounded-3xl border border-transparent bg-white transition duration-500 hover:border-secondary hover:bg-secondary/20 dark:bg-gray-dark">
                                        <Link to="/blog-details" className="absolute top-0 h-full w-full ltr:left-0 rtl:right-0"></Link>
                                        <img src={blog.thumbnail} alt="blog-1" className="h-52 w-full rounded-t-3xl object-cover" />
                                        <div className="p-5 text-sm font-bold">
                                            <h6 className="font-extrabold text-secondary dark:text-secondary">{blog.title}</h6>
                                            <h5 className="my-[10px] block text-lg font-extrabold leading-[23px] text-black line-clamp-2 dark:text-white">
                                                {blog.excerpt}
                                            </h5>
                                            <p className="line-clamp-4">{blog.description}</p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            );
                        })}

                    {type.toLowerCase() === 'modern-saas' &&
                        blogs.map((blog, i) => {
                            return (
                                <SwiperSlide key={blog.id}>
                                    <div className="rounded-3xl bg-white dark:bg-gray-dark">
                                        <img src={blog.thumbnail} alt="blog-3" className="h-52 w-full rounded-t-3xl object-cover" />
                                        <div className="p-5 text-sm font-bold">
                                            <span className="rounded bg-primary/10 py-1 px-2 text-sm font-extrabold text-primary">{blog.tag}</span>
                                            <Link
                                                to="/blog-details"
                                                className="my-[10px] block text-lg font-extrabold leading-[23px] text-black transition line-clamp-2 hover:text-secondary dark:text-white dark:hover:text-secondary"
                                            >
                                                {blog.title}
                                            </Link>
                                            <p className="line-clamp-3">{blog.excerpt}</p>
                                            <div className="mt-6 flex items-center justify-between text-secondary">
                                                <span>{blog.date}</span>
                                                <Link to="/blog-details" className="transition hover:text-primary">
                                                    <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="M25.4091 13.0009C25.4091 19.8539 19.8531 25.41 13 25.41C6.14699 25.41 0.590937 19.8539 0.590937 13.0009C0.590937 6.14785 6.14699 0.591797 13 0.591797C19.8531 0.591797 25.4091 6.14785 25.4091 13.0009ZM12.7226 7.55043C12.6336 7.63872 12.5628 7.74368 12.5144 7.85931C12.466 7.97495 12.4408 8.09899 12.4403 8.22436C12.4398 8.34973 12.464 8.47398 12.5115 8.58999C12.559 8.70601 12.6289 8.81153 12.7172 8.90052L15.8386 12.0463H7.86935C7.61618 12.0463 7.37339 12.1469 7.19438 12.3259C7.01537 12.5049 6.9148 12.7477 6.9148 13.0009C6.9148 13.254 7.01537 13.4968 7.19438 13.6759C7.37339 13.8549 7.61618 13.9554 7.86935 13.9554H15.8386L12.7172 17.1013C12.6289 17.1903 12.5591 17.2959 12.5116 17.412C12.4641 17.5281 12.4399 17.6524 12.4405 17.7778C12.441 17.9033 12.4663 18.0273 12.5148 18.143C12.5633 18.2587 12.6341 18.3636 12.7232 18.4519C12.8123 18.5402 12.9179 18.6101 13.034 18.6576C13.1501 18.7051 13.2744 18.7292 13.3998 18.7287C13.5252 18.7281 13.6493 18.7029 13.765 18.6544C13.8806 18.6059 13.9856 18.5351 14.0739 18.446L18.8102 13.6732C18.9876 13.4944 19.0872 13.2528 19.0872 13.0009C19.0872 12.749 18.9876 12.5073 18.8102 12.3285L14.0739 7.5558C13.9856 7.46661 13.8806 7.39571 13.7648 7.34716C13.6491 7.29861 13.5249 7.27336 13.3994 7.27286C13.2739 7.27236 13.1495 7.29662 13.0333 7.34425C12.9172 7.39188 12.8116 7.46194 12.7226 7.55043Z"
                                                            fill="currentColor"
                                                        />
                                                    </svg>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            );
                        })}
                </Swiper>
            </div>
        </section>
    );
};

export default BlogSlider;
