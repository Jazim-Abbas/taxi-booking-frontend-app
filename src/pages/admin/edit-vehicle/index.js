import { useHistory, useRouteMatch } from "react-router-dom";
import AdminLayout from "../../../components/common/admin-layout";

import useApi from "../../../hooks/useApi";
import * as vehiclesApi from "../../../apis/vehicle";
import { useEffect, useState } from "react";
import AppLoading from "../../../components/common/loading";
import { VehicleForm } from "../add-vehicle";
import { BASE_URL } from "../../../utils/constants";

export default function EditVehicle() {
  const history = useHistory();
  const [actualFile, setActualFile] = useState("");
  const [file, setFile] = useState("");
  const { params } = useRouteMatch();
  const {
    request,
    isLoading,
    data: vehicle,
  } = useApi(vehiclesApi.getSingleVehicle, { keyExtractor: "vehicle" });
  const updateVehicle = useApi(vehiclesApi.updateVehicle, {
    hasCatchError: true,
  });

  useEffect(() => {
    request(params.id);
  }, []);

  const handleChangeFile = (e) => {
    setActualFile(e.target.files[0]);
    setFile(URL.createObjectURL(e.target.files[0]));
  };

  const handleSubmit = async ({ formValues }) => {
    const _vehicle = {
      name: formValues.name,
      luggageCapacity: formValues.luggage,
      passengerCapacity: formValues.passenger,
      pricePerKM: formValues.price,
      isAvailable: true,
      imagePath: actualFile ? "" : _getImage(),
      image: actualFile,
    };
    console.log("handle submit: ", _vehicle);

    try {
      await updateVehicle.request(vehicle.id, _vehicle);
      history.push("/admin/vehicles");
    } catch (_) {}
  };

  if (isLoading || !vehicle) {
    return <AppLoading />;
  }

  const _getImage = () => {
    return BASE_URL + "/" + vehicle.image;
  };

  const initialValues = {
    name: vehicle.name,
    luggage: vehicle.luggageCapacity,
    passenger: vehicle.passengerCapacity,
    price: vehicle.pricePerKM,
  };

  return (
    <AdminLayout>
      <section class="profile_section" id="add_new_car">
        <div class="add_car_container">
          <div class="profile_section_data">
            <h2>Edit Vehicle</h2>
            <VehicleForm
              onSubmit={handleSubmit}
              onChangeFile={handleChangeFile}
              initValues={{ ...initialValues, file: file ? file : _getImage() }}
            />
          </div>
        </div>
      </section>
    </AdminLayout>
  );
}
