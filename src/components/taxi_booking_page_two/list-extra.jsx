import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import SingleExtra from "./single-extra";
import { extrasList } from "./extras.data";
import { updateExtras, addSingleExtra } from "../../store/booking";
import useApi from "../../hooks/useApi";
import * as extraApi from "../../apis/extra";
import AppLoading from "../common/loading";
import { BookingSummary } from "../taxi_booking_page_three/contract-detail";

export default function ListExtras() {
  const history = useHistory();
  const {
    request,
    data: __extras,
    isLoading,
  } = useApi(extraApi.allExtras, {
    keyExtractor: "extras",
  });

  useEffect(() => {
    request();
    //eslint-disable-next-line
  }, []);

  const handleNavigateToNext = () => {
    history.push("/taxi_booking_page_three");
  };

  if (isLoading || !__extras) {
    return <AppLoading />;
  }

  return (
    <div class="page_two_section_two">
      <ExtrasList _extras={__extras} />
      <BookingSummary />
      <NavigateToPages onNavigateNext={handleNavigateToNext} />
    </div>
  );
}

function ExtrasList({ _extras }) {
  const [selectedExtras, setSelectedExtras] = useState();
  const { extras } = useSelector((state) => state.booking);

  useEffect(() => {
    const extrasObj = {};

    if (extras) {
      extras.forEach((extra) => {
        extrasObj[extra.id] = { ...extra };
      });

      setSelectedExtras({ ...extrasObj });
    }
  }, [extras]);

  const getSelectedExtra = (extraId) => {
    console.log("extra id: ", extraId);
    if (selectedExtras && selectedExtras[extraId]) {
      return selectedExtras[extraId];
    }
    return null;
  };

  console.log("selected extra: ", selectedExtras);

  return (
    <form>
      {_extras.map((extra, i) => {
        // if (i < 2) {
        //   return (
        //     <SingleExtra
        //       key={extra.id}
        //       hasQuantity={true}
        //       extra={extra}
        //       onUpdateQty={onUpdateQty}
        //       onExtraSelected={onExtraSelected}
        //     />
        //   );
        // } else {
        //   return (
        //     <SingleExtra
        //       key={extra.id}
        //       extra={extra}
        //       onUpdateQty={onUpdateQty}
        //       onExtraSelected={onExtraSelected}
        //     />
        //   );
        // }
        return (
          <_SingleExtra
            extra={extra}
            selectedExtra={getSelectedExtra(extra.id)}
          />
        );
      })}
    </form>
  );
}

function _SingleExtra({ extra, selectedExtra }) {
  const dispatch = useDispatch();

  const handleAddSingleExtra = () => {
    dispatch(addSingleExtra(extra));
  };

  return (
    <div class="page_two_extra_detail_parttwo">
      <div class="page_two_extra">
        <span>
          <h2>{extra.name}</h2>
          <strong>${extra.price} </strong>
        </span>
        <small>{extra.description} </small>
      </div>

      <div class="extra_select_btn">
        <button type="button" onClick={handleAddSingleExtra}>
          {selectedExtra ? "Added" : "Add"}
        </button>
        <button
          disabled
          type="button"
          onClick={() => console.log("selected")}
          style={{ marginLeft: "10px", backgroundColor: "dodgerblue" }}
        >
          {selectedExtra ? selectedExtra.qty : "1"}
        </button>
      </div>
    </div>
  );
}

// function BookingSummary() {
//   return (
//     <div class="booking_page_one_price_detail" id="mobile_booking_summary">
//       <h2>Booking Summary</h2>
//       <div class="booking_page_one_total_price">
//         <h3>Selected Vehicle</h3>
//         <span>$100</span>
//       </div>
//       <div class="booking_page_one_total_price total_price_border">
//         <h3>Selected Extra</h3>
//         <span>$100</span>
//       </div>
//       <div class="booking_page_one_total_price">
//         <h3>Total Price</h3>
//         <span>$100</span>
//       </div>
//     </div>
//   );
// }

function NavigateToPages({ onNavigateNext }) {
  return (
    <div class="continuous_btn">
      <div class="back">
        <Link to="/taxi_booking_page_one">Back</Link>
      </div>
      <div class="next">
        {/* <Link to="/taxi_booking_page_three">Next</Link> */}
        <Link to="#" onClick={onNavigateNext}>
          Next
        </Link>
      </div>
    </div>
  );
}
