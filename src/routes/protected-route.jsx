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
  // const { user } = rest;

  const user = JSON.parse(window.localStorage.getItem("user"));

  return (
    <Route
      {...rest}
      render={(props) => {
        if (!isAuth && !isAdmin) {
          return <Component {...props} />;
        }

        if (!user) return <RedirectToLogin {...props} />;


        if (isAdmin) {
          if (user.isAdmin == false) {
            return <RedirectToLogin {...props} />;
          }
        }

        return <Component {...props} />;
      }}
    />
  );
}

function RedirectToLogin({ ...props }) {
  return (
    <Redirect to={{ pathname: "/login", state: { from: props.location } }} />
  );
}
