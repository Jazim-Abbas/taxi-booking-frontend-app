import { useDispatch, useSelector } from "react-redux";

export default function TransferDetailToogle() {
  const booking = useSelector((state) => state.booking);
  const { initialBooking, extras, vehicle } = booking;

  let _totalPrice = 0;
  let _vehiclePrice = 0;

  const _calculateExtrasTotalPrice = () => {
    extras.forEach((extra) => {
      let quantity = extra.quantity ?? 1;
      _totalPrice += extra.price * quantity;
    });
    return _totalPrice;
  };

  const _calculateVehicleTotalPrice = () => {
    _vehiclePrice = vehicle.pricePerKM;
    return _vehiclePrice;
  };

  if (!booking) {
    return <></>;
  }

  return (
    <div class="page_one_section">
      <div class="page_two_booking_complete_summary">
        <p>Transfer Details</p>
        <i class="fas fa-chevron-down"></i>
      </div>
      <div class="transfer_detail_box">
        <div class="pickup_detail_box">
          <h4>Pickup</h4>
          <div class="where_from">
            <i class="fas fa-map-marker-alt"></i>
            <div class="where_from_location">
              <span>WHERE FROM</span>
              <p>{initialBooking.pickupLocation}</p>
            </div>
          </div>

          <div class="where_from">
            <i class="fas fa-map-marker-alt"></i>
            <div class="where_from_location">
              <span>WHERE TO</span>
              <p>{initialBooking.dropoffLocation}</p>
            </div>
          </div>

          <div class="where_from">
            <i class="far fa-calendar-alt"></i>
            <div class="where_from_location">
              <span>TRAVEL DATE</span>
              <p>
                30/7/2021 <small>[Friday 30,July]</small>
              </p>
            </div>
          </div>

          <div class="where_from">
            <i class="fas fa-map-marker-alt"></i>
            <div class="where_from_location">
              <span>PICKUP TIME</span>
              <p>12:00</p>
            </div>
          </div>
        </div>

        <div class="pickup_detail_box">
          <h4>Return</h4>
          <div class="where_from">
            <i class="fas fa-map-marker-alt"></i>
            <div class="where_from_location">
              <span>WHERE FROM</span>
              <p>abc</p>
            </div>
          </div>

          <div class="where_from">
            <i class="fas fa-map-marker-alt"></i>
            <div class="where_from_location">
              <span>WHERE TO</span>
              <p>abc</p>
            </div>
          </div>

          <div class="where_from">
            <i class="far fa-calendar-alt"></i>
            <div class="where_from_location">
              <span>TRAVEL DATE</span>
              <p>
                30/7/2021 <small>[Friday 30,July]</small>
              </p>
            </div>
          </div>

          <div class="where_from">
            <i class="fas fa-map-marker-alt"></i>
            <div class="where_from_location">
              <span>PICKUP TIME</span>
              <p>12:00</p>
            </div>
          </div>
        </div>

        <div class="pickup_detail_box">
          <h4>Vehicle Category</h4>
          <div class="where_from">
            <i class="fas fa-car quantites_icon"></i>
            <div class="where_from_location">
              <span>DESCRIPTION</span>
              <p>
                Private Taxi With Capacity for <small> 2 </small> passengers{" "}
                <small> 2 </small>medium suitecases
                <small>2</small>
                small hand luggage items
              </p>
            </div>
          </div>
        </div>

        <div class="pickup_detail_box">
          <h4>Passengers</h4>
          <div class="where_from">
            <i class="fas fa-user"></i>
            <div class="where_from_location">
              <span>ADULT</span>
              <p>2</p>
            </div>
          </div>

          <div class="where_from">
            <i class="fas fa-user"></i>
            <div class="where_from_location">
              <span>CHILDREN</span>
              <p>0</p>
            </div>
          </div>

          <div class="where_from">
            <i class="fas fa-user"></i>
            <div class="where_from_location">
              <span>INFANTS</span>
              <p>0</p>
            </div>
          </div>
        </div>

        <div class="pickup_detail_box">
          <h4>Travel Distance & Time</h4>
          <div class="where_from">
            <i class="fas fa-car quantites_icon"></i>
            <div class="where_from_location">
              <p>
                40 km & <small> 65 Min</small>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="booking_page_one_price_detail" id="laptop_booking_summary">
        <h2>Booking Summary</h2>
        <div class="booking_page_one_total_price">
          <h3>Selected Vehicle</h3>
          <span>${_calculateVehicleTotalPrice()}</span>
        </div>
        <div class="booking_page_one_total_price total_price_border">
          <h3>Selected Extra</h3>
          <span>${_calculateExtrasTotalPrice()}</span>
        </div>
        <div class="booking_page_one_total_price">
          <h3>Total Price</h3>
          <span>${_totalPrice + _vehiclePrice}</span>
        </div>
      </div>
    </div>
  );
}
