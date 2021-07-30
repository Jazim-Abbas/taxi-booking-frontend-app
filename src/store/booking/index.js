import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  dropoffLocation: "",
  pickupLocation: "",
  pickupDate: "",
  pickupTime: "",
  returnDate: "",
  returnTime: "",
  passengers: [],
  isOneWay: true,
  vehicle: {},
  travelDistance: "",
  travelTime: "",
  extras: [],
  contactDetail: {},
  tripDetail: {},
};

const booking = createSlice({
  name: "booking",
  initialState,
  reducers: {
    orderTaxi: (state, { payload }) => {
      return { ...state, ...payload };
    },
  },
});

export const { orderTaxi } = booking.actions;

export default booking.reducer;
