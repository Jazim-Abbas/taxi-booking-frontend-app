import AdminLayout from "../../../components/common/admin-layout";

export default function AdminAddVehicle() {
  return (
    <AdminLayout>
      <_AddNewTaxi />
    </AdminLayout>
  );
}

function _AddNewTaxi() {
  return (
    <section class="profile_section" id="add_new_car">
      <div class="add_car_container">
        <div class="profile_section_data">
          <h2>Add New Vehicle</h2>
          <form>
            <div class="profile_form">
              <div class="profile_section_one">
                <figure>
                  <img src="image/standard.png" />
                </figure>
                <div class="upload_pic">
                  <input type="file" placeholder="change" />
                </div>
              </div>
              <div class="profile_section_two">
                <div class="profile_name">
                  <label>Vehicle Name</label>
                  <input type="text" value="" placeholder="" />
                </div>
              </div>

              <div class="profile_section_two">
                <div class="profile_name">
                  <label>Passenger capacity</label>
                  <input type="number" value="" placeholder="" />
                </div>
              </div>
              <div class="profile_section_two">
                <div class="profile_name">
                  <label>Laguage capacity</label>
                  <input type="number" value="" placeholder="" />
                </div>
              </div>
              <div class="profile_section_two">
                <div class="profile_name">
                  <label>price</label>
                  <input type="number" value="" placeholder="" />
                </div>
              </div>
            </div>
            <div class="profile_save_btn">
              <button>Save</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
