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
  const [dropLocationGeocode, setDropLocationGeocode] = useState();
  const [pickupLocationGeocode, setPickupLocationGeocode] = useState();

  const {
    dropoffLocation_lat,
    dropoffLocation_lng,
    pickupLocation_lat,
    pickupLocation_lng,
    dropoffLocation,
    pickupLocation,
  } = initialBooking;

  useEffect(() => {
    console.log("convert geocode");
    _convertLocationToLatAndLng();
  }, [dropoffLocation, pickupLocation]);

  // useEffect(() => {
  //   const origin = { lat: pickupLocation_lat, lng: pickupLocation_lng };
  //   const destination = { lat: dropoffLocation_lat, lng: dropoffLocation_lng };
  //   const center = { ...origin };
  //   const pathCoordinates = [{ ...origin }, { ...destination }];

  //   setLocation({ origin, destination, center, pathCoordinates });
  // }, [
  //   dropoffLocation_lat,
  //   dropoffLocation_lng,
  //   pickupLocation_lat,
  //   pickupLocation_lng,
  // ]);

  console.log("map location: ", location);

  const _convertLocationToLatAndLng = async () => {
    const dropLocationGeocode = await _getLatAndLng(
      "Quantum Concepts, Constant Spring Road, Kingston, Jamaica"
    );
    const pickupLocationGeocode = await _getLatAndLng(
      "Sandals Royal Caribbean, Mahoe Close, Montego Bay, Jamaica"
    );

    setDropLocationGeocode(dropLocationGeocode);
    setPickupLocationGeocode(pickupLocationGeocode);
    console.log("dropLocationGeocode: ", dropLocationGeocode);
    console.log("pickupLocationGeocode: ", pickupLocationGeocode);
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

  if (
    !isMapLoading ||
    !isLoaded ||
    !dropLocationGeocode ||
    !pickupLocationGeocode
  ) {
    return (
      <div>
        <p>
          Please wait map is loading ...
          <AppLoading />
        </p>
      </div>
    );
  }

  const origin = {
    lat: pickupLocationGeocode.lat,
    lng: pickupLocationGeocode.lng,
  };
  const destination = {
    lat: dropLocationGeocode.lat,
    lng: dropLocationGeocode.lng,
  };
  const center = { ...origin };
  const pathCoordinates = [{ ...origin }, { ...destination }];

  console.log("origin: ", origin);
  console.log("destination: ", destination);
  console.log("center: ", center);
  console.log("pathCoordinates: ", pathCoordinates);

  // return <p>Google Map here ...</p>;

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
