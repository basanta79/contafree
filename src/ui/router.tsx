import { RouteObject, redirect } from 'react-router-dom';
import { periodsRoute } from './pages/periods/Periods.route';
import { dashboardRoute } from './pages/dashboard/dashboard.route';
import { BASE_ROUTE, DASHBOARD_ROUTE } from './constants/routes';
import { notFoundRoute } from './pages/notFound/notFound.route';

export const router: RouteObject[] = [
	{
		Component: () => <></>,
		path: BASE_ROUTE,
		loader() {
			return redirect(DASHBOARD_ROUTE);
		},
	},
	dashboardRoute,
	notFoundRoute,
];