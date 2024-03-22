import React from "react";
import DejkstraPage from "../../pages/Graph/DejkstraPage";
import { routeConstants } from "../../shared/constants/routeConstants";
import HomePage from "../../pages/Home/HomePage";

export interface IRoute {
    path: string;
    component: React.ComponentType;
    exact?: boolean;
}

export const publicRoutes: IRoute[] = [
    {path: routeConstants.HOME_ROUTE, exact: true, component: HomePage},
    {path: `${routeConstants.GRAPH_ROUTE}` + routeConstants.DEJKSTRA_ROUTE, exact: true, component: DejkstraPage}
]

export const privateRoutes: IRoute[] = [

]