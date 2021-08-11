import { Switch, Route, useRouteMatch } from "react-router-dom";
import AdminBookingList from "../pages/admin/booking-list";

import "../pages/admin/admin_dashboard_style.css";

export default function AdminRoutes() {
  const { path } = useRouteMatch();

  return (
    <>
      <Switch>
        <Route exact path={path}>
          <AdminBookingList />
        </Route>
      </Switch>
    </>
  );
}
