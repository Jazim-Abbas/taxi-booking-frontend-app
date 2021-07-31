import { useState } from "react";
import GoogleMapReact from "google-map-react";

import AppLoading from "../common/loading";
import { GOOGLE_MAP_API_KEY } from "../../utils/constants";

export default function GoogleMap() {
  const [isMapLoading, setIsMapLoading] = useState(false);

  if (!isMapLoading) {
    return (
      <div>
        <p>
          Please wait map is loading ...
          <AppLoading />
        </p>
      </div>
    );
  }

  return (
    <div
      style={{
        height: "50vh",
        backgroundColor: "tomato",
        marginBottom: "20px",
      }}
    >
      <GoogleMapReact
        bootstrapURLKeys={{ key: GOOGLE_MAP_API_KEY }}
        defaultCenter={mapConfig.center}
        defaultZoom={mapConfig.zoom}
      />
    </div>
  );
}

const mapConfig = {
  center: {
    lat: 59.95,
    lng: 30.33,
  },
  zoom: 11,
};
