import { Switch, Route } from "react-router-dom";

import { BASE_ROUTE, PUBLIC_ROUTES } from "./routes-list";

export default function AppRoutes() {
  return (
    <Switch>
      <Route exact path={BASE_ROUTE.path}>
        <BASE_ROUTE.Component />
      </Route>

      {PUBLIC_ROUTES.map((route) => (
        <Route key={route.path} path={route.path}>
          <route.Component />
        </Route>
      ))}
    </Switch>
  );
}
