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
              {/* <div class="list_selecter">
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
              </div> */}

              <div class="">
                <table id="">
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
              {/* <div class="pagination-container">
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
              </div> */}
            </div>
            {/* <!--         End of pagination --> */}
          </div>
        </div>
      </div>
      {/* end body */}
    </AdminLayout>
  );
}

function _Table() {
  return (
    <section class="account_managment_section" id="account_managment_section">
      <div class="container">
        <div class="account_managment">
          <table>
            <thead>
              <tr class="border_bottom">
                <th>Pick up</th>
                <th>Drop off</th>
                <th>pickup date</th>
                <th>Time</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>
                  <p>asdsad</p>
                </td>
                <td>
                  <p>asdasd</p>
                </td>
                <td>
                  <p>asda</p>
                </td>
                <td>
                  <p>asda</p>
                </td>
                <td>
                  {/* <Link to={`${url}/${booking._id}`}>View Detail</Link> */}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
