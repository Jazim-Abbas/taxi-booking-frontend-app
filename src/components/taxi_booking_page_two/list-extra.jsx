import { Link } from "react-router-dom";

export default function ListExtras() {
  return (
    <div class="page_two_section_two">
      <form>
        <div class="page_two_extra_detail">
          <div class="page_two_extra">
            <span>
              <h2>Red Stripe Beer (4 pack) </h2>
              <strong>$20 </strong>
            </span>
            <small>4 Red Stripe Beers served inside the vehicle </small>
          </div>
          <div class="page_two_extra_quantity">
            <span>
              <i class="far fa-plus-square"></i>
              <i class="far fa-minus-square"></i>
            </span>
            <strong>10</strong>
          </div>
          <div class="extra_select_btn">
            <button>Select</button>
          </div>
        </div>

        <div class="page_two_extra_detail">
          <div class="page_two_extra">
            <span>
              <h2>Champagne + 2 Flutes </h2>
              <strong>$60</strong>
            </span>
            <small>Bottle of chilled Champagne + 2 flutes </small>
          </div>
          <div class="page_two_extra_quantity">
            <span>
              <i class="far fa-plus-square"></i>
              <i class="far fa-minus-square"></i>
            </span>
            <strong>10</strong>
          </div>
          <div class="extra_select_btn">
            <button>Select</button>
          </div>
        </div>

        <div class="page_two_extra_detail_parttwo">
          <div class="page_two_extra">
            <span>
              <h2>En-route Jerk Stop </h2>
              <strong>$30 </strong>
            </span>
            <small>30 minute stop en-route for any reason. </small>
          </div>
          <div class="extra_select_btn">
            <button>Select</button>
          </div>
        </div>

        <div class="page_two_extra_detail_parttwo">
          <div class="page_two_extra">
            <span>
              <h2>Bouquet of Flowers </h2>
              <strong>$65 </strong>
            </span>
            <small>30 minute stop en-route for any reason. </small>
          </div>
          <div class="extra_select_btn">
            <button>Select</button>
          </div>
        </div>
      </form>

      <div class="booking_page_one_price_detail" id="mobile_booking_summary">
        <h2>Booking Summary</h2>
        <div class="booking_page_one_total_price">
          <h3>Selected Vehicle</h3>
          <span>$100</span>
        </div>
        <div class="booking_page_one_total_price total_price_border">
          <h3>Selected Extra</h3>
          <span>$100</span>
        </div>
        <div class="booking_page_one_total_price">
          <h3>Total Price</h3>
          <span>$100</span>
        </div>
      </div>

      <div class="continuous_btn">
        <div class="back">
          <Link to="/taxi_booking_page_one">Back</Link>
        </div>
        <div class="next">
          <Link to="/taxi_booking_page_three">Next</Link>
        </div>
      </div>
    </div>
  );
}
