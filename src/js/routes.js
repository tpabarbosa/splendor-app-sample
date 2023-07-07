
import OnBoarding from '../pages/onboarding.f7';
import HomePage from '../pages/home/home-view.f7';
import LoginPage from '../pages/login.f7';
import SignupPage from '../pages/signup.f7';

import NotFoundPage from '../pages/404.f7';

var routes = [
  {
    path: '/',
    component: OnBoarding,
  },
  {
    path: '/login/',
    component: LoginPage,
  },
  {
    path: '/signup/',
    component: SignupPage,
  },
  {
    path: '/home/',
    component: HomePage,
  },
  {
    path: '(.*)',
    component: NotFoundPage,
  },
];

export default routes;
