import Route from './routeType';
import { RoutesNames } from './routesNames';
import Login from '../pages/Login';
import Registration from '../pages/Registration';
import Event from '../pages/Event';

export const publicRoutes: Route[] = [
    { path: RoutesNames.LOGIN, element: Login },
    { path: RoutesNames.REGISTRATION, element: Registration }
];

export const authRoutes: Route[] = [
    { path: RoutesNames.EVENT, element: Event }
];