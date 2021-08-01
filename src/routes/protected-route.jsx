import { Route } from "react-router-dom";

import useReduxDataCheck from "../hooks/useReduxDataCheck";

export default function ProtectedRoute({
  hasCheckAuth = false,
  reduxKeyNames = [],
  component: Component,
  ...rest
} = {}) {
  useReduxDataCheck([...reduxKeyNames]);

  return (
    <Route
      {...rest}
      render={(props) => {
        return <Component {...props} />;
      }}
    />
  );
}
