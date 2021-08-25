import * as yup from "yup";

const registerSchema = yup.object().shape({
  username: yup.string().min(8).required(),
  email: yup.string().email().required(),
  password: yup.string().min(8).required(),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match"),
});

const loginSchema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(8).required(),
});

const personalDetailSchema = yup.object().shape({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  passengerEmail: yup.string().email().required(),
  passengerNumber: yup.number().required(),
  pickupFlightNumber: yup.number().required(),
  returnFlightNumber: yup.number().required(),
  totalPassengers: yup.number().required(),
  totalBags: yup.number().required(),
});

const vehicleSchema = yup.object().shape({
  name: yup.string().required(),
  passenger: yup.number().required(),
  luggage: yup.number().required(),
  price: yup.number().required(),
  type: yup.string().required(),
});

const extraSchema = yup.object().shape({
  name: yup.string().required(),
  description: yup.string().required(),
  price: yup.number().required(),
});

export {
  loginSchema,
  registerSchema,
  personalDetailSchema,
  vehicleSchema,
  extraSchema,
};
