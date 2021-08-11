import AdminLayout from "../../../components/common/admin-layout";
import { AppForm, FieldError } from "../../../components/app-form";
import { Field } from "formik";
import { extraSchema } from "../../../utils/validations";

export default function AdminAddExtra() {
  return (
    <AdminLayout>
      <_AddNewExtra />
    </AdminLayout>
  );
}

function _AddNewExtra() {
  const handleSubmit = ({ formValues }) => {
    console.log("handle submit", formValues);
  };

  return (
    <section class="profile_section" id="add_new_extra">
      <div class="add_car_container">
        <div class="profile_section_data">
          <h2>Add New Extra</h2>
          <_ExtraForm onSubmit={handleSubmit} />
        </div>
      </div>
    </section>
  );
}

function _ExtraForm({ onSubmit }) {
  return (
    <AppForm
      initialValues={initialValues}
      validationSchema={extraSchema}
      handleSubmit={onSubmit}
    >
      <div class="profile_form">
        <div class="profile_section_two">
          <div class="profile_name">
            <label>Extra Name</label>
            <Field type="text" name="name" placeholder="" />
            <FieldError field="name" />
          </div>
        </div>

        <div class="profile_section_two">
          <div class="profile_name">
            <label>Extra Discription</label>
            <Field type="text" name="description" placeholder="" />
            <FieldError field="description" />
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
        <button>Save</button>
      </div>
    </AppForm>
  );
}

const initialValues = {
  name: "",
  description: "",
  price: "",
};
