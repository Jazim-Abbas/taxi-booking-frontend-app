import { Switch, Route, useRouteMatch } from "react-router-dom";
import AdminBookingList from "../pages/admin/booking-list";

export default function AdminRoutes() {
  const { path } = useRouteMatch();

  return (
    <>
      <p>Admin Routes</p>

      <Switch>
        <Route exact path={path}>
          <AdminBookingList />
        </Route>
      </Switch>
    </>
  );
}
