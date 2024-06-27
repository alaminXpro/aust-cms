// routes.js
import Home from './src/pages/index';
import Login from './src/pages/login';
import SignUp from './src/pages/signup';
//import PrivateRoute from './components/PrivateRoute';

const routes = [
  { path: '/', component: Home },
  { path: '/login', component: Login },
  { path: '/signup', component: SignUp },
  // Define private routes as nested routes
];

export default routes;