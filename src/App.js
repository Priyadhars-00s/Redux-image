import React, { useState } from "react";
import "./styles.css";
import CatImages from "./components/CatImages";
import Button from "./components/Button";
import axios from "axios";

export default function App() {
  const [images, setImages] = useState([]);

  const getImages = () => {
    axios
      .get("https://api.thecatapi.com/v1/images/search?limit=3")
      .then(res => setImages(res.data))
      .catch(err => console.log(err));
  };

  return (
    <div className="App">
      <h1>Random Cat Images</h1>
      <p>meow</p>
      <Button getImages={getImages} />
      <CatImages images={images} />
    </div>
  );
}
