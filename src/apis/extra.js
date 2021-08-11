import api from ".";

export function allExtras() {
  return api.get("/extras/all");
}

export function createExtra(extra) {
  return api.post("/extras/add", extra);
}

export function getSingleExtra(id) {
  return api.post("/extras/single", { extrasId: id });
}

export function updateExtra(id, extra) {
  return api.patch("/extras/update", { ...extra, extrasId: id });
}
