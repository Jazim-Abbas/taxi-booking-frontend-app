import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";

import "./App.css";
import { store } from "./store";
import AppRoutes from "./routes/";
import { GoogleMapProvider } from "./context/google-map";

function App() {
  return (
    <Provider store={store}>
      <GoogleMapProvider>
        <Router>
          <AppRoutes />
        </Router>
      </GoogleMapProvider>
    </Provider>
  );
}

export default App;
