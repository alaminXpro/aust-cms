// routes.jsx
import { lazy } from 'react';
import PrivateRoute from './PrivateRoute';

// Public routes
const Login = lazy(() => import('../pages/login'));
const Error404 = lazy(() => import('../pages/Error404'));
const Signup = lazy(() => import('../pages/signup'));

// Private routes
const Index = lazy(() => import('../pages/Index'));
const AddClub = lazy(() => import('../pages/AddClub'));
const EditClub = lazy(() => import('../pages/EditClub'));
const Clubs = lazy(() => import('../pages/Clubs'));

const routes = [
  // Public routes
  { path: '/login', element: <Login />, layout: 'blank' },
  {path: '/signup', element: <Signup />, layout: 'blank'},

  // Private routes
  {
    path: '/',
    element: <PrivateRoute />,
    children: [
      { path: '/', element: <Index />},
      { path: '/add/club', element: <AddClub />},
      { path: '/clubs', element: <Clubs />},
      { path: '/edit/club/:clubId', element: <EditClub /> },
    ],
  },

  // Catch-all route for 404 errors
  { path: '*', element: <Error404 />, layout: 'blank' },
];

export { routes };
