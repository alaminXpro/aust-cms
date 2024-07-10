// main.jsx
import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import 'react-perfect-scrollbar/dist/css/styles.css';
import './tailwind.css';
import './i18n';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { routes } from './router/routes';
import { Provider } from 'react-redux';
import { persistor, store } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import Loader from './components/layout/loader/index';

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import "/public/css/bootstrap.min.css"
import "/public/css/flaticon.css"
import "/public/css/menu.css"
import "/public/css/dropdown-effects/fade-down.css"
import "/public/css/lunar.css"
// import "/public/css/magnific-popup.css"
// import "/public/css/owl.carousel.min.css"
// import "/public/css/owl.theme.default.min.css"
// import SmoothScroll from "/components/elements/SmoothScroll"
import "/public/css/animate.css"
import "/public/css/pink-theme.css"
import "/public/css/responsive.css"

const router = createBrowserRouter(routes);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Suspense fallback={<Loader/>}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <RouterProvider router={router} />
        </PersistGate>
      </Provider>
    </Suspense>
  </React.StrictMode>
);
