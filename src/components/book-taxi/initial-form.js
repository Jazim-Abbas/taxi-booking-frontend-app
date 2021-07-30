import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { orderTaxi } from "../../store/booking";

export default function BookTaxiInitialForm() {
  const bookingState = useSelector((state) => state.booking);
  const dispatch = useDispatch();
  console.log(bookingState);

  const handleOrderTaxi = () => {
    console.log("order taxi");
    dispatch(orderTaxi());
  };

  return (
    <form id="order_taxi_form">
      <div className="booking_info banner_booking_first_child">
        <div className="interchange_arrow">
          <i className="fas fa-expand-arrows-alt"></i>
        </div>
        <div className="booking_fields departure_airport">
          <i className="fas fa-map-marker-alt"></i>
          <input type="location" placeholder="Departure Airport" />
        </div>
        <div className="booking_fields departure_airport">
          <i className="fas fa-map-marker-alt"></i>
          <input type="location" placeholder="pickup Location" />
        </div>

        <div className="booking_fields Arival_airport">
          <i className="fas fa-map-marker-alt"></i>
          <input type="location" placeholder="Arival Airport" />
        </div>
        <div className="booking_fields Arival_airport">
          <i className="fas fa-map-marker-alt"></i>
          <input type="location" placeholder="Going Location" />
        </div>
      </div>
      <div className="change_banner_layout">
        <div className="booking_fields flight_departure_date">
          <i className="far fa-calendar-minus" id="cancle"></i>
          <div className="time_date_input">
            <input
              type="text"
              placeholder="Flight Departure"
              onFocus={(e) => (e.target.type = "date")}
              onBlur={(e) => (e.target.type = "text")}
            />
            <input
              id="time"
              type="text"
              placeholder="Time"
              onFocus={(e) => (e.target.type = "time")}
              onBlur={(e) => (e.target.type = "text")}
            />
          </div>
        </div>

        <div className="booking_fields flight_Arival_date">
          <i className="far fa-calendar-minus" id="cancle"></i>
          <div className="time_date_input">
            <input type="text" placeholder="Flight Arival" />
            <input
              id="time"
              type="text"
              placeholder="Time"
              onFocus={(e) => (e.target.type = "time")}
              onBlur={(e) => (e.target.type = "text")}
            />
          </div>
        </div>

        <div className="booking_fields">
          <i className="far fa-calendar-minus" id="cancle"></i>
          <div className="time_date_input">
            <input
              type="text"
              placeholder="Add A Return"
              onFocus={(e) => (e.target.type = "date")}
              onBlur={(e) => (e.target.type = "text")}
            />
            <input
              id="time"
              type="text"
              placeholder="Time"
              onFocus={(e) => (e.target.type = "time")}
              onBlur={(e) => (e.target.type = "text")}
            />
          </div>
        </div>
      </div>

      <div className="booking_info">
        <div className="booking_fields">
          <i className="fas fa-car quantites_icon"></i>
          <div className="quantites">
            <h5>
              <span>2</span>Adult
            </h5>
            <h5>
              <span>0</span>children
            </h5>
          </div>
          <div className="quantites_box">
            <div className="single_box">
              <div className="children">
                <h3>Adults</h3>
                <small>12+ year</small>
              </div>
              <div className="icon_section">
                <i className="fas fa-minus-circle"></i>
                <span>2</span>
                <i className="fas fa-plus-circle"></i>
              </div>
            </div>

            <div className="single_box">
              <div className="children">
                <h3>children</h3>
                <small>2-12 year</small>
              </div>
              <div className="icon_section">
                <i className="fas fa-minus-circle"></i>
                <span>2</span>
                <i className="fas fa-plus-circle"></i>
              </div>
            </div>

            <div className="single_box">
              <div className="children">
                <h3>Infants</h3>
                <small>under 2 year</small>
              </div>
              <div className="icon_section">
                <i className="fas fa-minus-circle"></i>
                <span>2</span>
                <i className="fas fa-plus-circle"></i>
              </div>
            </div>
          </div>
        </div>
        <div className="booking_fields">
          {/* <Link to="/taxi_booking_page_one">Order Taxi Now</Link> */}
          <button type="button" onClick={handleOrderTaxi}>
            Order Taxi Now
          </button>
        </div>
      </div>
    </form>
  );
}
