import { configureStore } from "@reduxjs/toolkit";

import bookingTaxiReducer from "./booking";
import userReducer from "./user";

export const store = configureStore({
  reducer: {
    booking: bookingTaxiReducer,
    user: userReducer,
  },
});
