import { useEffect, useState } from "react";
import AutoComplete from 'react-google-autocomplete'

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
    setIsOpen((prev) => !prev);
  };

  const handleChangePassenger = (val) => {
    setPassengers((prev) => prev + val);
    onInputChange({ name: "passengers", value: +passengers + val });
  };

  return (
    <form id="order_taxi_form">
      <div className="booking_info banner_booking_first_child">
        <div className="interchange_arrow" onClick={onSwapLocation}>
          <i className="fas fa-expand-arrows-alt"></i>
        </div>
        <div className="booking_fields departure_airport">
          <i className="fas fa-map-marker-alt"></i>
          {/* <AutoComplete
            onPlaceSelected={(place) =>
              handleDropoffLocation(
                "dropoffLocation",
                place,
                setDropOffLocation
              )
            }
            onInvalid={() => console.log("invalid autocomplete")}
            options={{ types: ["(regions)"] }}
            value={dropoffLocation}
            onChange={(e) => {
              onInputChange({ name: "dropoffLocation", value: e.target.value });
            }}
          /> */}
          <input
            type="text"
            name="dropoffLocation"
            value={inputValues.dropoffLocation}
            onChange={handleChangeInput}
          />
        </div>
        <div className="booking_fields departure_airport">
          <i className="fas fa-map-marker-alt"></i>
          {/* <AutoComplete
            onPlaceSelected={(place) =>
              handleDropoffLocation("pickupLocation", place, setPickupLocation)
            }
            options={{ types: ["(regions)"] }}
            defaultValue={inputValues.pickupLocation}
            value={pickupLocation}
            onChange={(e) => {
              onInputChange({ name: "pickupLocation", value: e.target.value });
            }}
          /> */}
          <input
            type="text"
            name="pickupLocation"
            value={inputValues.pickupLocation}
            onChange={handleChangeInput}
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
            />
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
                  onClick={() => handleChangePassenger(-1)}
                ></i>
                <span> {passengers} </span>
                <i
                  className="fas fa-plus-circle"
                  onClick={() => handleChangePassenger(1)}
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
