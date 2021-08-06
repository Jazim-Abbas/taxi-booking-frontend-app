import { Switch, Route } from "react-router-dom";

import ProtectedRoute from "./protected-route";
import { BASE_ROUTE, PUBLIC_ROUTES, PROTECTED_ROUTES } from "./routes-list";

export default function AppRoutes() {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <Switch>
      <Route exact path={BASE_ROUTE.path}>
        <BASE_ROUTE.Component />
      </Route>

      {/* <Route path="/account">
        <AccountRoutes />
      </Route> */}

      {PUBLIC_ROUTES.map((route) => (
        <Route key={route.path} path={route.path}>
          <route.Component />
        </Route>
      ))}

      {PROTECTED_ROUTES.map((route) => (
        // <Route key={route.path} path={route.path}>
        //   <route.Component />
        // </Route>
        <ProtectedRoute
          key={route.path}
          path={route.path}
          reduxKeyNames={route.reduxKeyNames}
          component={route.Component}
          user={user}
          isAdmin
        />
      ))}
    </Switch>
  );
}
