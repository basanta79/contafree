import { RouteObject, redirect } from 'react-router-dom';
import NotFound from './notFound.page';

export const notFoundRoute: RouteObject = {
	path: "/not-found",
	Component: NotFound,
};