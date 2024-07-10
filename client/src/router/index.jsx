import { createBrowserRouter } from 'react-router-dom';
import BlankLayout from '/src/components/layout/BlankLayout.jsx';
import DefaultLayout from '/src/components/layout/DefaultLayout.jsx';
import { routes } from './routes';

const finalRoutes = routes.map((route) => {
    return {
        ...route,
        element: route.layout === 'blank' ? <BlankLayout>{route.element}</BlankLayout> : <DefaultLayout>{route.element}</DefaultLayout>,
    };
});

const router = createBrowserRouter(finalRoutes);

export default router;
