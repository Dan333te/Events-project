import React from "react";

const Summary = ({ title, imgURL, date, Location }) => {

  return (
    <div>
      <img src={imgURL} className="rounded-sm" height="400px" width="100%" />
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "10px",
        }}
      >
        <h1 className="font-semibold text-lg">{title}</h1>
        <p className="font-normal text-grey">{Location}</p>
      </div>
    </div>
  );
};

export default Summary;
