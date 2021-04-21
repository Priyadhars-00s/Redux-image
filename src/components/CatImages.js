import React from "react";

//here we need access to our state to display questions, a loading message,
//and any errors.

const CatImages = ({ images }) => {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      {images &&
        images.map((q, i) => (
          <div key={i} style={{ width: "28%" }}>
             <img src={q.url} style={{ maxWidth: "100%" }} /> 
          </div>
        ))}
    </div>
  );
};

export default CatImages;
