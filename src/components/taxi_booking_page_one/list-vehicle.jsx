import { useEffect } from "react";

import useApi from "../../hooks/useApi";
import AppLoading from "../common/loading";
import SingleVehicle from "./single-vehicle";
import * as vehicleApi from "../../apis/vehicle";

export default function ListVehicle() {
  const { request, data: vehicles } = useApi(vehicleApi.allVehicles, {
    keyExtractor: "vehicles",
  });

  useEffect(() => {
    request();
    //eslint-disable-next-line
  }, []);

  if (!vehicles) {
    return <AppLoading />;
  }

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
