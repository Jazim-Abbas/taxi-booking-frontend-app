import { Switch, Route, useRouteMatch } from "react-router-dom";
import AccountScreen from "../pages/account";

export default function AccountRoutes() {
  const { path } = useRouteMatch();

  return (
    <Switch>
      <Route exact path={path}>
        <AccountScreen />
      </Route>
    </Switch>
  );
}
