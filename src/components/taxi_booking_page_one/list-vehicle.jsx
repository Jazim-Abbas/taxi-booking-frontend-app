import { useState } from "react";

import SingleVehicle from "./single-vehicle";
import { vehicleList } from "./vehicles.data";

export default function ListVehicle() {
  const [vehicles, setVehicles] = useState(vehicleList);

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
