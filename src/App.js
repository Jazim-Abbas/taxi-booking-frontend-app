import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";

import { store } from "./store";
import { GoogleMapProvider } from "./context/google-map";
import "./App.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
import AppRoutes from "./routes/";

function App() {
  return (
    <Provider store={store}>
      <GoogleMapProvider>
        <Router>
          <Header />

          <AppRoutes />

          <Footer />
        </Router>
      </GoogleMapProvider>
    </Provider>
  );
}

export default App;
