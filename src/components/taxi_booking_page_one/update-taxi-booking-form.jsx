import { useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import AutoComplete from "react-google-autocomplete";

import { orderTaxi } from "../../store/booking";
import { googleAutoCompleteOptions } from "../../utils/constants";

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return { width, height };
}

export default function UpdateTaxiBookingForm({ isOpen }) {
  // const [isOpen, setIsOpen] = useState(false);

  const booking = useSelector((state) => state.booking);
  const _dropLocationRef = useRef(null);
  const _pickupLocationRef = useRef(null);
  const dropLocationRef = useRef(null);
  const pickupLocationRef = useRef(null);
  const dispatch = useDispatch();
  const [initialBooking, setInitialBooking] = useState();
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    setInitialBooking({ ...booking.initialBooking });
  }, [booking]);

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // useEffect(() => {
  //   if (dropLocationRef && pickupLocationRef) {
  //     dropLocationRef.current.value = booking.initialBooking.dropoffLocation;
  //     pickupLocationRef.current.value = booking.initialBooking.pickupLocation;
  //     console.log("drop location ref: ", dropLocationRef);
  //   }
  // }, []);

  const handleSelectedPlace = (inputName, place) => {
    const { lat, lng } = place.geometry.location;

    const target = {
      name: inputName,
      value: place.formatted_address,
      [inputName + "_lat"]: lat(),
      [inputName + "_lng"]: lng(),
    };

    setInitialBooking((prev) => {
      return { ...prev, ...target, [inputName]: target.value };
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    console.log("name: ", name, "value: ", value);

    setInitialBooking((prev) => {
      return { ...prev, [name]: value.toString() };
    });
  };

  const handleUpdateSearch = () => {
    // const _booking = {
    //   ...initialBooking,
    //   dropoffLocation: dropLocationRef.current.value,
    //   pickupLocation: pickupLocationRef.current.value,
    // };

    let dropoffLocation = "";
    let pickupLocation = "";

    // console.log("desktop: ", dropLocationRef.current.value);
    // console.log("mobile: ", _dropLocationRef.current.value);
    console.log("window dimension: ", windowDimensions.width);

    if (windowDimensions.width > 540) {
      console.log("desktop");
      dropoffLocation = dropLocationRef.current.value;
    } else {
      console.log("mobile");

      dropoffLocation = _dropLocationRef.current.value;
    }

    if (windowDimensions.width > 540) {
      pickupLocation = pickupLocationRef.current.value;
    } else {
      pickupLocation = _pickupLocationRef.current.value;
    }

    const _booking = {
      ...initialBooking,
      dropoffLocation,
      pickupLocation,
    };

    // console.log("drop location ref: ", dropLocationRef, _dropLocationRef);
    // console.log("drop of location: ", _dropLocationRef.current.value);
    // console.log("pickup location: ", _pickupLocationRef.current.value);

    // console.log("form values inside component: ", _booking);
    dispatch(orderTaxi(_booking));
    // console.log("handle update search");
  };

  if (!initialBooking) {
    return <></>;
  }

  return (
    <div>
      <form style={{ display: isOpen ? "block" : "none" }}>
        <div class="airport_selection_fileds">
          <div class="airport_fileds">
            <span>
              <i class="fas fa-map-marker-alt"></i>
            </span>
            <div class="air_input">
              <span>Where From?</span>
              {/* <input type="location" placeholder="Departure Airport" /> */}
              <AutoComplete
                options={{ ...googleAutoCompleteOptions }}
                inputAutocompleteValue="off"
                defaultValue={initialBooking.pickupLocation}
                ref={_pickupLocationRef}
                // onPlaceSelected={(place) =>
                //   handleSelectedPlace("dropoffLocation", place)
                // }
                // value={initialBooking.dropoffLocation}
                // onChange={(e) => {
                //   e.target.name = "dropoffLocation";
                //   handleChange(e);
                // }}
              />
            </div>
          </div>

          <div class="airport_fileds airport_fileds_border">
            <span>
              <i class="fas fa-map-marker-alt"></i>
            </span>
            <div class="air_input">
              <span>Where To?</span>
              {/* <input type="location" placeholder="pickup Location" /> */}
              <AutoComplete
                options={{ ...googleAutoCompleteOptions }}
                ref={_dropLocationRef}
                defaultValue={initialBooking.dropoffLocation}
                // onPlaceSelected={(place) =>
                //   handleSelectedPlace("pickupLocation", place)
                // }
                // value={initialBooking.pickupLocation}
                // onChange={(e) => {
                //   e.target.name = "pickupLocation";
                //   handleChange(e);
                // }}
              />
            </div>
          </div>

          <div class="airport_fileds">
            <span>
              <i class="far fa-calendar-minus"></i>
            </span>
            <div class="air_input">
              <span>Pickup Date</span>
              <input
                type="date"
                placeholder="Flight Departure"
                name="pickupDate"
                value={initialBooking.pickupDate}
                onChange={handleChange}
              />
            </div>
          </div>

          {!initialBooking.isOneWay && (
            <div class="airport_fileds ">
              <span>
                <i class="far fa-calendar-minus"></i>
              </span>
              <div class="air_input">
                <span>Return Date</span>
                <input
                  type="date"
                  placeholder="Add Return"
                  name="returnDate"
                  value={initialBooking.returnDate}
                  onChange={handleChange}
                />
              </div>
            </div>
          )}

          <div class="airport_fileds ">
            <span>
              <i class="far fa-calendar-minus"></i>
            </span>
            <div class="air_input">
              <span>Pickup Time</span>
              <input
                type="time"
                placeholder="Time"
                name="pickupTime"
                value={initialBooking.pickupTime}
                onChange={handleChange}
              />
            </div>
          </div>

          {!initialBooking.isOneWay && (
            <div class="airport_fileds ">
              <span>
                <i class="far fa-calendar-minus"></i>
              </span>
              <div class="air_input">
                <span>Return Time</span>
                <input
                  type="time"
                  placeholder="Time"
                  name="returnTime"
                  value={initialBooking.returnTime}
                  onChange={handleChange}
                />
              </div>
            </div>
          )}

          <div class="airport_fileds_checkbox airport_fileds_border">
            <input
              type="checkbox"
              name="isOneWay"
              // value={initialBooking.isOneWay}
              checked={initialBooking.isOneWay}
              onChange={(e) => {
                console.log(e.target.checked);
                setInitialBooking((prev) => ({
                  ...prev,
                  isOneWay: e.target.checked,
                }));
              }}
            />
            <label>Only one way</label>
          </div>

          {/* <div class="airport_fileds">
            <span>
              <i class="fas fa-user"></i>
            </span>
            <div class="air_input">
              <span>Passengers</span>
              <div class="page_one_Passengers">
                <h5>
                  <span>{initialBooking.passengers}</span>
                  <span>Passengers</span>
                </h5>
                <h5>
                <span>0</span>
                <span>Adult</span>
              </h5>
              </div>
            </div>
            <div class="quantites_box passenger_quantities">
              <div class="single_box">
                <div class="children">
                  <h3>Adults</h3>
                  <small>12+ year</small>
                </div>
                <div class="icon_section">
                  <i class="fas fa-minus-circle"></i>
                  <span>2</span>
                  <i class="fas fa-plus-circle"></i>
                </div>
              </div>

              <div class="single_box">
                <div class="children">
                  <h3>children</h3>
                  <small>2-12 year</small>
                </div>
                <div class="icon_section">
                  <i class="fas fa-minus-circle"></i>
                  <span>2</span>
                  <i class="fas fa-plus-circle"></i>
                </div>
              </div>

              <div class="single_box">
                <div class="children">
                  <h3>Infants</h3>
                  <small>under 2 year</small>
                </div>
                <div class="icon_section">
                  <i class="fas fa-minus-circle"></i>
                  <span>2</span>
                  <i class="fas fa-plus-circle"></i>
                </div>
              </div>
            </div>
          </div> */}

          <div class="booking_page_one_btn">
            <button type="button" onClick={handleUpdateSearch}>
              update search
            </button>
          </div>
        </div>
      </form>
      <form>
        <div class="airport_selection_fileds">
          <div class="airport_fileds">
            <span>
              <i class="fas fa-map-marker-alt"></i>
            </span>
            <div class="air_input">
              <span>Where From?</span>
              {/* <input type="location" placeholder="Departure Airport" /> */}
              <AutoComplete
                options={{ ...googleAutoCompleteOptions }}
                inputAutocompleteValue="off"
                ref={pickupLocationRef}
                defaultValue={initialBooking.pickupLocation}
                // onPlaceSelected={(place) =>
                //   handleSelectedPlace("dropoffLocation", place)
                // }
                // value={initialBooking.dropoffLocation}
                // onChange={(e) => {
                //   e.target.name = "dropoffLocation";
                //   handleChange(e);
                // }}
              />
            </div>
          </div>

          <div class="airport_fileds airport_fileds_border">
            <span>
              <i class="fas fa-map-marker-alt"></i>
            </span>
            <div class="air_input">
              <span>Where To?</span>
              {/* <input type="location" placeholder="pickup Location" /> */}
              <AutoComplete
                options={{ ...googleAutoCompleteOptions }}
                ref={dropLocationRef}
                defaultValue={initialBooking.dropoffLocation}
                // onPlaceSelected={(place) =>
                //   handleSelectedPlace("pickupLocation", place)
                // }
                // value={initialBooking.pickupLocation}
                // onChange={(e) => {
                //   e.target.name = "pickupLocation";
                //   handleChange(e);
                // }}
              />
            </div>
          </div>

          <div class="airport_fileds">
            <span>
              <i class="far fa-calendar-minus"></i>
            </span>
            <div class="air_input">
              <span>Pickup Date</span>
              <input
                type="date"
                placeholder="Flight Departure"
                name="pickupDate"
                value={initialBooking.pickupDate}
                onChange={handleChange}
              />
            </div>
          </div>

          {!initialBooking.isOneWay && (
            <div class="airport_fileds ">
              <span>
                <i class="far fa-calendar-minus"></i>
              </span>
              <div class="air_input">
                <span>Return Date</span>
                <input
                  type="date"
                  placeholder="Add Return"
                  name="returnDate"
                  value={initialBooking.returnDate}
                  onChange={handleChange}
                />
              </div>
            </div>
          )}

          <div class="airport_fileds ">
            <span>
              <i class="far fa-calendar-minus"></i>
            </span>
            <div class="air_input">
              <span>Pickup Time</span>
              <input
                type="time"
                placeholder="Time"
                name="pickupTime"
                value={initialBooking.pickupTime}
                onChange={handleChange}
              />
            </div>
          </div>

          {!initialBooking.isOneWay && (
            <div class="airport_fileds ">
              <span>
                <i class="far fa-calendar-minus"></i>
              </span>
              <div class="air_input">
                <span>Return Time</span>
                <input
                  type="time"
                  placeholder="Time"
                  name="returnTime"
                  value={initialBooking.returnTime}
                  onChange={handleChange}
                />
              </div>
            </div>
          )}

          <div class="airport_fileds_checkbox airport_fileds_border">
            <input
              type="checkbox"
              name="isOneWay"
              // value={initialBooking.isOneWay}
              checked={initialBooking.isOneWay}
              onChange={(e) => {
                console.log(e.target.checked);
                setInitialBooking((prev) => ({
                  ...prev,
                  isOneWay: e.target.checked,
                }));
              }}
            />
            <label>Only one way</label>
          </div>

          {/* <div class="airport_fileds"> */}
          {/* <span>
              <i class="fas fa-user"></i>
            </span>
            <div class="air_input">
              <span>Passengers</span>
              <div class="page_one_Passengers">
                <h5>
                  <span>{initialBooking.passengers}</span>
                  <span>Passengers</span>
                </h5>
                <h5>
                <span>0</span>
                <span>Adult</span>
              </h5>
              </div>
            </div> */}
          {/* <div class="quantites_box passenger_quantities">
              <div class="single_box">
                <div class="children">
                  <h3>Adults</h3>
                  <small>12+ year</small>
                </div>
                <div class="icon_section">
                  <i class="fas fa-minus-circle"></i>
                  <span>2</span>
                  <i class="fas fa-plus-circle"></i>
                </div>
              </div>

              <div class="single_box">
                <div class="children">
                  <h3>children</h3>
                  <small>2-12 year</small>
                </div>
                <div class="icon_section">
                  <i class="fas fa-minus-circle"></i>
                  <span>2</span>
                  <i class="fas fa-plus-circle"></i>
                </div>
              </div>

              <div class="single_box">
                <div class="children">
                  <h3>Infants</h3>
                  <small>under 2 year</small>
                </div>
                <div class="icon_section">
                  <i class="fas fa-minus-circle"></i>
                  <span>2</span>
                  <i class="fas fa-plus-circle"></i>
                </div>
              </div>
            </div> */}
          {/* </div> */}

          <div class="booking_page_one_btn">
            <button type="button" onClick={handleUpdateSearch}>
              update search
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
