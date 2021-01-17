import React, { useState, useEffect } from "react";

function Gallery(props) {
  const imgFeed = props.imgFeed;

  return (
    <div>
      {imgFeed.map((item) => (
        <div className="responsive" key={item.date}>
          <div className="gallery">
            <a target="_blank" href={item.url}>
              <img src={item.url} alt="Cinque Terre" width="600" height="400" />
            </a>
            {/*<div class="desc">desc</div>*/}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Gallery;
