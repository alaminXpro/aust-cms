// routes.jsx
import { lazy } from 'react';
import PrivateRoute from './PrivateRoute';

// Public routes
const Index = lazy(() => import('../pages/index'));
const Login = lazy(() => import('../pages/login'));
const Signup = lazy(() => import('../pages/signup'));
const ResetPassword = lazy(() => import('../pages/reset-password'));
const Error404 = lazy(() => import('../pages/404'));

// Private routes
const Dashboard = lazy(() => import('../pages/dashboard'));
const Profile = lazy(() => import('../pages/profile'));

const routes = [
  // Public routes
  { path: '/', element: <Index />, layout: 'blank' },
  { path: '/login', element: <Login />, layout: 'blank' },
  { path: '/signup', element: <Signup />, layout: 'blank' },
  { path: '/reset-password', element: <ResetPassword />, layout: 'blank' },

  // Private routes
  {
    path: '/',
    element: <PrivateRoute />,
    children: [
      { path: 'dashboard', element: <Dashboard />, layout: 'blank' },
      { path: 'profile', element: <Profile />, layout: 'blank' },
    ],
  },

  // Catch-all route for 404 errors
  { path: '*', element: <Error404 />, layout: 'blank' },
];

export { routes };
