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
    updateExtras: (state, { payload }) => {
      const allExtras = {};

      state.extras.map((extra) => (allExtras[extra.id] = extra));
      // state.extras = payload.map((extra) => {
      //   if (extra.id === allExtras[extra.id].id) {
      //     return { ...extra };
      //   }
      // });

      payload.forEach((extra) => {
        allExtras[extra.id] = { ...extra };
      });

      state.extras = [];
      for (const extra in allExtras) {
        state.extras.push(allExtras[extra]);
      }

      // state.extras = state.extras.map((extra) => {
      //   if (extra.id === payload.id) {
      //     return { ...payload };
      //   }
      //   return extra;
      // });
    },
    addPersonalDetail: (state, { payload }) => {
      console.log("redux store: ", payload);
      state.personaDetail = { ...payload };
    },
  },
});

export const {
  orderTaxi,
  selectVehicle,
  addExtras,
  addPersonalDetail,
  updateExtras,
} = booking.actions;

export default booking.reducer;
