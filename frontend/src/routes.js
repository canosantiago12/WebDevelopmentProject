import Landing from "./pages/Landing";
import Login from "./pages/Login";

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
  }
];

export { routes };
