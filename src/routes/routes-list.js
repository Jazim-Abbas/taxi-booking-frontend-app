import About from "../components/AboutUs/About";
import Career from "../components/Career/Career";
import Contact from "../components/ContactUs/Contact";
import Help from "../components/HelpCenter/Help";
import LoginScreen from "../components/login/login";
import Services from "../components/Services/Services";
import SignUpScreen from "../components/signup/SignUp";
import TaxiBookingConfirmation from "../components/taxi_booking_conformation/taxi_booking_conformation";
import TaxiBookingPageOne from "../components/taxi_booking_page_one/taxi_booking_page_one";
import TaxiBookingPageThree from "../components/taxi_booking_page_three/taxi_booking_page_three";
import TaxiBookingPageTwo from "../components/taxi_booking_page_two/taxi_booking_page_two";
import Frequent_question_page from "../pages/Frequent_question_page";
import Home from "../pages/Home";
import PayAmount from "../pages/pay-amount";
import Single_post_help_center from "../pages/Single_post_help_center";

import { reduxBookingKeys } from "../utils/constants";
import AccountRoutes from "./account-routes";
import AdminRoutes from "./admin-routes";

const PUBLIC_ROUTES = [
  { path: "/About", Component: About },
  { path: "/Career", Component: Career },
  { path: "/Contact", Component: Contact },
  { path: "/Help", Component: Help },
  { path: "/Single_post_help_center", Component: Single_post_help_center },
  { path: "/Services", Component: Services },
  { path: "/Frequent_question_page", Component: Frequent_question_page },

  { path: "/login", Component: LoginScreen },
  { path: "/register", Component: SignUpScreen },
  { path: "/pay-amount", Component: PayAmount },
  // { path: "/account", Component: AccountRoutes },
  { path: "/booking", Component: AccountRoutes },
  { path: "/admin", Component: AdminRoutes },
];

const PROTECTED_ROUTES = [
  {
    path: "/taxi_booking_page_one",
    Component: TaxiBookingPageOne,
    reduxKeyNames: reduxBookingKeys.INITIAL_BOOKING,
    isAuth: true,
  },
  {
    path: "/taxi_booking_page_two",
    Component: TaxiBookingPageTwo,
    reduxKeyNames: reduxBookingKeys.VEHICLE,
    isAuth: true,
  },
  {
    path: "/taxi_booking_page_three",
    Component: TaxiBookingPageThree,
    reduxKeyNames: reduxBookingKeys.EXTRAS,
    isAuth: true,
  },
  {
    path: "/taxi_booking_conformation",
    Component: TaxiBookingConfirmation,
    reduxKeyNames: reduxBookingKeys.PERSONAL_DETAIL,
    isAuth: true,
  },
];

const BASE_ROUTE = { path: "/", Component: Home };

export { PUBLIC_ROUTES, BASE_ROUTE, PROTECTED_ROUTES };
