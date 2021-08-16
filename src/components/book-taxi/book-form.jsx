import { useEffect, useState } from "react";
import AutoComplete from "react-google-autocomplete";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";
import PlacesAutocomplete from "react-places-autocomplete";

import { googleAutoCompleteOptions } from "../../utils/constants";

export default function BookTaxiForm({
  onSubmit,
  onInputChange,
  inputValues,
  onSwapLocation,
}) {
  const [dropoffLocation, setDropOffLocation] = useState();
  const [pickupLocation, setPickupLocation] = useState();
  const [isOpen, setIsOpen] = useState(false);
  const [passengers, setPassengers] = useState(1);

  useEffect(() => {
    setDropOffLocation(inputValues.dropoffLocation);
    setPickupLocation(inputValues.pickupLocation);
  }, [inputValues.dropoffLocation, inputValues.pickupLocation]);

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    onInputChange({ name, value: value.toString() });
  };

  const handleDropoffLocation = (inputName, place, setLocationCallback) => {
    console.log("place: ", place);

    const { lat, lng } = place.geometry.location;

    const target = {
      name: inputName,
      value: place.formatted_address,
      [inputName + "_lat"]: lat(),
      [inputName + "_lng"]: lng(),
    };

    setLocationCallback(target.value);
    onInputChange({ ...target });
  };

  const handleDropDown = () => {
    console.log("handle dropdown");
    setIsOpen((prev) => !prev);
  };

  const handleChangePassenger = (val) => {
    setPassengers((prev) => prev + val);
    onInputChange({ name: "passengers", value: +passengers + val });
  };

  console.log("drop off location: ", dropoffLocation);

  return (
    <form id="order_taxi_form">
      <div className="booking_info banner_booking_first_child">
        <div className="interchange_arrow" onClick={onSwapLocation}>
          <i className="fas fa-expand-arrows-alt"></i>
        </div>
        <div className="booking_fields departure_airport">
          <i className="fas fa-map-marker-alt"></i>
          <AutoComplete
            onPlaceSelected={(place) =>
              handleDropoffLocation(
                "dropoffLocation",
                place,
                setDropOffLocation
              )
            }
            onInvalid={() => console.log("invalid autocomplete")}
            options={{ ...googleAutoCompleteOptions }}
            value={dropoffLocation}
            onChange={(e) => {
              onInputChange({ name: "dropoffLocation", value: e.target.value });
              console.log("e: ", e);
            }}
            placeholder="Drop Off Location"
          />
          {/* <input
            type="text"
            name="dropoffLocation"
            value={inputValues.dropoffLocation}
            onChange={handleChangeInput}
          /> */}
        </div>
        <div className="booking_fields departure_airport">
          <i className="fas fa-map-marker-alt"></i>
          <AutoComplete
            onPlaceSelected={(place) =>
              handleDropoffLocation("pickupLocation", place, setPickupLocation)
            }
            options={{ ...googleAutoCompleteOptions }}
            defaultValue={inputValues.pickupLocation}
            value={pickupLocation}
            onChange={(e) => {
              onInputChange({ name: "pickupLocation", value: e.target.value });
            }}
            placeholder="Pickup Location"
          />
          {/* <input
            type="text"
            name="pickupLocation"
            value={inputValues.pickupLocation}
            onChange={handleChangeInput}
          /> */}
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
            {/* <input
              type="text"
              placeholder="Flight Departure"
              onFocus={(e) => (e.target.type = "date")}
              onBlur={(e) => (e.target.type = "text")}
              name="pickupDate"
              value={inputValues.pickupDate}
              onChange={handleChangeInput}
            />
            <input
              id="time"
              type="text"
              placeholder="Time"
              onFocus={(e) => (e.target.type = "time")}
              onBlur={(e) => (e.target.type = "text")}
              name="pickupTime"
              value={inputValues.pickupTime}
              onChange={handleChangeInput}
            /> */}

            <div class="depature_box">
              <span>Flight Departure Date</span>{" "}
              <input
                type="date"
                placeholder="Flight Departure"
                name="pickupDate"
                value={inputValues.pickupDate}
                onChange={handleChangeInput}
              />
            </div>
            <div class="depature_time_box">
              <span>Time</span>{" "}
              {/* <input
                id="time"
                type="time"
                placeholder="Time"
                name="pickupTime"
                value={inputValues.pickupTime}
                onChange={onInputChange}
              /> */}
              <input
                id="time"
                type="time"
                placeholder="Time"
                name="pickupTime"
                value={inputValues.pickupTime}
                onChange={handleChangeInput}
              />
            </div>
          </div>
        </div>

        <div className="booking_fields flight_Arival_date">
          <i className="far fa-calendar-minus" id="cancle"></i>
          <div className="time_date_input">
            {/* <input type="text" placeholder="Flight Arival" />
            <input
              id="time"
              type="text"
              placeholder="Time"
              onFocus={(e) => (e.target.type = "time")}
              onBlur={(e) => (e.target.type = "text")}
              //   name="returnDate"
              //   value={inputValues.returnDate}
            /> */}

            <div class="depature_box">
              <span>Flight Departure Date</span>{" "}
              <input type="date" placeholder="Flight Departure" />
            </div>
            <div class="depature_time_box">
              <span>Time</span>{" "}
              <input id="time" type="time" placeholder="Time" />
            </div>
          </div>
        </div>

        <div className="booking_fields">
          <i className="far fa-calendar-minus" id="cancle"></i>
          <div className="time_date_input">
            {/* <input
              type="text"
              placeholder="Add A Return"
              onFocus={(e) => (e.target.type = "date")}
              onBlur={(e) => (e.target.type = "text")}
              name="returnDate"
              value={inputValues.returnDate}
              onChange={handleChangeInput}
            />
            <input
              id="time"
              type="text"
              placeholder="Time"
              onFocus={(e) => (e.target.type = "time")}
              onBlur={(e) => (e.target.type = "text")}
              name="returnTime"
              value={inputValues.returnTime}
              onChange={handleChangeInput}
            /> */}
            <div class="depature_box">
              <span>Flight Return Date</span>{" "}
              <input
                type="date"
                placeholder="Flight Departure"
                name="returnDate"
                value={inputValues.returnDate}
                onChange={handleChangeInput}
              />
            </div>
            <div class="depature_time_box">
              <span>Time</span>{" "}
              {/* <input
                id="time"
                type="time"
                placeholder="Time"
                name="returnTime"
                value={inputValues.returnTime}
                onChange={handleChangeInput}
              /> */}
              <input
                id="time"
                type="time"
                placeholder="Time"
                name="returnTime"
                value={inputValues.returnTime}
                onChange={handleChangeInput}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="booking_info">
        <div className="booking_fields" onClick={handleDropDown}>
          <i className="fas fa-car quantites_icon"></i>
          <div className="quantites">
            <h5>
              <span>{passengers}</span> Passengers
            </h5>
            {/* <h5>
              <span>0</span>children
            </h5> */}
          </div>
          <div
            className="quantites_box"
            style={{ display: isOpen ? "block" : "none" }}
          >
            <div className="single_box">
              <div className="children">
                <h3>Passengers</h3>
                {/* <small>12+ year</small> */}
              </div>
              <div className="icon_section">
                <i
                  className="fas fa-minus-circle"
                  onClick={(e) => {
                    e.stopPropagation();
                    if (passengers > 1) {
                      handleChangePassenger(-1);
                    }
                  }}
                ></i>
                <span> {passengers} </span>
                <i
                  className="fas fa-plus-circle"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleChangePassenger(1);
                  }}
                ></i>
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

function _AutoComplete() {
  const [value, setValue] = useState(
    "UET Gate 3, G. T. Road, Staff Houses Engineering University Lahore, Lahore, Pakistan"
  );

  return (
    <PlacesAutocomplete
      value={value}
      onChange={(e) => {
        console.log("e: ", e);
        setValue(e);
      }}
      onSelect={(e) => {
        setValue(e);
        console.log("on select: ", e);
      }}
    >
      {/* Custom render function */}
      {/* {renderFunc} */}

      {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
        <div>
          <input
            {...getInputProps({
              placeholder: "Search Places ...",
              className: "location-search-input",
            })}
          />
          <div className="autocomplete-dropdown-container">
            {loading && <div>Loading...</div>}
            {suggestions.map((suggestion) => {
              const className = suggestion.active
                ? "suggestion-item--active"
                : "suggestion-item";
              // inline style for demonstration purpose
              const style = suggestion.active
                ? { backgroundColor: "#fafafa", cursor: "pointer", zIndex: 10 }
                : { backgroundColor: "#ffffff", cursor: "pointer", zIndex: 10 };
              return (
                <div
                  {...getSuggestionItemProps(suggestion, {
                    className,
                    style,
                  })}
                >
                  <span>{suggestion.description}</span>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </PlacesAutocomplete>
  );
}

const renderFunc = ({
  getInputProps,
  getSuggestionItemProps,
  suggestions,
  loading,
}) => (
  <div className="autocomplete-root">
    <input {...getInputProps()} />
    <div className="autocomplete-dropdown-container" style={{ zIndex: "20" }}>
      {loading && <div>Loading...</div>}
      {suggestions.map((suggestion) => (
        <div {...getSuggestionItemProps(suggestion)}>
          <span>{suggestion.description}</span>
        </div>
      ))}
    </div>
  </div>
);
