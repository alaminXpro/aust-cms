import React from 'react';
import App from '../../App';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '/public/css/bootstrap.min.css';
import '/public/css/flaticon.css';
import '/public/css/menu.css';
import '/public/css/dropdown-effects/fade-down.css';
import '/public/css/lunar.css';
import '/public/css/animate.css';
import '/public/css/pink-theme.css';
import '/public/css/responsive.css';

const BlankLayout = ({ children }) => {
    return (
        <App>
            <div className="text-black dark:text-white-dark min-h-screen">{children}</div>
        </App>
    );
};

export default BlankLayout;