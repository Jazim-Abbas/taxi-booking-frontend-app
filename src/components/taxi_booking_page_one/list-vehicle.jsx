import { useEffect } from "react";

import useApi from "../../hooks/useApi";
import { useSelector } from "react-redux";

import AppLoading from "../common/loading";
import SingleVehicle from "./single-vehicle";
import * as vehicleApi from "../../apis/vehicle";

export default function ListVehicle() {
  const { travelDistance } = useSelector((state) => state.booking);
  const { request, data: vehicles } = useApi(vehicleApi.allVehicles, {
    keyExtractor: "vehicles",
  });

  useEffect(() => {
    request();
    //eslint-disable-next-line
  }, []);

  const getVehicleTotalPrice = (pricePerKM) => {
    let _vehiclePrice = 0;
    if (travelDistance.value) {
      _vehiclePrice = pricePerKM * (travelDistance.value / 1000);
    } else {
      _vehiclePrice = pricePerKM;
    }
    return Math.floor(_vehiclePrice);
  };

  if (!vehicles) {
    return <AppLoading />;
  }

  return (
    <>
      <form>
        {vehicles.map((vehicle) => (
          <SingleVehicle
            vehicle={vehicle}
            key={vehicle.id}
            getVehiclePrice={getVehicleTotalPrice}
          />
        ))}
      </form>
    </>
  );
}
