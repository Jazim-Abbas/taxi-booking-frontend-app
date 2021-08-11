import AdminLayout from "../../../components/common/admin-layout";

export default function AdminBookingList() {
  return (
    <AdminLayout>
      {/* body */}
      <div class="body">
        <div class="admin_container">
          {/* <!-- dashboard window start--> */}
          <div class="dashboard_window" id="dashboard_window">
            <div class="dashboard_form">
              <strong>Booking History:</strong>
              <div class="list_selecter">
                <select class="form-control" name="state" id="maxRows">
                  <option value="5000">Show ALL Rows</option>
                  <option value="5">5</option>
                  <option value="10">10</option>
                  <option value="15">15</option>
                  <option value="20">20</option>
                  <option value="50">50</option>
                  <option value="70">70</option>
                  <option value="100">100</option>
                </select>
              </div>
              <div class="show_product">
                <table id="table-id">
                  <tr>
                    <th>Pickup Date</th>
                    <th>Pickup Time</th>
                    <th>Return Date</th>
                    <th>Return Time</th>
                    <th>Transfer Type</th>
                    <th>Payment Status</th>
                    <th>Total Passengers</th>
                    <th>Bags</th>
                    <th>Action</th>
                  </tr>
                  <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>
                      <a href="#">View Detail</a>
                    </td>
                  </tr>
                </table>
              </div>

              {/* <!--        Start Pagination --> */}
              <div class="pagination-container">
                <nav>
                  <ul class="pagination">
                    <li data-page="prev">
                      <span>
                        {" "}
                        <span class="sr-only">(current)</span>
                      </span>
                    </li>

                    <li data-page="next" id="prev">
                      <span>
                        {" "}
                        <span class="sr-only">(current)</span>
                      </span>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
            {/* <!--         End of pagination --> */}
          </div>
        </div>
      </div>
      {/* end body */}
    </AdminLayout>
  );
}
