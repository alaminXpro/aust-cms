// routes.jsx
import { lazy } from 'react';
import PrivateRoute from './PrivateRoute';
import path from 'path';

// Public routes
const Login = lazy(() => import('../pages/login'));
const Error404 = lazy(() => import('../pages/Error404'));
const Signup = lazy(() => import('../pages/signup'));

// Private routes
const Index = lazy(() => import('../pages/Index'));
const AddClub = lazy(() => import('../pages/AddClub'));
const EditClub = lazy(() => import('../pages/EditClub'));
const Clubs = lazy(() => import('../pages/Clubs'));
const Settings = lazy(() => import('../pages/Settings'));
const PendingMembers = lazy(() => import('../pages/pendingMembers'));
const ApprovedMembers = lazy(() => import('../pages/approvedMembers'));
const Moderators = lazy(() => import('../pages/moderators'));
const Test = lazy(() => import('../pages/test'));
const ChangePassword = lazy(() => import('../pages/changePassword'));
const Profile = lazy(() => import('../pages/profile'));
const Transactions = lazy(() => import('../pages/transactions'));
const routes = [
  // Public routes
  { path: '/login', element: <Login />, layout: 'blank' },
  {path: '/signup', element: <Signup />, layout: 'blank'},

  // Private routes
  {
    path: '/',
    element: <PrivateRoute />,
    children: [
      { path: '/', element: <Clubs />},
      { path: '/add/club', element: <AddClub />},
      { path: '/clubs', element: <Clubs />},
      { path: '/edit/club/:clubId', element: <EditClub /> },
      { path: '/user/settings', element: <Settings /> },
      { path: '/pendings/:clubId', element: <PendingMembers />},
      { path: '/members/:clubId', element: <ApprovedMembers /> },
      { path: '/moderators/:clubId', element: <Moderators /> },
      { path: '/test', element: <Test /> },
      { path: '/user/change-password', element: <ChangePassword /> },
      { path: '/profile/:studentId', element: <Profile /> },
      { path: '/transactions/:clubId', element: <Transactions /> },
    ],
  },

  // Catch-all route for 404 errors
  { path: '*', element: <Error404 />, layout: 'blank' },
];

export { routes };
