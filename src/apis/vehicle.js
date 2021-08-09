import api from ".";

export function allVehicles() {
  return api.get("/vehicle/all");
}
