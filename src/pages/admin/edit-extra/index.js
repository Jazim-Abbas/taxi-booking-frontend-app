import { useHistory, useRouteMatch } from "react-router-dom";
import AdminLayout from "../../../components/common/admin-layout";

import useApi from "../../../hooks/useApi";
import * as extrasApi from "../../../apis/extra";
import { useEffect } from "react";
import AppLoading from "../../../components/common/loading";
import { ExtraForm } from "../add-extra";

export default function EditExtra() {
  const history = useHistory();
  const { params } = useRouteMatch();
  const {
    request,
    isLoading,
    data: extra,
  } = useApi(extrasApi.getSingleExtra, { keyExtractor: "extras" });
  const updateExtra = useApi(extrasApi.updateExtra, { hasCatchError: true });

  useEffect(() => {
    request(params.id);
  }, []);

  const handleSubmit = async ({ formValues }) => {
    console.log("handle submit: ", formValues);
    try {
      await updateExtra.request(extra._id, formValues);
      history.push("/admin/extras");
    } catch (_) {}
  };

  if (isLoading || !extra) {
    return <AppLoading />;
  }

  return (
    <AdminLayout>
      <section class="profile_section" id="add_new_extra">
        <div class="add_car_container">
          <div class="profile_section_data">
            <h2>Edit Extra</h2>
            <ExtraForm initialValues={extra} onSubmit={handleSubmit} />
          </div>
        </div>
      </section>
    </AdminLayout>
  );
}
