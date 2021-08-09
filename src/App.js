import { useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider, useDispatch, useSelector } from "react-redux";

import "./App.css";
import { store } from "./store";
import AppRoutes from "./routes/";
import { GoogleMapProvider } from "./context/google-map";
import { createUser } from "./store/user";

function App() {
  return (
    <Provider store={store}>
      <Application />
    </Provider>
  );
}

export default App;

function Application() {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);

  useEffect(() => {
    _storeUserToReduxIfAvailableInLocalStorage();
    //eslint-disable-next-line
  }, []);

  const _storeUserToReduxIfAvailableInLocalStorage = () => {
    if (Object.keys(user).length > 0) return;

    const userInStorage = localStorage.getItem("user");
    if (!userInStorage) return;

    dispatch(createUser(JSON.parse(userInStorage)));
  };

  return (
    <GoogleMapProvider>
      <Router>
        <AppRoutes />
      </Router>
    </GoogleMapProvider>
  );
}
