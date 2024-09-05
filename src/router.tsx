import { ComponentType, Suspense, lazy } from "react";
import { Navigate, RouteObject } from "react-router";

import SuspenseLoader from "./components/SuspenseLoader";
import SidebarLayout from "./layouts/SidebarLayout";

const Loader = <P extends object>(Component: ComponentType<P>) =>
    function (props: P) {
        return (
            <Suspense fallback={<SuspenseLoader />}>
                <Component {...props} />
            </Suspense>
        );
    };

// Pages

const WeatherDashboard = Loader(lazy(() => import("./pages/WeatherDashboard")));

const routes: RouteObject[] = [
    {
        path: "/",
        element: <Navigate to="/app/view-weather" replace />,
    },
    {
        path: "app",
        element: (
              <SidebarLayout />
          ),
        children: [
            {
                path: "view-weather",
                element: <WeatherDashboard />,
            },
        ],
    },
];

export default routes;