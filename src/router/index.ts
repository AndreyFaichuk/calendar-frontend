import Route from './routeType';
import { RoutesNames } from './routesNames';
import Login from '../pages/Login';
import Event from '../pages/Event';

export const publicRoutes: Route[] = [
    { path: RoutesNames.LOGIN, element: Login }
];

export const authRoutes: Route[] = [
    { path: RoutesNames.EVENT, element: Event }
];