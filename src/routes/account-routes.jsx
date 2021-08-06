import { Switch, Route, useRouteMatch } from "react-router-dom";
import AccountNavbar from "../components/common/account-navbar";
import AccountScreen from "../pages/account";
import BookingListScreen from "../pages/bookings";
import SingleBookingScreen from "../pages/bookings/single-booking";
import Home from "../pages/Home";
import ProtectedRoute from "./protected-route";

export default function AccountRoutes() {
  const { path } = useRouteMatch();

  return (
    <>
      <AccountNavbar />

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        {/* <Route exact path={path}>
          <AccountScreen />
        </Route>
        <Route exact path={`${path}/bookings`}>
          <BookingListScreen />
        </Route> */}
        <ProtectedRoute exact path={`${path}`}>
          <BookingListScreen />
        </ProtectedRoute>
        {/* <Route exact path={`${path}/bookings/:id`}>
          <SingleBookingScreen />
        </Route> */}
        <ProtectedRoute exact path={`${path}/:id`}>
          <SingleBookingScreen />
        </ProtectedRoute>
      </Switch>
    </>
  );
}
