
import { DASHBOARD_ROUTE } from '../../constants/routes';
import { periodsRoute } from '../periods/Periods.route';
import DashboardPage from './dashboard.page';
import { RouteObject, redirect } from 'react-router-dom';

export const dashboardRoute: RouteObject = {
	path: DASHBOARD_ROUTE,
	Component: DashboardPage,
    children: [
        periodsRoute
    ]
};