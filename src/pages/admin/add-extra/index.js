import AdminLayout from "../../../components/common/admin-layout";

export default function AdminAddExtra() {
  return (
    <AdminLayout>
      <_AddNewExtra />
    </AdminLayout>
  );
}

function _AddNewExtra() {
  return (
    <section class="profile_section" id="add_new_extra">
      <div class="add_car_container">
        <div class="profile_section_data">
          <h2>Add New Extra</h2>
          <form>
            <div class="profile_form">
              <div class="profile_section_two">
                <div class="profile_name">
                  <label>Extra Name</label>
                  <input type="text" value="" placeholder="" />
                </div>
              </div>

              <div class="profile_section_two">
                <div class="profile_name">
                  <label>Extra Discription</label>
                  <input type="text" value="" placeholder="" />
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
