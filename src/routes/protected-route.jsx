import { Redirect, Route } from "react-router-dom";

import useReduxDataCheck from "../hooks/useReduxDataCheck";

export default function ProtectedRoute({
  isAuth = false,
  isAdmin = false,
  reduxKeyNames = [],
  component: Component,
  ...rest
} = {}) {
  useReduxDataCheck([...reduxKeyNames]);
  const { user } = rest;

  return (
    <Route
      {...rest}
      render={(props) => {
        if (!isAuth && !isAdmin) {
          return <Component {...props} />;
        }

        if (!user) return <_RedirectToLogin {...props} />;

        if (isAdmin) {
          if (!user.isAdmin) {
            return <_RedirectToLogin {...props} />;
          }
        }

        return <Component {...props} />;
      }}
    />
  );
}

function _RedirectToLogin({ ...props }) {
  return (
    <Redirect to={{ pathname: "/login", state: { from: props.location } }} />
  );
}
