import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { setPageTitle } from '../redux/themeConfigSlice';
import { useDispatch } from 'react-redux';

const Privacypolicy = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setPageTitle('Privacy Policy'));
    }, [dispatch]);

    const isRtl = useSelector((state) => state.themeConfig.rtlClass) === 'rtl' ? true : false;

    return (
        <div>
            <div className="bg-[url(/assets/images/inner-page-hero-bg.png)] bg-cover bg-bottom bg-no-repeat pt-[82px] lg:pt-[106px]">
                <div className="relative">
                    <div className="container">
                        <div className="items-center justify-between py-10 md:flex md:h-[400px] md:py-0">
                            <div className="heading relative mb-0 text-center ltr:md:text-left rtl:md:text-right">
                                <h4 className="!text-white">Privacy Policy</h4>
                            </div>
                            <div className="relative mt-6 md:mt-0" data-aos={isRtl ? 'fade-right' : 'fade-left'} data-aos-duration="1000">
                                <svg
                                    width="240"
                                    height="282"
                                    viewBox="0 0 240 282"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="mx-auto rtl:rotate-y-180 md:mx-0"
                                >
                                    <path
                                        d="M182.266 149.708L144.578 159.788C134.503 162.871 123.871 163.693 113.442 162.196C110.381 169.737 108.613 179.168 112.378 186.416V186.444C107.97 196.82 102.559 206.741 96.2222 216.065C80.8332 213.919 65.5771 210.909 50.5262 207.049C45.0912 214.849 42.5816 219.765 43.9742 232.809C60.5222 238.129 74.0742 242.133 89.9222 245.689C94.971 246.827 100.24 246.497 105.107 244.737C109.974 242.977 114.236 239.862 117.39 235.758C125.622 224.744 133.195 213.253 140.07 201.346L125.266 196.147C138.157 199.661 154.699 193.171 165.247 187.788V187.816L156.699 223.627C163.382 229.032 173.573 231.075 181.815 229.703L200.435 168.545C201.21 165.992 201.29 163.278 200.665 160.684C200.042 158.09 198.736 155.71 196.884 153.79C195.031 151.87 192.7 150.479 190.13 149.761C187.56 149.043 184.845 149.026 182.266 149.708Z"
                                        fill="#B476E5"
                                    />
                                    <path d="M195.733 110.368L203.013 109.052L185.514 12.816L175.854 1L195.733 110.368Z" fill="#B476E5" />
                                    <path d="M174.902 1.16802L170.002 15.644L187.53 111.88L194.782 110.564L174.902 1.16802Z" fill="#B476E5" />
                                    <path
                                        d="M95.9969 168.72C95.9129 167.88 94.5969 166.984 91.5449 166.592L92.1049 170.932C94.4289 170.652 96.0853 169.7 95.9969 168.72Z"
                                        fill="#47BDFF"
                                    />
                                    <path
                                        d="M80.5688 166.928C76.7373 167.517 75.2046 168.495 75.1648 169.392C75.1177 170.456 77.209 171.408 80.093 171.296C80.3359 171.085 80.5193 170.816 80.625 170.512C80.7581 169.32 80.7392 168.116 80.5688 166.928Z"
                                        fill="#47BDFF"
                                    />
                                    <path
                                        d="M47.8087 210.972C44.6915 209.761 41.5028 208.741 38.2607 207.92C29.6367 212.876 17.6292 218.181 5.47275 228.668C5.23504 228.865 5.05997 229.128 4.96875 229.424C12.4221 229.732 19.8877 229.526 27.3127 228.808C32.5487 228.388 38.3447 227.492 43.5807 228.276C43.4437 221.758 44.1776 217.069 47.8087 210.972Z"
                                        fill="#47BDFF"
                                    />
                                    <path
                                        d="M178.204 246.81C177.762 241.434 176.832 235.442 177.728 230.158C171.71 230.355 165.744 228.975 160.424 226.154C159.29 229.144 158.308 232.192 157.484 235.282C162.692 244.046 168.068 256.45 178.819 269.44C179.13 261.892 178.924 254.331 178.204 246.81Z"
                                        fill="#47BDFF"
                                    />
                                    <path
                                        d="M128.701 77.412C128.486 76.8958 128.1 76.4684 127.609 76.2003C127.117 75.9323 126.549 75.8394 125.998 75.9373C125.447 76.0351 124.946 76.3177 124.578 76.7384C124.209 77.1591 123.994 77.693 123.969 78.252C123.913 78.252 123.885 78.28 123.829 78.28C123.593 77.7462 123.178 77.3125 122.655 77.0558C122.13 76.799 121.533 76.7356 120.967 76.8766C120.4 77.0175 119.903 77.3541 119.561 77.8266C119.218 78.299 119.054 78.8771 119.097 79.459C119.069 79.459 119.041 79.487 119.013 79.487C118.734 78.9143 118.244 78.4719 117.646 78.2527C117.048 78.0335 116.388 78.0545 115.805 78.3113C115.222 78.5681 114.761 79.0407 114.519 79.63C114.277 80.2194 114.272 80.8796 114.507 81.472C114.25 81.0068 113.849 80.6376 113.364 80.4205C112.879 80.2033 112.337 80.1498 111.819 80.268C111.427 80.3638 111.064 80.5529 110.761 80.819C110.457 81.0852 110.223 81.4206 110.077 81.7968C109.932 82.173 109.879 82.5787 109.924 82.9797C109.968 83.3806 110.109 83.7648 110.335 84.0996C111.987 87.2076 120.443 103.784 118.539 109.742C120.947 104.31 119.717 96.7217 119.211 96.3017C114.283 92.2137 117.923 87.6497 120.303 90.7017C121.451 92.1577 121.983 92.1017 122.291 91.1777C123.271 86.4177 129.179 79.4737 132.312 89.0217C128.293 76.0592 128.931 78.1032 128.701 77.412Z"
                                        fill="#47BDFF"
                                    />
                                    <path
                                        d="M108.064 138.62C105.649 139.47 103.307 140.519 101.064 141.756L106.58 135.512C107.131 136.52 107.626 137.558 108.064 138.62Z"
                                        fill="#47BDFF"
                                    />
                                    <path d="M145.472 155.952L132.592 135.82L145.696 150.912C145.805 152.595 145.73 154.285 145.472 155.952Z" fill="#47BDFF" />
                                    <path
                                        d="M143.12 196.02C142.112 197.788 141.104 199.548 140.04 201.34L123.912 195.684C129.652 197.728 136.708 197.392 143.12 196.02Z"
                                        fill="#47BDFF"
                                    />
                                    <path
                                        d="M197.888 139.516L203.068 138.564L201.556 130.276C200.044 130.612 198.252 130.865 196.398 131.256L197.888 139.516Z"
                                        fill="#47BDFF"
                                    />
                                    <path
                                        d="M198.478 113.476L197.834 110.004L192.654 110.956L193.298 114.428C194.234 114.26 197.927 113.589 198.478 113.476Z"
                                        fill="#47BDFF"
                                    />
                                    <path
                                        d="M222.921 264.508C222.955 264.906 223.145 265.273 223.448 265.531C223.753 265.787 224.147 265.914 224.545 265.88C224.943 265.846 225.31 265.657 225.568 265.352C225.824 265.047 225.951 264.654 225.917 264.256L225.693 261.898C225.659 261.5 225.47 261.133 225.165 260.875C224.86 260.619 224.467 260.492 224.069 260.526C223.671 260.56 223.304 260.75 223.046 261.054C222.79 261.359 222.663 261.752 222.697 262.15L222.921 264.508Z"
                                        fill="#47BDFF"
                                    />
                                    <path
                                        d="M168.487 261.96C160.954 269.439 152.427 275.845 143.147 281C123.799 274.42 106.158 261.96 91.291 245.972"
                                        stroke="white"
                                        strokeWidth="0.75"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M180.867 73.996C160.905 66.253 141.469 57.2178 122.683 46.948C96.4716 66.3582 69.133 84.1974 40.8105 100.372L44.4785 142.148C46.8671 166.225 54.1769 189.556 65.9545 210.692"
                                        stroke="white"
                                        strokeWidth="0.75"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M178.371 251.124C206.063 217.216 219.895 168.636 216.255 127.084L212.587 85.336C207.603 83.7149 202.647 82.032 197.775 80.296"
                                        stroke="white"
                                        strokeWidth="0.75"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M113.412 114.708C122.092 111.712 119.915 96.9192 119.208 96.312C114.333 92.1327 117.911 87.6659 120.3 90.712C121.136 91.779 122.017 92.4392 122.304 91.1084C123.423 85.9284 130.334 78.2402 133.096 92.112C136.87 111.069 123.128 103.116 123.128 103.116"
                                        stroke="white"
                                        strokeWidth="0.75"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M80.0928 171.296C77.2088 171.408 75.1177 170.455 75.1648 169.392C75.2724 166.966 84.0762 166.505 86.471 166.431C88.7964 166.361 95.8465 166.397 95.9968 168.72C95.9968 169.044 95.7272 170.488 92.1048 170.931"
                                        stroke="white"
                                        strokeWidth="0.75"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M92.1603 171.772C92.6658 175.184 92.9371 178.626 92.9723 182.076C92.6363 183.952 87.9618 193.385 85.0483 197.476C83.1974 200.079 80.6818 200.837 82.8923 195.6C84.1576 192.455 85.2054 189.228 86.0283 185.94C88.3273 177.204 81.8828 175.356 79.3363 178.912C75.6831 184.015 72.8948 185.52 74.1283 181.628C74.8828 179.248 75.2763 177.82 75.8083 176C76.221 174.599 78.9723 172.515 80.0555 171.351C80.2991 171.128 80.4848 170.849 80.5963 170.54C80.7152 169.348 80.6965 168.145 80.5403 166.956C84.1644 166.418 87.8398 166.315 91.4883 166.648C91.4883 166.648 91.6725 167.929 92.1603 171.772Z"
                                        stroke="white"
                                        strokeWidth="0.75"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M84.7959 190.221C82.9581 192.426 80.851 194.392 78.5239 196.073C75.6384 198.06 74.4948 196.552 77.7399 192.965C80.0132 190.452 82.0212 187.713 83.7319 184.789"
                                        stroke="white"
                                        strokeWidth="0.75"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M81.498 183.224C82.8531 184.354 84.3733 185.271 86.006 185.94"
                                        stroke="white"
                                        strokeWidth="0.75"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M81.1571 188.684C78.9494 190.015 76.5891 191.076 74.1276 191.842C70.9371 192.799 71.1803 190.852 74.5196 189.098C77.1911 187.554 79.6881 185.725 81.9676 183.645"
                                        stroke="white"
                                        strokeWidth="0.75"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M77.768 187.032C76.0476 187.481 74.2815 187.736 72.504 187.788C70.096 187.694 69.3134 186.394 72.868 185.548C75.6722 184.897 78.3574 183.809 80.8258 182.328C80.9477 180.551 81.4541 178.822 82.3098 177.26"
                                        stroke="white"
                                        strokeWidth="0.75"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M101.064 141.756L106.58 135.512C107.139 136.516 107.643 137.549 108.09 138.607"
                                        stroke="white"
                                        strokeWidth="0.75"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M145.472 155.952L132.592 135.848L145.696 150.94"
                                        stroke="white"
                                        strokeWidth="0.75"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M95.9959 168.72C95.5199 162.588 94.817 148.252 94.8759 145.004C98.5601 143.246 103.806 139.958 108.089 138.613C110.864 145.277 112.29 154.156 113.412 162.224C123.841 163.735 134.475 162.912 144.548 159.816C145.513 156.961 145.904 153.945 145.696 150.94C145.549 150.583 152.294 159.792 161.992 153.712L194.864 133.496C193.212 125.768 189.46 118.544 183.132 115.156L156.084 133.724C144.548 116.196 144.546 109.021 125.816 111.767C112.318 113.749 98.2993 119.897 85.1599 128.847C75.3644 135.518 75.1389 139.179 74.8279 148.951C74.5425 155.765 74.6639 162.591 75.1919 169.391"
                                        stroke="white"
                                        strokeWidth="0.75"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M173.276 183.308C173.276 183.308 170.14 185.324 165.24 187.816"
                                        stroke="white"
                                        strokeWidth="0.75"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M143.095 196.188C135.447 209.966 126.848 223.195 117.363 235.78C114.21 239.884 109.948 243.001 105.081 244.762C100.214 246.523 94.9447 246.856 89.895 245.72C74.0485 242.155 60.495 238.16 43.947 232.812C43.5049 227.317 43.0628 222.095 45.2438 216.236C46.5539 212.948 48.3131 209.858 50.471 207.052C65.5219 210.912 80.778 213.922 96.167 216.068C102.579 206.751 107.967 196.772 112.239 186.3"
                                        stroke="white"
                                        strokeWidth="0.75"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M127.355 104.646C127.045 107.242 126.52 109.509 128.534 111.46"
                                        stroke="white"
                                        strokeWidth="0.75"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M4.96863 229.421C4.12863 229.365 3.23263 229.343 2.39263 229.281C2.0895 229.259 1.80036 229.144 1.56325 228.954C1.32613 228.764 1.15209 228.507 1.06426 228.216C0.976424 227.925 0.978636 227.614 1.07089 227.324C1.16299 227.035 1.34072 226.78 1.58064 226.593C7.24164 222.166 13.2641 218.223 19.5846 214.804C25.1625 211.762 30.1686 209.4 34.2006 207.02C35.5726 207.3 36.9166 207.552 38.2606 207.916"
                                        stroke="white"
                                        strokeWidth="0.75"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M47.8087 210.972C44.1982 217.033 43.4407 221.718 43.5807 228.276C38.3447 227.492 32.5487 228.387 27.3127 228.808C19.8877 229.524 12.4221 229.729 4.96875 229.421C5.05997 229.125 5.23504 228.863 5.47275 228.665C17.6365 218.177 29.6412 212.873 38.2607 207.917C41.5005 208.748 44.6887 209.768 47.8087 210.972Z"
                                        stroke="white"
                                        strokeWidth="0.75"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M178.819 269.434C178.765 270.183 178.735 270.957 178.653 271.704C178.629 272.006 178.516 272.295 178.325 272.532C178.134 272.768 177.877 272.942 177.587 273.03C177.295 273.117 176.986 273.116 176.696 273.024C176.407 272.932 176.152 272.755 175.965 272.516C166.005 259.82 161.153 247.96 156.393 239.896C156.701 238.328 157.093 236.816 157.485 235.276"
                                        stroke="white"
                                        strokeWidth="0.75"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M177.432 238.07C177.236 235.429 177.326 232.774 177.7 230.152C171.682 230.349 165.716 228.969 160.396 226.148C159.266 229.313 158.333 231.982 157.484 235.276C162.692 244.04 168.067 256.442 178.819 269.434C179.542 256.504 177.749 243.716 177.432 238.07Z"
                                        stroke="white"
                                        strokeWidth="0.75"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path d="M179.857 113.28L210.685 107.652" stroke="white" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round" />
                                    <path
                                        d="M7.82422 180.788L14.0962 188.152L19.6122 176.196"
                                        stroke="white"
                                        strokeWidth="0.75"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M232.748 263.78L231.936 254.4L215.248 255.856L216.06 265.236C216.143 266.343 216.443 267.422 216.946 268.41C217.447 269.399 218.141 270.279 218.985 270.998C219.831 271.716 220.81 272.26 221.866 272.597C222.923 272.935 224.037 273.058 225.142 272.963C226.246 272.865 227.322 272.551 228.303 272.036C229.286 271.521 230.157 270.815 230.865 269.961C231.572 269.107 232.103 268.12 232.427 267.059C232.75 265.998 232.859 264.884 232.748 263.78Z"
                                        stroke="white"
                                        strokeWidth="0.75"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M215.248 255.856L214.716 249.864C214.554 247.668 215.263 245.496 216.689 243.817C218.117 242.14 220.148 241.093 222.341 240.901C224.535 240.709 226.718 241.39 228.413 242.795C230.109 244.201 231.185 246.217 231.404 248.408"
                                        stroke="white"
                                        strokeWidth="0.75"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M222.921 264.508C222.955 264.906 223.145 265.273 223.448 265.531C223.753 265.787 224.147 265.914 224.545 265.88C224.943 265.846 225.31 265.657 225.568 265.352C225.824 265.047 225.951 264.654 225.917 264.256L225.693 261.898C225.659 261.5 225.47 261.133 225.165 260.875C224.86 260.619 224.467 260.492 224.069 260.526C223.671 260.56 223.304 260.75 223.046 261.054C222.79 261.359 222.663 261.752 222.697 262.15L222.921 264.508Z"
                                        stroke="white"
                                        strokeWidth="0.75"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M58.7551 53.276C58.8437 54.2893 58.6297 55.3062 58.1403 56.1979C57.651 57.0896 56.9081 57.8163 56.0059 58.2858C55.1036 58.7555 54.0823 58.9469 53.0712 58.8361C52.06 58.7253 51.1045 58.3172 50.3253 57.6633C49.5462 57.0095 48.9784 56.1393 48.6937 55.1627C48.4091 54.186 48.4205 53.1471 48.7264 52.177C49.0323 51.2068 49.619 50.3492 50.4123 49.7125C51.2056 49.0759 52.1698 48.6888 53.1831 48.6C54.542 48.4819 55.892 48.908 56.9369 49.7849C57.9817 50.6616 58.6356 51.9173 58.7551 53.276Z"
                                        stroke="white"
                                        strokeWidth="0.75"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M202.202 125.908C205.086 125.656 205.591 129.548 203.233 129.912C203.037 129.943 197.437 130.92 194.441 131.704C192.845 125.572 189.873 119.972 185.285 116.525C187.441 115.405 190.129 114.957 197.773 113.578C198.865 113.382 201.832 112.788 202.869 112.598C205.694 112.079 206.466 116.092 204.157 116.658C203.907 116.72 201.469 117.247 201.189 117.302C201.329 117.274 202.616 117.215 202.757 117.19C205.769 116.665 206.509 120.774 204.045 121.334L201.665 121.698C201.833 121.67 202.365 121.614 202.533 121.586C205.501 121.25 206.136 125.156 203.712 125.674C203.348 125.762 202.594 125.852 202.202 125.908Z"
                                        stroke="white"
                                        strokeWidth="0.75"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M132.313 89.032L128.729 77.412C128.498 76.8987 128.103 76.4771 127.605 76.2141C127.107 75.9509 126.536 75.8614 125.981 75.9594C125.427 76.0576 124.921 76.3377 124.544 76.7556C124.167 77.1734 123.94 77.7053 123.898 78.2668C123.648 77.733 123.221 77.3027 122.689 77.0492C122.157 76.7957 121.554 76.7349 120.982 76.8769C120.41 77.0191 119.905 77.3556 119.553 77.8286C119.202 78.3017 119.026 78.8822 119.054 79.4708C117.688 76.4939 113.16 78.6691 114.505 81.472C114.249 81.0068 113.848 80.6376 113.363 80.4205C112.878 80.2033 112.335 80.1498 111.817 80.268C111.423 80.3603 111.057 80.5467 110.751 80.8114C110.444 81.076 110.206 81.4112 110.058 81.7878C109.909 82.1645 109.854 82.5715 109.897 82.9741C109.94 83.3768 110.08 83.763 110.305 84.0996C111.957 87.2076 120.413 103.756 118.509 109.72"
                                        stroke="white"
                                        strokeWidth="0.75"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path d="M228.828 60.36L229.248 65.288" stroke="white" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M225.02 70.328L220.092 70.776" stroke="white" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M239.217 69.068L234.289 69.516" stroke="white" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M230.481 79.484L230.061 74.556" stroke="white" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round" />
                                    <path
                                        d="M234.288 69.516C233.679 69.5697 233.066 69.5028 232.484 69.3193C231.9 69.1358 231.359 68.8393 230.891 68.4466C230.424 68.054 230.037 67.5728 229.754 67.0309C229.473 66.4889 229.301 65.8966 229.248 65.288C229.301 65.8966 229.234 66.5098 229.052 67.0925C228.867 67.6754 228.571 68.2162 228.178 68.6843C227.786 69.1523 227.304 69.5384 226.763 69.8205C226.221 70.1025 225.628 70.275 225.02 70.328C225.628 70.2744 226.241 70.3413 226.825 70.5248C227.407 70.7082 227.948 71.0049 228.416 71.3975C228.884 71.7902 229.27 72.2712 229.553 72.8132C229.834 73.3551 230.006 73.9474 230.06 74.556C230.006 73.9474 230.073 73.3342 230.257 72.7515C230.44 72.1688 230.736 71.6278 231.129 71.1598C231.521 70.6917 232.003 70.3056 232.544 70.0235C233.086 69.7415 233.679 69.5691 234.288 69.516Z"
                                        stroke="white"
                                        strokeWidth="0.75"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path d="M140.124 201.369L124.418 195.92" stroke="white" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round" />
                                    <path
                                        d="M144.523 159.816L182.211 149.736C184.794 149.046 187.515 149.058 190.091 149.773C192.668 150.488 195.007 151.877 196.865 153.799C198.724 155.721 200.035 158.104 200.664 160.703C201.292 163.301 201.214 166.022 200.439 168.58L181.819 229.738C177.628 230.405 173.35 230.283 169.204 229.378C164.646 228.479 160.364 226.521 156.703 223.662L165.25 187.822C155.649 192.741 142.128 197.889 130.8 197.072C117.845 196.138 108.288 187.812 110.538 172.314C111.064 168.854 112.034 165.475 113.422 162.262"
                                        stroke="white"
                                        strokeWidth="0.75"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path d="M156.086 133.72L157.57 135.848" stroke="white" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round" />
                                    <path
                                        d="M170.002 15.644L175.344 1.20661L185.514 12.816L203.014 109.052L187.53 111.88L170.002 15.644Z"
                                        stroke="white"
                                        strokeWidth="0.75"
                                        strokeLinejoin="round"
                                    />
                                    <path d="M175.352 1.21601L195.236 110.33" stroke="white" strokeWidth="0.75" strokeLinecap="round" />
                                    <path
                                        d="M197.888 139.516L203.068 138.564L201.556 130.276C200.044 130.612 198.252 130.865 196.398 131.256L197.888 139.516Z"
                                        stroke="white"
                                        strokeWidth="0.75"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M198.478 113.476L197.834 110.004L192.654 110.956L193.298 114.428C194.234 114.26 197.927 113.589 198.478 113.476Z"
                                        stroke="white"
                                        strokeWidth="0.75"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="py-14 md:py-[100px]">
                <div className="container">
                    <div className="pb-12">
                        <h4 className="pb-5 text-xl font-bold text-black dark:text-white sm:text-2xl">Privacy Policy</h4>
                        <p className="pb-5 text-lg font-medium">
                            At aust.edu, accessible at aust.edu, one of our main priorities is the privacy of our visitors. This
                            Privacy Policy document contains types of information that is collected and recorded by www.aust.edu and how we use it.
                        </p>
                        <p className="pb-5 text-lg font-medium">
                            If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us through email
                            at info@aust.edu
                        </p>
                        <p className="text-lg font-medium">
                            This privacy policy applies only to our online activities and is valid for visitors to our website with regards to the information
                            that they shared and/or collect in www.aust.edu. This policy is not applicable to any information collected offline or
                            via channels other than this website.
                        </p>
                    </div>
                    <div className="pb-12">
                        <h4 className="pb-5 text-xl font-bold text-black dark:text-white sm:text-2xl">Consent</h4>
                        <p className="pb-5 text-lg font-medium">By using our website, you hereby consent to our Privacy Policy and agree to its terms.</p>
                        <p className="text-lg font-medium">
                            Most interactive websites use cookies to let us retrieve the user's details for each visit. Cookies are used by our website to
                            enable the functionality of certain areas to make it easier for people visiting our website. Some of our affiliate/advertising
                            partners may also use cookies.
                        </p>
                    </div>
                    <div className="pb-12">
                        <h4 className="pb-5 text-xl font-bold text-black dark:text-white sm:text-2xl">Information we collect</h4>
                        <p className="pb-5 text-lg font-medium">
                            The personal information that you are asked to provide, and the reasons why you are asked to provide it, will be made clear to you
                            at the point we ask you to provide your personal information.
                        </p>
                        <p className="pb-5 text-lg font-medium">
                            If you contact us directly, we may receive additional information about you such as your name, email address, phone number, the
                            contents of the message and/or attachments you may send us, and any other information you may choose to provide.
                        </p>
                        <p className="pb-5 text-lg font-medium">
                            When you register for an Account, we may ask for your contact information, including items such as name, company name, address,
                            email address, and telephone number.
                        </p>
                    </div>
                    <div className="pb-12">
                        <h4 className="pb-5 text-xl font-bold text-black dark:text-white sm:text-2xl">How we use your information</h4>
                        <p className="pb-5 text-lg font-medium">We use the information we collect in various ways, including to:</p>
                        <ul className="text-lg font-medium">
                            <li className="relative before:absolute before:top-3 before:h-1.5 before:w-1.5 before:rounded-full before:bg-gray ltr:pl-4 ltr:before:left-0 rtl:pr-4 rtl:before:right-0">
                                Provide, operate, and maintain our website
                            </li>
                            <li className="relative before:absolute before:top-3 before:h-1.5 before:w-1.5 before:rounded-full before:bg-gray ltr:pl-4 ltr:before:left-0 rtl:pr-4 rtl:before:right-0">
                                Improve, personalize, and expand our website
                            </li>
                            <li className="relative before:absolute before:top-3 before:h-1.5 before:w-1.5 before:rounded-full before:bg-gray ltr:pl-4 ltr:before:left-0 rtl:pr-4 rtl:before:right-0">
                                Understand and analyze how you use our website
                            </li>
                            <li className="relative before:absolute before:top-3 before:h-1.5 before:w-1.5 before:rounded-full before:bg-gray ltr:pl-4 ltr:before:left-0 rtl:pr-4 rtl:before:right-0">
                                Develop new products, services, features, and functionality
                            </li>
                            <li className="relative before:absolute before:top-3 before:h-1.5 before:w-1.5 before:rounded-full before:bg-gray ltr:pl-4 ltr:before:left-0 rtl:pr-4 rtl:before:right-0">
                                Communicate with you, either directly or through one of our partners, including for customer service, to provide you with
                                updates
                            </li>
                        </ul>
                    </div>
                    <div className="pb-12">
                        <h4 className="pb-5 text-xl font-bold text-black dark:text-white sm:text-2xl">Links to Other Sites/Apps</h4>
                        <p className="text-lg font-medium">
                            Our Website links to other websites/Websites that may collect personally identifiable information about you. Mntra is not
                            responsible for the privacy practices or the content of those linked websites/Websites.
                        </p>
                    </div>
                    <div className="pb-12">
                        <h4 className="pb-5 text-xl font-bold text-black dark:text-white sm:text-2xl">Security Precautions</h4>
                        <p className="text-lg font-medium">
                            Our Website has stringent security measures in place to protect the loss, misuse, and alteration of the information under our
                            control. Whenever you change or access your account information, we offer the use of a secure server. Once your information is in
                            our possession we adhere to strict security guidelines, protecting it against unauthorized access.
                        </p>
                    </div>
                    <div>
                        <h4 className="pb-5 text-xl font-bold text-black dark:text-white sm:text-2xl">Choice/Opt-Out</h4>
                        <p className="text-lg font-medium">
                            We provide all users with the opportunity to opt-out of receiving non-essential (promotional, marketing-related) communications from
                            us on behalf of our partners, and from us in general, after setting up an account. If you want to remove your contact information
                            from all our lists and newsletters, please visit unsubscribe.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Privacypolicy;
