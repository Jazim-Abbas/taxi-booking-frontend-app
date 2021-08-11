import imgSrc from "./standard.png";
import AdminLayout from "../../../components/common/admin-layout";
import { AppForm, FieldError } from "../../../components/app-form";
import { Field } from "formik";
import { vehicleSchema } from "../../../utils/validations";

export default function AdminAddVehicle() {
  return (
    <AdminLayout>
      <_AddNewTaxi />
    </AdminLayout>
  );
}

function _AddNewTaxi() {
  const handleSubmit = ({ formValues }) => {
    console.log("handle submit: ", formValues);
  };

  return (
    <section class="profile_section" id="add_new_car">
      <div class="add_car_container">
        <div class="profile_section_data">
          <h2>Add New Vehicle</h2>
          <_VehicleForm onSubmit={handleSubmit} />
        </div>
      </div>
    </section>
  );
}

function _VehicleForm({ onSubmit }) {
  return (
    <AppForm
      initialValues={initialValues}
      validationSchema={vehicleSchema}
      handleSubmit={onSubmit}
    >
      <div class="profile_form">
        <div class="profile_section_one">
          <figure>
            <img src={imgSrc} />
          </figure>
          <div class="upload_pic">
            <input type="file" placeholder="change" />
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
