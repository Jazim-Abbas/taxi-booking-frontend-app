import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Geocode from "react-geocode";
import {
  GoogleMap,
  Marker,
  Polyline,
  DistanceMatrixService,
} from "@react-google-maps/api";

import AppLoading from "../common/loading";
import { useGoogleMap } from "../../context/google-map";
import { addDistanceAndTime } from "../../store/booking";
import { GOOGLE_MAP_API_KEY } from "../../utils/constants";

Geocode.setApiKey(GOOGLE_MAP_API_KEY);

export default function MyGoogleMap() {
  const dispatch = useDispatch();
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
    dropoffLocation,
    pickupLocation,
  } = initialBooking;

  useEffect(() => {
    console.log("convert geocode")
    _convertLocationToLatAndLng();
  }, [dropoffLocation, pickupLocation]);

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

  const _convertLocationToLatAndLng = async () => {
    const geocode = _getLatAndLng(dropoffLocation);
    console.log("geocode: ", geocode);
  };

  const _getLatAndLng = async (location) => {
    try {
      const res = await Geocode.fromAddress(location);
      return res.results[0].geometry.location;
    } catch (err) {
      console.log("error while geocoding: ", err);
    }
  };

  const handleCalculateDistanceTime = (res) => {
    const distanceMatrix = res.rows[0].elements[0];
    console.log("travel distance", travelDistance);

    if (distanceMatrix) {
      const { distance, duration } = distanceMatrix;

      if (travelDistance && travelTime) {
        if (
          !_isObjectEmpty(travelDistance) &&
          travelDistance.value === distance.value &&
          !_isObjectEmpty(travelTime) &&
          travelTime.value === duration.value
        )
          return;
      }

      dispatch(addDistanceAndTime({ distance, duration }));
      console.log(distance, duration);
    }
  };

  const _isObjectEmpty = (obj) => {
    return Object.keys(obj).length === 0;
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
