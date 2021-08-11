import { useHistory } from "react-router-dom";
import { useState } from "react";
import { Field } from "formik";

import imgSrc from "./standard.png";
import AdminLayout from "../../../components/common/admin-layout";
import { AppForm, FieldError } from "../../../components/app-form";
import { vehicleSchema } from "../../../utils/validations";
import useApi from "../../../hooks/useApi";
import * as vehicleApi from "../../../apis/vehicle";

export default function AdminAddVehicle() {
  return (
    <AdminLayout>
      <_AddNewTaxi />
    </AdminLayout>
  );
}

function _AddNewTaxi() {
  const history = useHistory();
  const [actualFile, setActualFile] = useState();
  const [file, setFile] = useState("");
  const { request, isLoading } = useApi(vehicleApi.createVehicle, {
    hasCatchError: true,
  });

  const handleChangeFile = (e) => {
    setActualFile(e.target.files[0]);
    setFile(URL.createObjectURL(e.target.files[0]));
  };

  const handleSubmit = async ({ formValues }) => {
    const vehicle = {
      name: formValues.name,
      luggageCapacity: formValues.luggage,
      passengerCapacity: formValues.passenger,
      pricePerKM: formValues.price,
      isAvailable: true,
      image: actualFile,
    };
    console.log(vehicle);

    try {
      await request(vehicle);
      history.push("/admin/vehicles");
    } catch (err) {}
  };

  return (
    <section class="profile_section" id="add_new_car">
      <div class="add_car_container">
        <div class="profile_section_data">
          <h2>Add New Vehicle</h2>
          <_VehicleForm
            onSubmit={handleSubmit}
            onChangeFile={handleChangeFile}
            initValues={{ file }}
          />
        </div>
      </div>
    </section>
  );
}

function _VehicleForm({ onSubmit, onChangeFile, initValues }) {
  return (
    <AppForm
      initialValues={initialValues}
      validationSchema={vehicleSchema}
      handleSubmit={onSubmit}
    >
      <div class="profile_form">
        <div class="profile_section_one">
          {initValues.file && (
            <figure>
              <img
                src={initValues.file}
                style={{ width: "100%", height: "100%" }}
              />
            </figure>
          )}
          <div class="upload_pic">
            <input type="file" placeholder="change" onChange={onChangeFile} />
          </div>
        </div>
        <div class="profile_section_two">
          <div class="profile_name">
            <label>Vehicle Name</label>
            <Field type="text" name="name" placeholder="" />
            <FieldError field="name" />
          </div>
        </div>

        <div class="profile_section_two">
          <div class="profile_name">
            <label>Passenger capacity</label>
            <Field type="number" name="passenger" placeholder="" />
            <FieldError field="passenger" />
          </div>
        </div>
        <div class="profile_section_two">
          <div class="profile_name">
            <label>Laguage capacity</label>
            <Field type="number" name="luggage" placeholder="" />
            <FieldError field="luggage" />
          </div>
        </div>
        <div class="profile_section_two">
          <div class="profile_name">
            <label>price</label>
            <Field type="number" name="price" placeholder="" />
            <FieldError field="price" />
          </div>
        </div>
      </div>
      <div class="profile_save_btn">
        <button type="submit">Save</button>
      </div>
    </AppForm>
  );
}

const initialValues = {
  image: "",
  name: "",
  passenger: "",
  luggage: "",
  price: "",
};
