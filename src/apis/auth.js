import api from ".";

export function login(userFields) {
  return api.post("/login");
}
