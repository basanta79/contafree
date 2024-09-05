import { RouteObject, redirect } from 'react-router-dom';
import PeriodListUi from './Periods.page';
import { PERIODS_LIST_ROUTE } from '../../constants/routes';

export const periodsRoute: RouteObject = {
	path: PERIODS_LIST_ROUTE,
	Component: PeriodListUi,
};