import { Link } from "react-router-dom";

export default function SingleVehicle() {
  return (
    <div class="booking_page_one_car_selection">
      <div class="booking_page_one_car_detail">
        <div class="booking_page_one_single_car_detail">
          <figure>
            <img src="assets/image/standard.png" />
          </figure>
          <div class="page_one_single_car_detail">
            <h1>Standard</h1>
            <span>
              <i class="fas fa-user"></i>
              <small>4 Paks</small>
            </span>
            <span>
              <i class="fas fa-suitcase-rolling"></i> <small>4 Bags</small>
            </span>
            <span>
              <i id="single_car_more" class="fas fa-chevron-down"></i>
              <small>More Info</small>
            </span>
          </div>
        </div>
      </div>
      <div class="booking_page_one_car_detail">
        <div class="booking_page_one_car_price_detail">
          <strong>Total One-Way Price</strong>
          <strong>$100</strong>
          <small>Free Cancelation</small>
          <small>No Hidden Charges</small>
          <Link to="/taxi_booking_page_two">Select This Vehicle</Link>
        </div>
      </div>
    </div>
  );
}
