import AdminLayout from "../../../components/common/admin-layout";
import useApi from "../../../hooks/useApi";
import * as bookingsApi from "../../../apis/booking";
import AppLoading from "../../../components/common/loading";
import { useEffect } from "react";
import moment from "moment";

export default function AdminBookingList() {
  const _getBookingsCallback = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user.isAdmin) return bookingsApi.allBookingsForAllUsers;
    else return bookingsApi.allBookingsForUser;
  };

  const {
    request,
    isLoading,
    data: bookings,
  } = useApi(_getBookingsCallback(), { keyExtractor: "bookings" });

  useEffect(() => {
    request();
  }, []);

  if (isLoading || !bookings) {
    return <AppLoading />;
  }

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
                  <thead>
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
                  </thead>
                  <tbody>
                    {bookings.map((booking) => (
                      <_Booking key={booking._id} booking={booking} />
                    ))}
                  </tbody>
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

function _Booking({ booking }) {
  return (
    <tr>
      <td>{moment(booking.startDateTime).format("MMM Do, YYYY")}</td>
      <td>{moment(booking.startDateTime).format("LT")}</td>
      {!booking.returnDateTime && (
        <>
          <td>-</td>
          <td>-</td>
        </>
      )}
      {booking.returnDateTime && (
        <>
          <td>{moment(booking.returnDateTime).format("MMM Do, YYYY")}</td>
          <td>{moment(booking.startDateTime).format("LT")}</td>
        </>
      )}
      <td>{booking.transferType}</td>
      <td>{booking.isPaid ? "Confirmed" : "Not Confirmed"}</td>
      <td>{booking.totalPassengers}</td>
      <td>{booking.totalBags}</td>
      <td>
        <a href="#">View Detail</a>
      </td>
    </tr>
  );
}
