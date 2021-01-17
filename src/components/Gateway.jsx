import React, { useState, useEffect } from "react";

import Gallery from "./Gallery";

import { endPoint, apiKey } from "../data/data";
import { getRangeDate } from "../utils/utils";

function Gateway() {
  const [month, setMonth] = useState(-1);
  const [rangeDate, setRangeDate] = useState(getRangeDate(month));

  const [imgFeed, setImgFeed] = useState([]);

  useEffect(() => {
    setRangeDate(getRangeDate(month));
  }, [month]);

  useEffect(() => {
    fetch(
      `${endPoint}api_key=${apiKey}&start_date=${rangeDate[0]}&end_date=${rangeDate[1]}`
    )
      .then((results) => results.json())
      .then((data) => {
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

      <div style={{ textAlign: "center" }}>
        <button
          className="button"
          onClick={() => {
            setMonth(month - 1);
            console.log(month);
          }}
        >
          {"<"}
        </button>
        <button
          disabled="true"
          className="button"
          onClick={() => {
            if (month > 0) return;
            setMonth(month + 1);
          }}
        >
          {">"}
        </button>
      </div>

      <Gallery imgFeed={imgFeed} />
    </div>
  );
}

export default Gateway;
