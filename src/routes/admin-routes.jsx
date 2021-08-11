import { Switch, Route, useRouteMatch } from "react-router-dom";
import AdminBookingList from "../pages/admin/booking-list";

import "../pages/admin/admin_dashboard_style.css";
import AdminVehicleList from "../pages/admin/vehicle-list";
import AdminAddVehicle from "../pages/admin/add-vehicle";
import AdminExtraList from "../pages/admin/extra-list";
import AdminAddExtra from "../pages/admin/add-extra";
import EditExtra from "../pages/admin/edit-extra";
import EditVehicle from "../pages/admin/edit-vehicle";
import ProtectedRoute from "./protected-route";

const routes = [
  { path: "/vehicles", Component: AdminVehicleList, isAdmin: true },
  { path: "/add-vehicle", Component: AdminAddVehicle, isAdmin: true },
  { path: "/extras", Component: AdminExtraList, isAdmin: true },
  { path: "/add-extra", Component: AdminAddExtra, isAdmin: true },
  { path: "/extra/:id/edit", Component: EditExtra, isAdmin: true },
  { path: "/vehicle/:id/edit", Component: EditVehicle, isAdmin: true },
];

export default function AdminRoutes() {
  const { path } = useRouteMatch();

  return (
    <>
      <Switch>
        <Route exact path={path}>
          <AdminBookingList />
        </Route>

        {/* {routes.map((route) => (
          // <ProtectedRoute
          //   key={route.path}
          //   path={`${path}/${route.path}`}
          //   component={route.Component}
          // />
          // <Route key={route.path} path={`admin/vehicles`}>
          //   <AdminVehicleList />
          // </Route>
        ))} */}
        <ProtectedRoute
          isAdmin={true}
          path={`${path}/vehicles`}
          component={AdminVehicleList}
        />
        {/* <AdminVehicleList />
        </ProtectedRoute> */}
        <ProtectedRoute isAdmin path={`${path}/add-vehicle`} component={AdminAddVehicle} />
          {/* <AdminAddVehicle /> */}
        {/* </ProtectedRoute> */}
        <ProtectedRoute isAdmin path={`${path}/extras`} component={AdminExtraList} />
          {/* <AdminExtraList /> */}
        {/* </ProtectedRoute> */}
        <ProtectedRoute isAdmin path={`${path}/add-extra`} component={AdminAddExtra} />
          {/* <AdminAddExtra /> */}
        {/* </ProtectedRoute> */}
        <ProtectedRoute isAdmin path={`${path}/extra/:id/edit`} component={EditExtra} />
          {/* <EditExtra /> */}
        {/* </ProtectedRoute> */}
        <ProtectedRoute isAdmin path={`${path}/vehicle/:id/edit`} component={EditVehicle} />
          {/* <EditVehicle /> */}
        {/* </ProtectedRoute> */}
      </Switch>
    </>
  );
}
