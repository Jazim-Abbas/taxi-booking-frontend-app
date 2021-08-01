import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";

export default function useReduxDataCheck(keysName) {
  const history = useHistory();
  const location = useLocation();
  const booking = useSelector((state) => state.booking);

  useEffect(() => {
    _checkReduxDataForKeysNameAndThrowErrorIfNotFound();
  }, [booking]);

  const _checkReduxDataForKeysNameAndThrowErrorIfNotFound = () => {
    console.log("keyname: ", keysName);
    if (keysName && keysName.length <= 0) return;

    if (keysName.length > 0 && Array.isArray(keysName[0])) return;

    let checkCount = 0;

    for (let i = 0; i < keysName.length; i++) {
      const key = keysName[i];
      const reduxField = booking[key];

      if (!reduxField) break;

      if (key === "initialBooking") {
        if (!reduxField.dropoffLocation && !reduxField.pickupLocation) break;
      }

      ++checkCount;
    }

    if (keysName.length !== checkCount) {
      console.log("keyname not found is true");
      // history.push(location.pathname);

      history.push("/");
    }
  };

  return { booking };
}
