import api from ".";

export function allExtras() {
  return api.get("/extras/all");
}

export function createExtra(extra) {
  return api.post("/extras/add", extra);
}
