import AdminLayout from "../../../components/common/admin-layout";
import { AppForm, FieldError } from "../../../components/app-form";
import { Field } from "formik";
import { extraSchema } from "../../../utils/validations";

import useApi from "../../../hooks/useApi";
import * as extrasApi from "../../../apis/extra";
import { useHistory } from "react-router-dom";

export default function AdminAddExtra() {
  return (
    <AdminLayout>
      <_AddNewExtra />
    </AdminLayout>
  );
}

function _AddNewExtra() {
  const history = useHistory();
  const { request, isLoading } = useApi(extrasApi.createExtra, {
    hasCatchError: true,
  });

  const handleSubmit = async ({ formValues }) => {
    console.log("handle submit", formValues);
    try {
      await request(formValues);
      history.push("/admin/extras");
    } catch (_) {}
  };

  return (
    <section class="profile_section" id="add_new_extra">
      <div class="add_car_container">
        <div class="profile_section_data">
          <h2>Add New Extra</h2>
          <ExtraForm onSubmit={handleSubmit} initialValues={initialValues} />
        </div>
      </div>
    </section>
  );
}

export function ExtraForm({ onSubmit, initialValues }) {
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
