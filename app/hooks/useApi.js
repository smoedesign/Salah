import React, { useState } from "react";

export default useApi = (apiFunc) => {
  const [data, setData] = useState([]);

  const reqest = async () => {
    const response = await apiFunc();
    setData(response.data.result);
  };
  return {
    data,
    reqest,
  };
};
