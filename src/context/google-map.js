import React from "react";
import { useJsApiLoader } from "@react-google-maps/api";

const GoogleMapContext = React.createContext({ isLoaded: false });

export function GoogleMapProvider({ children }) {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    // googleMapsApiKey: DEV_GOOGLE_MAP_API_KEY,
  });

  return (
    <GoogleMapContext.Provider value={{ isLoaded }}>
      {children}
    </GoogleMapContext.Provider>
  );
}

export const useGoogleMap = () => React.useContext(GoogleMapContext);
