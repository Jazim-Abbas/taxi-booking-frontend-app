import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  GoogleMap,
  Marker,
  Polyline,
  DistanceMatrixService,
} from "@react-google-maps/api";

import AppLoading from "../common/loading";
import { useGoogleMap } from "../../context/google-map";

export default function MyGoogleMap() {
  const { initialBooking, travelDistance, travelTime } = useSelector(
    (state) => state.booking
  );
  const { isLoaded } = useGoogleMap();
  const [location, setLocation] = useState();
  const [isMapLoading, setIsMapLoading] = useState(true);
  const {
    dropoffLocation_lat,
    dropoffLocation_lng,
    pickupLocation_lat,
    pickupLocation_lng,
  } = initialBooking;

  useEffect(() => {
    const origin = { lat: pickupLocation_lat, lng: pickupLocation_lng };
    const destination = { lat: dropoffLocation_lat, lng: dropoffLocation_lng };
    const center = { ...origin };
    const pathCoordinates = [{ ...origin }, { ...destination }];

    setLocation({ origin, destination, center, pathCoordinates });
  }, [
    dropoffLocation_lat,
    dropoffLocation_lng,
    pickupLocation_lat,
    pickupLocation_lng,
  ]);

  console.log("map location: ", location);

  const handleCalculateDistanceTime = (res) => {
    const { distance, duration } = res.rows[0].elements[0];

    console.log(distance, duration);
  };

  if (!isMapLoading || !isLoaded || !location) {
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
        backgroundColor: "lightgray",
        marginBottom: "20px",
      }}
    >
      <GoogleMap
        zoom={10}
        center={location.center}
        mapContainerStyle={{ width: "100%", height: "100%" }}
      >
        <Marker position={location.origin} />
        <Marker position={location.destination} />
        <Polyline
          path={location.pathCoordinates}
          options={{
            strokeColor: "tomato",
            strokeOpacity: 1,
            strokeWeight: 2,
            icons: [{ icon: "hello", offset: "0", repeat: "10px" }],
          }}
        />
        <DistanceMatrixService
          options={{
            origins: [location.origin],
            destinations: [location.destination],
            travelMode: "DRIVING",
          }}
          callback={handleCalculateDistanceTime}
        />
      </GoogleMap>
    </div>
  );
}

// const origin = { lat: 31.5925, lng: 74.3095 };
// const destination = { lat: 31.5841, lng: 74.4738 };
// const pathCoordinates = [{ ...origin }, { ...destination }];
// const center = { ...origin };
