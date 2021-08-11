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

function setFieldsToFormData(fd, fields) {
  for (const key in fields) {
    fd.append(key, fields[key]);
  }
}
