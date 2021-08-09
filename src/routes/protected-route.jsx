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

  // console.log("user: ", user);
  const user = JSON.parse(window.localStorage.getItem("user"));

  return (
    <Route
      {...rest}
      render={(props) => {
        if (!isAuth && !isAdmin) {
          return <Component {...props} />;
        }

        console.log("1");

        if (!user) return <RedirectToLogin {...props} />;

        console.log("2");

        if (isAdmin) {
          if (!user.isAdmin) {
            return <RedirectToLogin {...props} />;
          }
        }

        console.log("3");

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
