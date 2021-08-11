import api from ".";

export function allVehicles() {
  return api.get("/vehicle/all");
}

export function createVehicle(vehicle) {
  const config = { headers: { "Content-Type": "multipart/form-data" } };
  let fd = new FormData();
  setFieldsToFormData(fd, vehicle);

  return api.post("/vehicle/add", fd, config);
}

export function getSingleVehicle(id) {
  return api.post("/vehicle/single", { vehicleId: id });
}

export function updateVehicle(id, vehicle) {
  const config = { headers: { "Content-Type": "multipart/form-data" } };
  let fd = new FormData();
  setFieldsToFormData(fd, { ...vehicle, vehicleId: id });
  // console.log("fd: ", fd.getAll());

  return api.patch("vehicle/update", fd, config);
}

function setFieldsToFormData(fd, fields) {
  console.log("fields: ", fields);
  for (const key in fields) {
    fd.append(key, fields[key]);
  }
}
