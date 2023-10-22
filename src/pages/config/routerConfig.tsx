import { type RouteProps } from 'react-router-dom';

import { AppRoutes, RoutePath } from 'shared/const/router';

export const routerConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.MAIN]: {
    path: RoutePath.main,
    element: <></>,
  },
};
