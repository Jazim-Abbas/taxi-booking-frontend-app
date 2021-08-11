import { Switch, Route, useRouteMatch } from "react-router-dom";
import AdminBookingList from "../pages/admin/booking-list";

import "../pages/admin/admin_dashboard_style.css";
import AdminVehicleList from "../pages/admin/vehicle-list";
import AdminAddVehicle from "../pages/admin/add-vehicle";
import AdminExtraList from "../pages/admin/extra-list";
import AdminAddExtra from "../pages/admin/add-extra";
import EditExtra from "../pages/admin/edit-extra";
import EditVehicle from "../pages/admin/edit-vehicle";

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
        <Route path={`${path}/add-extra`}>
          <AdminAddExtra />
        </Route>
        <Route path={`${path}/extra/:id/edit`}>
          <EditExtra />
        </Route>
        <Route path={`${path}/vehicle/:id/edit`}>
          <EditVehicle />
        </Route>
      </Switch>
    </>
  );
}
