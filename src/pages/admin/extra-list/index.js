import AdminLayout from "../../../components/common/admin-layout";
import useApi from "../../../hooks/useApi";
import * as extrasApi from "../../../apis/extra";
import { useEffect } from "react";
import AppLoading from "../../../components/common/loading";

export default function AdminExtraList() {
  return (
    <AdminLayout>
      <_ExtrasList />
    </AdminLayout>
  );
}

function _ExtrasList() {
  const {
    request,
    isLoading,
    data: extras,
  } = useApi(extrasApi.allExtras, { keyExtractor: "extras" });

  useEffect(() => {
    request();
  }, []);

  if (isLoading || !extras) {
    return <AppLoading />;
  }

  return (
    <section class="profile_section" id="extras">
      <section class="admin_our_fleet">
        <div class="car_custom_container">
          <h2>Extras</h2>

          <div class="admin_fleet_services">
            {extras.map((extra) => (
              <_SingleExtra key={extra.id} extra={extra} />
            ))}
          </div>
        </div>
      </section>
    </section>
  );
}

function _SingleExtra({ extra }) {
  return (
    <div class="admin_single_service">
      <h3>{extra.name}</h3>
      <h4>{extra.description} </h4>
      <div class="vehical_price_box">
        <span>{extra.price}$</span>
      </div>
      <div class="single_taxi_btn">
        <a href="#">
          <i class="fas fa-pen"></i>
        </a>
      </div>
    </div>
  );
}
