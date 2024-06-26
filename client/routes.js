import Home from './src/pages/index';
import Login from './src/pages/login';
import SignUp from './src/pages/signup';
import PrivateRoute from '/PrivateRoute';
import Profile from './src/pages/profile';
import Dashboard from './src/pages/dashboard';
import ResetPassword from './src/pages/reset-password';
const routes = [
  { path: '/', component: Home },
  { path: '/login', component: Login },
  { path: '/signup', component: SignUp },
  { path: '/reset-password', component: ResetPassword},
  {
    path: '/',
    component: PrivateRoute,
    routes: [ // Use 'routes' instead of 'children'
      { path: 'dashboard', component: Dashboard },
      { path: 'profile', component: Profile}
    ],
  },
];

export default routes;