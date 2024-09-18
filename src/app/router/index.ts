import React from "react";
import DejkstraPage from "../../pages/Graph/DejkstraPage";
import { routeConstants } from "../../shared/constants/routeConstants";
import HomePage from "../../pages/Home/HomePage";
import BinaryTreePage from "../../pages/Graph/Trees/BinaryTreePage";
import AuthPage from "../../pages/Auth/AuthPage";
import SessionTypesPage from "../../pages/Session/Types/SessionTypesPage";

export interface IRoute {
    path: string;
    component: React.ComponentType;
    exact?: boolean;
}

export const publicRoutes: IRoute[] = [
    {path: routeConstants.HOME_ROUTE, exact: true, component: HomePage},
    {path: `${routeConstants.GRAPH_ROUTE}` + routeConstants.DEJKSTRA_ROUTE, exact: true, component: DejkstraPage},
    {path: `${routeConstants.TREE_ROUT}` + routeConstants.BINARYTREE_ROUT, exact: true, component: BinaryTreePage},
    {path: routeConstants.AUTH, exact: true, component: AuthPage},
    {path: routeConstants.SESSION_TYPES, exact: true, component: SessionTypesPage}
]

export const privateRoutes: IRoute[] = [
    {path: routeConstants.HOME_ROUTE, exact: true, component: HomePage},
    {path: `${routeConstants.GRAPH_ROUTE}` + routeConstants.DEJKSTRA_ROUTE, exact: true, component: DejkstraPage},
    {path: `${routeConstants.TREE_ROUT}` + routeConstants.BINARYTREE_ROUT, exact: true, component: BinaryTreePage},
]