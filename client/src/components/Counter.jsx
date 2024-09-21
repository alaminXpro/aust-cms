import CountUp from 'react-countup';

const Counter = (props) => {
    return (
        <div className="container">
            <div className="heading text-center">
                <h6>{props.title}</h6>
                <h4 className="">
                            Your Gateway to Campus <span className="text-secondary">Community</span>
                </h4>
            </div>
            <div className="grid gap-[30px] sm:grid-cols-2 lg:grid-cols-4">
                <div data-aos="fade-up" data-aos-duration="1000">
                    <div className="group flex cursor-pointer items-baseline rounded-3xl border border-white bg-white py-8 px-6 transition duration-500 hover:border-secondary hover:bg-secondary/10 dark:border-transparent dark:bg-gray-dark dark:hover:bg-secondary">
                        <div>
                            <svg
                                width="26"
                                height="26"
                                viewBox="0 0 26 26"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="text-secondary transition dark:group-hover:text-black"
                            >
                                <g clipPath="url(#clip0_6_2530)">
                                    <path
                                        opacity="0.3"
                                        d="M9.26505 23.1907C8.867 22.5979 9.34238 21.8701 10.0565 21.8701H15.3123C16.0264 21.8701 16.5018 22.5979 16.1038 23.1907C15.3466 24.3185 14.3 25.2316 13.0656 25.8283C12.8248 25.9448 12.544 25.9448 12.3032 25.8283C11.0688 25.2316 10.0222 24.3185 9.26505 23.1907Z"
                                        fill="currentColor"
                                    />
                                    <path
                                        d="M19.7602 15.3657C19.7602 15.6093 19.8491 15.8444 20.0102 16.0271L21.8688 18.1348C22.0299 18.3175 22.1188 18.5527 22.1188 18.7962V19.6908C22.1188 20.2431 21.6711 20.6908 21.1188 20.6908H4.25C3.69772 20.6908 3.25 20.2431 3.25 19.6908V18.7962C3.25 18.5527 3.33888 18.3175 3.49997 18.1348L5.35863 16.0271C5.51971 15.8444 5.6086 15.6093 5.6086 15.3657V8.89781C5.6086 4.89015 8.41975 1.46516 12.3859 0.0983C12.5792 0.0316815 12.7896 0.0316814 12.9829 0.0982998C16.949 1.46516 19.7602 4.89015 19.7602 8.89781V15.3657ZM12.6844 11.2564C13.3099 11.2564 13.9098 11.0079 14.3522 10.5656C14.7945 10.1233 15.043 9.52335 15.043 8.89781C15.043 8.27227 14.7945 7.67235 14.3522 7.23003C13.9098 6.78771 13.3099 6.53921 12.6844 6.53921C12.0589 6.53921 11.4589 6.78771 11.0166 7.23003C10.5743 7.67235 10.3258 8.27227 10.3258 8.89781C10.3258 9.52335 10.5743 10.1233 11.0166 10.5656C11.4589 11.0079 12.0589 11.2564 12.6844 11.2564Z"
                                        fill="currentColor"
                                    />
                                </g>
                                <defs>
                                    <clipPath id="clip0_6_2530">
                                        <rect width="26" height="26" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </div>
                        <div className="ltr:pl-4 rtl:pr-4">
                            <h4 className="pb-2.5 text-4xl font-black leading-none transition dark:text-white dark:group-hover:text-black">
                                <CountUp start={0} end={10} duration={4} suffix="+"></CountUp>
                            </h4>

                            <span className="font-bold text-black transition dark:text-gray dark:group-hover:text-black">Vibrant Clubs</span>
                        </div>
                    </div>
                </div>
                <div data-aos="fade-up" data-aos-duration="1000">
                    <div className="group flex cursor-pointer items-baseline rounded-3xl border border-white bg-white py-8 px-6 transition duration-500 hover:border-secondary hover:bg-secondary/10 dark:border-transparent dark:bg-gray-dark dark:hover:bg-secondary">
                        <div>
                            <svg
                                width="26"
                                height="26"
                                viewBox="0 0 26 26"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="text-secondary transition dark:group-hover:text-black"
                            >
                                <g clipPath="url(#clip0_6_2631)">
                                    <path
                                        opacity="0.3"
                                        d="M4.2757 15.6078C4.27493 15.6078 4.27425 15.6084 4.27403 15.6091C4.06737 16.3065 3.94528 17.0263 3.9104 17.7528L3.9 18.2V25C3.9 25.5523 3.45228 26 2.9 26H1C0.447715 26 1.18712e-07 25.5523 1.18712e-07 25V20.15C-0.000255849 19.0289 0.413437 17.9471 1.16173 17.1122C1.91001 16.2773 2.94021 15.7481 4.0547 15.626L4.2757 15.6078ZM22.0225 17.0047C21.9324 16.3161 22.4694 15.6613 23.1157 15.9157C23.7351 16.1595 24.299 16.5384 24.7632 17.0317C25.5575 17.8757 25.9998 18.991 26 20.15V25.0001C26 25.5523 25.5523 26 25 26H23.1C22.5477 26 22.1 25.5523 22.1 25V18.2C22.1 17.7948 22.0737 17.3958 22.0225 17.0047ZM4.55 7.80005C5.41195 7.80005 6.2386 8.14246 6.8481 8.75195C7.45759 9.36145 7.8 10.1881 7.8 11.05C7.8 11.912 7.45759 12.7387 6.8481 13.3481C6.2386 13.9576 5.41195 14.3 4.55 14.3C3.68805 14.3 2.8614 13.9576 2.2519 13.3481C1.64241 12.7387 1.3 11.912 1.3 11.05C1.3 10.1881 1.64241 9.36145 2.2519 8.75195C2.8614 8.14246 3.68805 7.80005 4.55 7.80005ZM21.45 7.80005C22.312 7.80005 23.1386 8.14246 23.7481 8.75195C24.3576 9.36145 24.7 10.1881 24.7 11.05C24.7 11.912 24.3576 12.7387 23.7481 13.3481C23.1386 13.9576 22.312 14.3 21.45 14.3C20.588 14.3 19.7614 13.9576 19.1519 13.3481C18.5424 12.7387 18.2 11.912 18.2 11.05C18.2 10.1881 18.5424 9.36145 19.1519 8.75195C19.7614 8.14246 20.588 7.80005 21.45 7.80005Z"
                                        fill="currentColor"
                                    />
                                    <path
                                        d="M13 11.7C14.7239 11.7 16.3772 12.3848 17.5962 13.6038C18.8152 14.8228 19.5 16.4761 19.5 18.2V25C19.5 25.5523 19.0523 26 18.5 26H7.5C6.94772 26 6.5 25.5523 6.5 25V18.2C6.5 16.4761 7.18482 14.8228 8.40381 13.6038C9.62279 12.3848 11.2761 11.7 13 11.7ZM13 0C14.3791 0 15.7018 0.547856 16.677 1.52304C17.6521 2.49823 18.2 3.82087 18.2 5.2C18.2 6.57913 17.6521 7.90177 16.677 8.87696C15.7018 9.85214 14.3791 10.4 13 10.4C11.6209 10.4 10.2982 9.85214 9.32304 8.87696C8.34786 7.90177 7.8 6.57913 7.8 5.2C7.8 3.82087 8.34786 2.49823 9.32304 1.52304C10.2982 0.547856 11.6209 0 13 0Z"
                                        fill="currentColor"
                                    />
                                </g>
                                <defs>
                                    <clipPath id="clip0_6_2631">
                                        <rect width="26" height="26" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </div>
                        <div className="ltr:pl-4 rtl:pr-4">
                            <h4 className="pb-2.5 text-4xl font-black leading-none transition dark:text-white dark:group-hover:text-black">
                                <CountUp start={0} end={50} duration={4} suffix="+"></CountUp>
                            </h4>
                            <span className="font-bold text-black transition dark:text-gray dark:group-hover:text-black">Club Partners</span>
                        </div>
                    </div>
                </div>
                <div data-aos="fade-up" data-aos-duration="1000">
                    <div className="group flex cursor-pointer items-baseline rounded-3xl border border-white bg-white py-8 px-6 transition duration-500 hover:border-secondary hover:bg-secondary/10 dark:border-transparent dark:bg-gray-dark dark:hover:bg-secondary">
                        <div>
                            <svg
                                width="26"
                                height="26"
                                viewBox="0 0 26 26"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="text-secondary transition dark:group-hover:text-black"
                            >
                                <g clipPath="url(#clip0_6_2641)">
                                    <path
                                        opacity="0.3"
                                        d="M13 26C5.8201 26 0 20.1799 0 13C0 5.8201 5.8201 0 13 0C20.1799 0 26 5.8201 26 13C26 20.1799 20.1799 26 13 26Z"
                                        fill="currentColor"
                                    />
                                    <path
                                        d="M6.49998 14.3C6.49998 16.024 7.18479 17.6773 8.40378 18.8962C9.62277 20.1152 11.2761 20.8 13 20.8C14.7239 20.8 16.3772 20.1152 17.5962 18.8962C18.8152 17.6773 19.5 16.024 19.5 14.3H16.9C16.9 15.3344 16.4891 16.3264 15.7577 17.0578C15.0263 17.7892 14.0343 18.2 13 18.2C11.9656 18.2 10.9736 17.7892 10.2423 17.0578C9.51087 16.3264 9.09998 15.3344 9.09998 14.3H6.49998ZM7.79998 11.7C8.31715 11.7 8.81314 11.4946 9.17883 11.1289C9.54453 10.7632 9.74998 10.2672 9.74998 9.75005C9.74998 9.23288 9.54453 8.73689 9.17883 8.37119C8.81314 8.00549 8.31715 7.80005 7.79998 7.80005C7.2828 7.80005 6.78681 8.00549 6.42112 8.37119C6.05542 8.73689 5.84998 9.23288 5.84998 9.75005C5.84998 10.2672 6.05542 10.7632 6.42112 11.1289C6.78681 11.4946 7.2828 11.7 7.79998 11.7ZM18.2 11.7C18.7171 11.7 19.2131 11.4946 19.5788 11.1289C19.9445 10.7632 20.15 10.2672 20.15 9.75005C20.15 9.23288 19.9445 8.73689 19.5788 8.37119C19.2131 8.00549 18.7171 7.80005 18.2 7.80005C17.6828 7.80005 17.1868 8.00549 16.8211 8.37119C16.4554 8.73689 16.25 9.23288 16.25 9.75005C16.25 10.2672 16.4554 10.7632 16.8211 11.1289C17.1868 11.4946 17.6828 11.7 18.2 11.7Z"
                                        fill="currentColor"
                                    />
                                </g>
                                <defs>
                                    <clipPath id="clip0_6_2641">
                                        <rect width="26" height="26" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </div>
                        <div className="ltr:pl-4 rtl:pr-4">
                            <h4 className="pb-2.5 text-4xl font-black leading-none transition dark:text-white dark:group-hover:text-black">
                                <CountUp start={0} end={9000} duration={4} suffix="+"></CountUp>{' '}
                            </h4>
                            <span className="font-bold text-black transition dark:text-gray dark:group-hover:text-black">Happy Members</span>
                        </div>
                    </div>
                </div>
                <div data-aos="fade-up" data-aos-duration="1000">
                    <div className="group flex cursor-pointer items-baseline rounded-3xl border border-white bg-white py-8 px-6 transition duration-500 hover:border-secondary hover:bg-secondary/10 dark:border-transparent dark:bg-gray-dark dark:hover:bg-secondary">
                        <div>
                            <svg
                                width="26"
                                height="26"
                                viewBox="0 0 26 26"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="text-secondary transition dark:group-hover:text-black"
                            >
                                <g clipPath="url(#clip0_6_2651)">
                                    <path
                                        d="M1.31194 8.73474H24.6881C24.8695 8.73466 25.049 8.77223 25.2151 8.84507C25.3813 8.91791 25.5305 9.02444 25.6534 9.15792C25.7763 9.29141 25.8702 9.44894 25.929 9.62055C25.9879 9.79216 26.0105 9.97413 25.9955 10.1549L24.9018 23.2684C24.8745 23.5961 24.7251 23.9016 24.4832 24.1243C24.2413 24.347 23.9245 24.4708 23.5957 24.4709H2.40429C2.07547 24.4708 1.75871 24.347 1.5168 24.1243C1.27489 23.9016 1.12548 23.5961 1.09819 23.2684L0.00452488 10.1549C-0.010534 9.97413 0.0120899 9.79216 0.0709658 9.62055C0.129842 9.44894 0.223688 9.29141 0.346571 9.15792C0.469454 9.02444 0.618698 8.91791 0.784866 8.84507C0.951034 8.77223 1.13051 8.73466 1.31194 8.73474Z"
                                        fill="currentColor"
                                    />
                                    <path
                                        opacity="0.3"
                                        d="M14.5614 3.1965C14.7489 3.38404 15.0033 3.4894 15.2685 3.4894H23.4908C23.8386 3.4894 24.1722 3.62756 24.4181 3.87348C24.664 4.11941 24.8022 4.45296 24.8022 4.80075V5.1121C24.8022 5.66438 24.3545 6.1121 23.8022 6.1121H2.19788C1.64559 6.1121 1.19788 5.66438 1.19788 5.1121V2.17805C1.19788 1.83026 1.33604 1.49671 1.58196 1.25078C1.82789 1.00486 2.16143 0.866699 2.50923 0.866699H11.8174C12.0826 0.866699 12.3369 0.972056 12.5245 1.15959L14.5614 3.1965Z"
                                        fill="currentColor"
                                    />
                                </g>
                                <defs>
                                    <clipPath id="clip0_6_2651">
                                        <rect width="26" height="26" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </div>
                        <div className="ltr:pl-4 rtl:pr-4">
                            <h4 className="pb-2.5 text-4xl font-black leading-none transition dark:text-white dark:group-hover:text-black">
                                <CountUp start={0} end={350} duration={4} suffix="+"></CountUp>{' '}
                            </h4>
                            <span className="font-bold text-black transition dark:text-gray dark:group-hover:text-black">Project Done</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Counter;
