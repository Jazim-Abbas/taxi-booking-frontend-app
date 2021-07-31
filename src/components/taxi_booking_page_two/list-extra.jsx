import { useState } from "react";
import { Link } from "react-router-dom";

import { extrasList } from "./extras.data";

export default function ListExtras() {
  const [extras, setExtras] = useState(extrasList);

  return (
    <div class="page_two_section_two">
      <form>
        {extras.map((extra, i) => {
          if (i < 2) {
            return (
              <SingleExtra key={extra.id} hasQuantity={true} extra={extra} />
            );
          } else {
            return <SingleExtra key={extra.id} extra={extra} />;
          }
        })}

        {/* <div class="page_two_extra_detail">
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
        </div> */}

        {/* <div class="page_two_extra_detail_parttwo">
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
        </div> */}

        {/* <div class="page_two_extra_detail_parttwo">
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
        </div> */}
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

function SingleExtra({ extra, hasQuantity }) {
  const className = hasQuantity
    ? "page_two_extra_detail"
    : "page_two_extra_detail_parttwo";

  return (
    <div class={className}>
      <div class="page_two_extra">
        <span>
          <h2>{extra.name}</h2>
          <strong>${extra.price} </strong>
        </span>
        <small>{extra.description} </small>
      </div>
      {hasQuantity && (
        <div class="page_two_extra_quantity">
          <span>
            <i class="far fa-plus-square"></i>
            <i class="far fa-minus-square"></i>
          </span>
          <strong>10</strong>
        </div>
      )}

      <div class="extra_select_btn">
        <button>Select</button>
      </div>
    </div>
  );
}
