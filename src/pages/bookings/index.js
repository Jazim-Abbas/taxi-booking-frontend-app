import { useState } from "react";
import { Link, useRouteMatch } from "react-router-dom";

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
  const [bookings, setBookings] = useState([...bookingList]);

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
                  <_TableBody booking={booking} key={booking.id} />
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
        <p>{booking.pickupDate}</p>
      </td>
      <td>
        <p>{booking.pickupTime}</p>
      </td>
      <td>
        <Link to={`${url}/${booking.id}`}>View Detail</Link>
      </td>
    </tr>
  );
}
