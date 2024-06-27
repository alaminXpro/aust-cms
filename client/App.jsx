import Preloader from "/src/components/elements/Preloader.jsx"
import React, { useEffect, useState } from "react"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import routes from './routes'; // Your routes configuration
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
import NotFoundPage from "./src/pages/404";

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
      setTimeout(() => {
          setLoading(false);
      }, 1000);
  }, []);

  const renderRoutes = (routes) => routes.map((route, index) => {
      if (route.routes) {
          // For nested routes, render a Route component with nested routes
          return (
              <Route key={index} path={route.path} element={<route.component />}>
                  {renderRoutes(route.routes)}
              </Route>
          );
      }
      return <Route key={index} path={route.path} element={<route.component />} />;
  });

  return (
      <>
          {!loading ? (
              <BrowserRouter>
                  <Routes>
                      {renderRoutes(routes)}
                      <Route path="*" element={<NotFoundPage/>} /> {/* Catch-all route */}
                  </Routes>
              </BrowserRouter>
          ) : (
              <Preloader />
          )}
      </>
  );
}

export default App;