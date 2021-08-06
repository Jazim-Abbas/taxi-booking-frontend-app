import api from ".";

export function createBooking(booking) {
  return api.post("/booking/add", { ...booking });
}

export function allBookingsForUser() {
  return api.get("/booking/all-bookings-of-single-user");
}

export function allBookingsForAllUsers() {
  return api.get("/booking/all-bookings-of-all-users");
}
