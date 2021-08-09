import api from ".";

export function allExtras() {
  return api.get("/extras/all");
}
