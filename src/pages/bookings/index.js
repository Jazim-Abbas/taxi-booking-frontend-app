import moment from "moment";
import { useEffect, useState } from "react";
import { Link, useRouteMatch } from "react-router-dom";

import useApi from "../../hooks/useApi";
import * as bookingsApi from "../../apis/booking";
import AppLoading from "../../components/common/loading";

const bookingList = [
  {
    id: 1,
    pickupLocation: "abc",
    dropoffLocation: "abc",
    pickupDate: "2020-05-12",
    pickupTime: "10:05 AM",
  },
  {
    id: 2,
    pickupLocation: "abc",
    dropoffLocation: "abc",
    pickupDate: "2020-05-12",
    pickupTime: "10:05 AM",
  },
  {
    id: 3,
    pickupLocation: "abc",
    dropoffLocation: "abc",
    pickupDate: "2020-05-12",
    pickupTime: "10:05 AM",
  },
  {
    id: 4,
    pickupLocation: "abc",
    dropoffLocation: "abc",
    pickupDate: "2020-05-12",
    pickupTime: "10:05 AM",
  },
];

export default function BookingListScreen() {
  const _getBookingsCallback = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user.isAdmin) return bookingsApi.allBookingsForAllUsers;
    else return bookingsApi.allBookingsForUser;
  };

  const {
    request,
    isLoading,
    data: bookings,
  } = useApi(_getBookingsCallback(), {
    keyExtractor: "bookings",
  });

  useEffect(() => {
    request();
  }, []);

  if (isLoading || !bookings) {
    return <AppLoading />;
  }

  return (
    <>
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
                {bookings.map((booking) => (
                  <_TableBody booking={booking} key={booking._id} />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
}

function _TableBody({ booking }) {
  const { url } = useRouteMatch();

  return (
    <tr>
      <td>
        <p>{booking.pickupLocation}</p>
      </td>
      <td>
        <p>{booking.dropoffLocation}</p>
      </td>
      <td>
        <p>{moment(booking.startDateTime).format("MMM Do, YYYY")}</p>
      </td>
      <td>
        <p>{moment(booking.startDateTime).format("LT")}</p>
      </td>
      <td>
        <Link to={`${url}/${booking._id}`}>View Detail</Link>
      </td>
    </tr>
  );
}
