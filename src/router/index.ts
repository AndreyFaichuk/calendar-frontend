import Route from './routeType';
import { RoutesNames } from './routesNames';
import Login from '../pages/Login';
import Registration from '../pages/Registration';
import Home from '../pages/Home';
import Profile from '../pages/Profile';
import Calendar from '../pages/Calendar';

export const publicRoutes: Route[] = [
    { path: RoutesNames.LOGIN, element: Login },
    { path: RoutesNames.REGISTRATION, element: Registration }
];

export const authRoutes: Route[] = [
    { path: RoutesNames.HOME, element: Home },
    { path: RoutesNames.PROFILE, element: Profile },
    { path: RoutesNames.CALENDAR, element: Calendar }
];