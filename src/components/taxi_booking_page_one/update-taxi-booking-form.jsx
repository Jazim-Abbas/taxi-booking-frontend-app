export default function UpdateTaxiBookingForm() {
  return (
    <form>
      <div class="airport_selection_fileds">
        <div class="airport_fileds">
          <span>
            <i class="fas fa-map-marker-alt"></i>
          </span>
          <div class="air_input">
            <span>Where From?</span>
            <input type="location" placeholder="Departure Airport" />
          </div>
        </div>

        <div class="airport_fileds airport_fileds_border">
          <span>
            <i class="fas fa-map-marker-alt"></i>
          </span>
          <div class="air_input">
            <span>Where To?</span>
            <input type="location" placeholder="pickup Location" />
          </div>
        </div>

        <div class="airport_fileds">
          <span>
            <i class="far fa-calendar-minus"></i>
          </span>
          <div class="air_input">
            <span>Pickup Date</span>
            <input type="date" placeholder="Flight Departure" />
          </div>
        </div>

        <div class="airport_fileds ">
          <span>
            <i class="far fa-calendar-minus"></i>
          </span>
          <div class="air_input">
            <span>Return Date</span>
            <input type="date" placeholder="Add Return" />
          </div>
        </div>

        <div class="airport_fileds ">
          <span>
            <i class="far fa-calendar-minus"></i>
          </span>
          <div class="air_input">
            <span>Pickup Time</span>
            <input type="time" placeholder="Time" />
          </div>
        </div>

        <div class="airport_fileds ">
          <span>
            <i class="far fa-calendar-minus"></i>
          </span>
          <div class="air_input">
            <span>Return Time</span>
            <input type="time" placeholder="Time" />
          </div>
        </div>

        <div class="airport_fileds_checkbox airport_fileds_border">
          <input type="checkbox" />
          <label>Only one way</label>
        </div>

        <div class="airport_fileds">
          <span>
            <i class="fas fa-user"></i>
          </span>
          <div class="air_input">
            <span>Passengers</span>
            <div class="page_one_Passengers">
              <h5>
                <span>0</span>
                <span>children</span>
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
        </div>

        <div class="booking_page_one_btn">
          <button type="submit">update search</button>
        </div>
      </div>
    </form>
  );
}
