import { configureStore } from "@reduxjs/toolkit";

import bookingTaxiReducer from "./booking";

export const store = configureStore({
  reducer: {
    booking: bookingTaxiReducer,
  },
});
