import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import BookTaxiForm from "./book-form";
import { orderTaxi } from "../../store/booking";

export default function BookTaxi() {
  // const { initialBooking } = useSelector((state) => state.booking);
  // const [booking, setBooking] = useState(bookTaxiInitialValue);
  const history = useHistory();
  const dispatch = useDispatch();
  // const bookingState = useSelector((state) => state.booking);

  // useEffect(() => {
  //   setBooking({ ...initialBooking });
  // }, []);

  // const handleInputChage = (input) => {
  //   console.log("input: ", input);
  //   const { name, value, ...rest } = input;

  //   setBooking((prev) => {
  //     return { ...prev, [name]: value.toString(), ...rest };
  //   });
  // };

  // const handleSwapLocation = () => {
  //   const { dropoffLocation, pickupLocation } = booking;

  //   setBooking((prev) => {
  //     return {
  //       ...prev,
  //       dropoffLocation: pickupLocation,
  //       pickupLocation: dropoffLocation,
  //     };
  //   });
  // };

  const handleOrderTaxi = (formValues) => {
    console.log("order taxi");

    dispatch(orderTaxi(formValues));
    history.push("taxi_booking_page_one");
  };

  return (
    <BookTaxiForm
      onSubmit={handleOrderTaxi}
      // onSwapLocation={handleSwapLocation}
      // onInputChange={handleInputChage}
      // inputValues={booking}
    />
  );
}

const bookTaxiInitialValue = {
  dropoffLocation: "",
  pickupLocation: "",
  pickupDate: "",
  pickupTime: "",
  returnDate: "",
  returnTime: "",
  passengers: 1,
};
