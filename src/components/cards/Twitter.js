import React from "react";
import * as css from "./style.module.css";

const Twitter = (props) => {
  return (
    <>
      <h1>Twitter</h1>
      <div className={css["card"]}>
        <div className={css["image-container"]}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={props["twitter:image"]} alt={props["twitter:title"]} />
        </div>
        <div className={css["body-twitter"]}>
          <div className={css["title-twitter"]}>{props["twitter:title"]}</div>
          <div className={css["description-twitter"]}>
            {props["twitter:description"]}
          </div>
          <div className={css["url-twitter"]}>{props["og:url"]}</div>
        </div>
      </div>
    </>
  );
};

export default Twitter;
