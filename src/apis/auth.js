import api from ".";

export function register(userFields) {
  return api.post("/user/register", { ...userFields });
}

export function login(userFields) {
  return api.post("/user/login", { ...userFields });
}
