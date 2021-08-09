import { useState } from "react";
import * as progress from "../utils/progress";

export default function useApi(
  apiFunc,
  { hasCatchError = false, keyExtractor = "" } = {}
) {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState();
  const [error, setError] = useState();

  async function request(...params) {
    setIsLoading(true);
    progress.start();

    try {
      const res = await apiFunc(...params);
      setIsLoading(false);

      if (keyExtractor === "") {
        setData(res.data);
      } else {
        setData(res.data[keyExtractor]);
      }

      setError({});
      progress.end();
      console.log(res);
      return res;
    } catch (err) {
      console.log("error from server: ", err);
      setIsLoading(false);

      if (err.response) {
        setError(err.response);
      } else {
        const errRes = {
          status: 503,
          data: {
            message: "Network Error. Please check your connection ..",
            errors: [],
          },
        };
        err.response = errRes;
        setError(err.response);
      }

      progress.end();

      if (hasCatchError) {
        throw err;
      }
    }
  }

  return { isLoading, data, error, request };
}
