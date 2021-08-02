import { useEffect, useState } from "react";

import useApi from "../../hooks/useApi";
import AppLoading from "../common/loading";
import SingleVehicle from "./single-vehicle";
import { vehicleList } from "./vehicles.data";
import * as vehicleApi from "../../apis/vehicle";

export default function ListVehicle() {
  const { request, data: vehicles } = useApi(vehicleApi.allVehicles, {
    keyExtractor: "vehicles",
  });
  // const [vehicles, setVehicles] = useState(vehicleList);

  useEffect(() => {
    request();
  }, []);

  if (!vehicles) {
    return <AppLoading />;
  }

  console.log("vehicles: ", vehicles);

  return (
    <>
      <form>
        {vehicles.map((vehicle) => (
          <SingleVehicle vehicle={vehicle} key={vehicle.id} />
        ))}
      </form>
    </>
  );
}
