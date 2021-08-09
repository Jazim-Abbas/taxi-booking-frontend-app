import { useState } from "react";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import AppLoading from "../common/loading";
import { useDispatch } from "react-redux";

import { resetAllFields } from "../../store/booking";
import useApi from "../../hooks/useApi";
import * as bookingsApi from "../../apis/booking";
import { useHistory } from "react-router";

const CARD_OPTIONS = {
  iconStyle: "solid",
  style: {
    base: {
      iconColor: "#c4f0ff",
      color: "#000",
      fontWeight: 500,
      fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
      fontSize: "16px",
      fontSmoothing: "antialiased",
      ":-webkit-autofill": { color: "#fce883" },
      "::placeholder": { color: "#87bbfd" },
    },
    invalid: {
      iconColor: "#ffc7ee",
      color: "#000",
    },
  },
};

export default function PaymentForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");
  const stripe = useStripe();
  const elements = useElements();
  const dispatch = useDispatch();
  const { request } = useApi(bookingsApi.confirmPayment, {
    hasCatchError: true,
  });
  const history = useHistory();

  console.log("cs", localStorage.getItem("cs"));

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   setIsLoading(true);

  //   try {
  //     const result = await stripe.confirmCardPayment(
  //       "pi_3JK13oClkiKKoyU10lfsLD9z_secret_lbBCllRt3Sn7e68z6cAf4Os2X",
  //       {
  //         payment_method: {
  //           card: elements.getElement(CardElement),
  //           billing_details: {
  //             email: "email@gmail.com",
  //           },
  //         },
  //       }
  //     );
  //     setIsLoading(false);
  //     console.log("result: ", result);

  //     if (result.paymentIntent.status === "succeeded") {
  //       setMessage(
  //         "Payment is clear. You are redirected to home page after 3 seconds"
  //       );
  //     }

  //     if (result.error) {
  //       throw result.error;
  //     }

  //     // const timer = setTimeout(() => {
  //     //   clearInterval(timer);
  //     //   history.replace("/");
  //     // }, 3000);
  //   } catch (err) {
  //     setIsLoading(false);
  //     console.log(err.message);
  //     setMessage(
  //       "Stripe is not working or maybe you don't have enough money in the bank"
  //     );
  //   }

  //   // if (result.error) {
  //   //   // Show error to your customer (e.g., insufficient funds)
  //   //   console.log(result.error.message);
  //   //   setMessage(result.error.message);

  //   //   setIsLoading(false);
  //   // } else {
  //   //   // The payment has been processed!
  //   //   if (result.paymentIntent.status === "succeeded") {
  //   //     setMessage("Money is in the bank!");
  //   //     // Show a success message to your customer
  //   //     // There's a risk of the customer closing the window before callback
  //   //     // execution. Set up a webhook or plugin to listen for the
  //   //     // payment_intent.succeeded event that handles any business critical
  //   //     // post-payment actions.
  //   //     setIsLoading(false);
  //   //   }
  //   // }
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const result = await stripe.confirmCardPayment(localStorage.getItem("cs"), {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: {
          email: "email@gmail.com",
        },
      },
    });

    setIsLoading(false);

    if (result.error) {
      // Show error to your customer (e.g., insufficient funds)
      console.log(result.error.message);
      setMessage(result.error.message);
    } else {
      // The payment has been processed!
      if (result.paymentIntent.status === "succeeded") {
        setMessage(
          "Payment is received! Please wait. After confirm your order you will be automatically redirect to homepage ..."
        );
        // Show a success message to your customer
        // There's a risk of the customer closing the window before callback
        // execution. Set up a webhook or plugin to listen for the
        // payment_intent.succeeded event that handles any business critical
        // post-payment actions.
        request(localStorage.getItem("bookingId")).then(() => {
          dispatch(resetAllFields());
          history.replace("/");
        });
      }
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h3 className="text">Please Enter your Credit Card Details</h3>
        <fieldset className="FormGroup">
          <div className="FormRow">
            {isLoading && <AppLoading />}
            <CardElement options={CARD_OPTIONS} />
          </div>
        </fieldset>
        <button className="btn btn-primary my-3">Pay</button>
        <p className="text" style={{ marginTop: 10 }}>
          {message}
        </p>
      </form>
    </>
  );
}
