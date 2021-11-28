import Landing from "./pages/LandingPage";
import Login from "./components/Login";
import Register from "./components/Register";
import Profile from "./pages/Profile";
import BoardUser from "./pages/UserDashboard";

const routes = [
  {
    name: 'Landing',
    to: '/',
    component: <Landing />,
  },
  {
    name: 'Login',
    to: '/login',
    component: <Login />,
  },
  {
    name: 'Register',
    to: '/register',
    component: <Register />,
  },
  {
    name: 'Profile',
    to: '/profile',
    component: <Profile />,
  },
  {
    name: 'User',
    to: '/user',
    component: <BoardUser />,
  }
];

export { routes };
