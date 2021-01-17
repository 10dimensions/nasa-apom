import React, { useState, useEffect } from "react";

import Gallery from "./Gallery";

import { endPoint, apiKey } from "../data/data";
import { getRangeDate } from "../utils/utils";

function Gateway() {
  const [month, setMonth] = useState(-1);
  const [rangeDate, setRangeDate] = useState(getRangeDate(month));

  const [imgFeed, setImgFeed] = useState([]);

  useEffect(() => {
    fetch(
      `${endPoint}api_key=${apiKey}&start_date=${rangeDate[0]}&end_date=${rangeDate[1]}`
    )
      .then((results) => results.json())
      .then((data) => {
        console.log(data);
        setImgFeed(data);
      });
  }, [rangeDate]);

  return (
    <div>
      <div id="wrap">
        <form action="" autoComplete="on">
          <input
            id="search"
            name="Zoek"
            type="text"
            placeholder="Explore ..."
          />
          <input id="search_submit" value="Verstuur" type="submit" />
        </form>
      </div>

      <Gallery imgFeed={imgFeed} />
    </div>
  );
}

export default Gateway;
