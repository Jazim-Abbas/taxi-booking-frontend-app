import { Switch, Route, useRouteMatch } from "react-router-dom";
import AdminBookingList from "../pages/admin/booking-list";

import "../pages/admin/admin_dashboard_style.css";
import AdminVehicleList from "../pages/admin/vehicle-list";
import AdminAddVehicle from "../pages/admin/add-vehicle";
import AdminExtraList from "../pages/admin/extra-list";

export default function AdminRoutes() {
  const { path } = useRouteMatch();

  return (
    <>
      <Switch>
        <Route exact path={path}>
          <AdminBookingList />
        </Route>
        <Route path={`${path}/vehicles`}>
          <AdminVehicleList />
        </Route>
        <Route path={`${path}/add-vehicle`}>
          <AdminAddVehicle />
        </Route>
        <Route path={`${path}/extras`}>
          <AdminExtraList />
        </Route>
      </Switch>
    </>
  );
}
