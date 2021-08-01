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

const PUBLIC_ROUTES = [
  { path: "/About", Component: About },
  { path: "/Career", Component: Career },
  { path: "/Contact", Component: Contact },
  { path: "/Help", Component: Help },
  { path: "/Single_post_help_center", Component: Single_post_help_center },
  { path: "/Services", Component: Services },
  { path: "/Frequent_question_page", Component: Frequent_question_page },
  { path: "/taxi_booking_page_one", Component: TaxiBookingPageOne },
  { path: "/taxi_booking_page_two", Component: TaxiBookingPageTwo },
  { path: "/taxi_booking_page_three", Component: TaxiBookingPageThree },
  { path: "/taxi_booking_conformation", Component: TaxiBookingConfirmation },
  { path: "/login", Component: LoginScreen },
  { path: "/register", Component: SignUpScreen },
  { path: "/pay-amount", Component: PayAmount },
];

const BASE_ROUTE = { path: "/", Component: Home };

export { PUBLIC_ROUTES, BASE_ROUTE };
