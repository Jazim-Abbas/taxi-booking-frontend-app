export const GOOGLE_MAP_API_KEY = "AIzaSyB2Wfv6IK4HBOlEG8fdFzEzaIBpT_QRLmI";
export const DEV_GOOGLE_MAP_API_KEY = "AIzaSyCN93t8iD-Nqd1onAI7FyU3Klwk8ynca7E";

// const INITIAL_BOOKING = "initialBooking";
// const VEHICLE = "vehicle";
// const EXTRAS = "extras";
// const PERSONAL_DETAIL = "personaDetail";
export const reduxBookingKeys = {
  INITIAL_BOOKING: ["initialBooking"],
  VEHICLE: ["initialBooking", "vehicle"],
  EXTRAS: ["initialBooking", "vehicle", "extras"],
  PERSONAL_DETAIL: ["initialBooking", "vehicle", "extras", "personaDetail"],
};

const DEV_URL = "http://localhost:8000";
const PROD_URL = "https://jamrock-taxi-restapi.herokuapp.com/";

export const BASE_URL =
  process.env.NODE_ENV === "production" ? PROD_URL : DEV_URL;

export const googleAutoCompleteOptions = {
  // types: ["(regions)"],
  // types: ["establishment"],
  // types: ["lodging"],
  types: ["establishment"],
  componentRestrictions: { country: "jm" },
};
