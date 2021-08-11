import imgSrc from "./standard.png";
import AdminLayout from "../../../components/common/admin-layout";
import useApi from "../../../hooks/useApi";
import * as vehicleApi from "../../../apis/vehicle";
import { useEffect } from "react";
import AppLoading from "../../../components/common/loading";
import { BASE_URL } from "../../../utils/constants";

export default function AdminVehicleList() {
  return (
    <AdminLayout>
      <_Vehicles />
    </AdminLayout>
  );
}

function _Vehicles() {
  const {
    request,
    isLoading,
    data: vehicles,
  } = useApi(vehicleApi.allVehicles, { keyExtractor: "vehicles" });

  useEffect(() => {
    request();
  }, []);

  if (isLoading || !vehicles) {
    return <AppLoading />;
  }

  return (
    <section class="message_window" id="car_type">
      <section class="admin_our_fleet">
        <div class="car_custom_container">
          <h2>Vehicles</h2>

          <div class="admin_fleet_services">
            {vehicles.map((vehicle) => (
              <_SingleVehicle key={vehicle.id} vehicle={vehicle} />
            ))}
          </div>
        </div>
      </section>
    </section>
  );
}

function _SingleVehicle({ vehicle }) {
  return (
    <div class="admin_single_service">
      <figure>
        <img src={`${BASE_URL}/${vehicle.image}`} style={{ width: "100%", height: "100%"}} />
      </figure>
      <h3>{vehicle.name}</h3>
      <h4>
        {vehicle.passengerCapacity} pax &amp; {vehicle.luggageCapacity} bags
      </h4>
      <div class="vehical_price_box">
        <span>{vehicle.pricePerKM}$ Per KM</span>
      </div>
      <div class="single_taxi_btn">
        <a href="#">
          <i class="fas fa-pen"></i>
        </a>
      </div>
    </div>
  );
}
