import { useState } from "react";
import {
  GoogleMap,
  Marker,
  Polyline,
  DistanceMatrixService,
} from "@react-google-maps/api";

import AppLoading from "../common/loading";
import { useGoogleMap } from "../../context/google-map";

export default function MyGoogleMap() {
  const [isMapLoading, setIsMapLoading] = useState(true);
  const { isLoaded } = useGoogleMap();

  if (!isMapLoading || !isLoaded) {
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
      <GoogleMap
        zoom={10}
        center={center}
        mapContainerStyle={{ width: "100%", height: "100%" }}
      >
        <Marker position={origin} />
        <Marker position={destination} />
        <Polyline
          path={pathCoordinates}
          options={{
            strokeColor: "tomato",
            strokeOpacity: 1,
            strokeWeight: 2,
            icons: [{ icon: "hello", offset: "0", repeat: "10px" }],
          }}
        />
        <DistanceMatrixService
          options={{
            origins: [origin],
            destinations: [destination],
            travelMode: "DRIVING",
          }}
          callback={(response) => console.log("distance res: ", response)}
        />
      </GoogleMap>
    </div>
  );
}

const origin = { lat: 31.5925, lng: 74.3095 };
const destination = { lat: 31.5841, lng: 74.4738 };
const pathCoordinates = [{ ...origin }, { ...destination }];
const center = { ...origin };
