import { useEffect, useRef, useState } from "react";
import GooglePlaces from "react-google-places-autocomplete";
import AutoComplete from "react-google-autocomplete";

import { GOOGLE_MAP_API_KEY } from "../../utils/constants";

export default function BookTaxiForm({
  onSubmit,
  onInputChange,
  inputValues,
  onSwapLocation,
}) {
  const [dropoffLocation, setDropOffLocation] = useState();
  // const [pickupLocation, setPickupLocation] = useState(
  //   inputValues.pickupLocation
  // );

  useEffect(() => {
    setDropOffLocation(inputValues.dropoffLocation);
  }, [inputValues]);

  const handleDropoffLocation = (inputName, place) => {
    console.log(inputName, place);

    const target = {
      name: inputName,
      value: place.formatted_address,
    };

    setDropOffLocation(place.formatted_address);
    onInputChange({ target });
  };

  return (
    <form id="order_taxi_form">
      <div className="booking_info banner_booking_first_child">
        <div className="interchange_arrow" onClick={onSwapLocation}>
          <i className="fas fa-expand-arrows-alt"></i>
        </div>
        <div className="booking_fields departure_airport">
          <i className="fas fa-map-marker-alt"></i>
          <AutoComplete
            apiKey={GOOGLE_MAP_API_KEY}
            onPlaceSelected={(place) =>
              handleDropoffLocation("dropoffLocation", place)
            }
            // options={{ componentRestrictions: { country: "pk" } }}
            options={{ types: ["(regions)"] }}
            value={dropoffLocation}
            onChange={(e) => setDropOffLocation(e.target.value)}
          />
        </div>
        <div className="booking_fields departure_airport">
          <i className="fas fa-map-marker-alt"></i>
          <AutoComplete
            apiKey={GOOGLE_MAP_API_KEY}
            onPlaceSelected={(place) =>
              handleDropoffLocation("pickupLocation", place)
            }
            // options={{ componentRestrictions: { country: "pk" } }}
            options={{ types: ["(regions)"] }}
            defaultValue={inputValues.pickupLocation}
            // inputAutocompleteValue={inputValues.pickupLocation}
          />
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
              name="pickupDate"
              value={inputValues.pickupDate}
              onChange={onInputChange}
            />
            <input
              id="time"
              type="text"
              placeholder="Time"
              onFocus={(e) => (e.target.type = "time")}
              onBlur={(e) => (e.target.type = "text")}
              name="pickupTime"
              value={inputValues.pickupTime}
              onChange={onInputChange}
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
              //   name="returnDate"
              //   value={inputValues.returnDate}
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
              name="returnDate"
              value={inputValues.returnDate}
              onChange={onInputChange}
            />
            <input
              id="time"
              type="text"
              placeholder="Time"
              onFocus={(e) => (e.target.type = "time")}
              onBlur={(e) => (e.target.type = "text")}
              name="returnTime"
              value={inputValues.returnTime}
              onChange={onInputChange}
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
          <button type="button" onClick={onSubmit}>
            Order Taxi Now
          </button>
        </div>
      </div>
    </form>
  );
}
