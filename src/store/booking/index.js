import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  initialBooking: {
    dropoffLocation: "",
    pickupLocation: "",
    pickupDate: "",
    pickupTime: "",
    returnDate: "",
    returnTime: "",
    passengers: 1,
    isOneWay: true,
  },
  vehicle: {},
  travelDistance: {},
  travelTime: {},
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
    updateExtras: (state, { payload }) => {
      const allExtras = {};

      state.extras.map((extra) => (allExtras[extra.id] = extra));

      payload.forEach((extra) => {
        allExtras[extra.id] = { ...extra };
      });

      state.extras = [];
      for (const extra in allExtras) {
        state.extras.push(allExtras[extra]);
      }
    },
    addPersonalDetail: (state, { payload }) => {
      console.log("redux store: ", payload);
      state.personaDetail = { ...payload };
    },
    addDistanceAndTime: (state, { payload }) => {
      state.travelDistance = payload.distance;
      state.travelTime = payload.duration;
    },
    resetAllFields: (_) => {
      return { ...initialState };
    },
  },
});

export const {
  orderTaxi,
  selectVehicle,
  addExtras,
  addPersonalDetail,
  updateExtras,
  addDistanceAndTime,
  resetAllFields,
} = booking.actions;

export default booking.reducer;
