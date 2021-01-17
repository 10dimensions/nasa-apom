import React, { useState, useEffect } from "react";

import { endPoint, apiKey } from "../data/data";
import { getRangeDate } from "../utils/utils";

function Gateway() {
  const [month, setMonth] = useState(-1);
  const [rangeDate, setRangeDate] = useState(getRangeDate(month));

  const [imgFeed, setImgFeed] = useState(null);

  useEffect(() => {
    fetch(
      `${endPoint}api_key=${apiKey}&start_date=${rangeDate[0]}&end_date=${rangeDate[1]}`
    )
      .then((results) => results.json())
      .then((data) => {
        setImgFeed(data);
      });
  }, [rangeDate]);

  return <div></div>;
}

export default Gateway;
