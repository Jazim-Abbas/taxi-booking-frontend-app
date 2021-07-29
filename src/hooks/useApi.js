import { useState } from "react";
import * as progress from "../utils/progress";

export default function useApi(apiFunc, { hasCatchError = false } = {}) {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState();
  const [error, setError] = useState();

  async function request(...params) {
    setIsLoading(true);
    progress.start();

    try {
      const res = await apiFunc(...params);
      setIsLoading(false);
      setData(res.data);
      setError({});
      progress.end();
      console.log(res);
      return res;
    } catch (err) {
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
