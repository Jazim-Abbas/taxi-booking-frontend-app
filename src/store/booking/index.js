import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  initialBooking: {
    dropoffLocation: "",
    pickupLocation: "",
    pickupDate: "",
    pickupTime: "",
    returnDate: "",
    returnTime: "",
    passengers: [],
    isOneWay: true,
  },
  vehicle: {},
  travelDistance: "",
  travelTime: "",
  extras: [],
  personaDetail: {},
};

const booking = createSlice({
  name: "booking",
  initialState,
  reducers: {
    orderTaxi: (state, { payload }) => {
      if (payload.returnDate && payload.returnTime) {
        payload.isOneWay = false;
      } else {
        payload.isOneWay = true;
      }

      state.initialBooking = { ...payload };
    },
    selectVehicle: (state, { payload }) => {
      console.log("redux store: ", "select vehicle: ", payload);
      state.vehicle = { ...payload };
    },
    addExtras: (state, { payload }) => {
      console.log("redux store: ", payload);
      state.extras = [...payload];
    },
    addPersonalDetail: (state, { payload }) => {
      console.log("redux store: ", payload);
      state.personaDetail = { ...payload };
    },
  },
});

export const { orderTaxi, selectVehicle, addExtras, addPersonalDetail } =
  booking.actions;

export default booking.reducer;
