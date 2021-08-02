import api from ".";

export function createBooking(booking) {
  return api.post("/booking/add", { ...booking });
}
