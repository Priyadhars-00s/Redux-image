import React from "react";

const Button = ({ getImages }) => {
  return (
    <div style={{ marginBottom: "4%" }}>
      <button onClick={() => getImages()}>Get Cats</button>
    </div>
  );
};

export default Button;
