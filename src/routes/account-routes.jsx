import { Switch, Route, useRouteMatch } from "react-router-dom";
import AccountNavbar from "../components/common/account-navbar";
import AccountScreen from "../pages/account";
import BookingListScreen from "../pages/bookings";
import Home from "../pages/Home";

export default function AccountRoutes() {
  const { path } = useRouteMatch();

  return (
    <>
      <AccountNavbar />

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path={path}>
          <AccountScreen />
        </Route>
        <Route exact path={`${path}/bookings`}>
          <BookingListScreen />
        </Route>
      </Switch>
    </>
  );
}
