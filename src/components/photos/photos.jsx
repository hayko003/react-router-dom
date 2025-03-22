import React, { useState, useEffect } from "react";
import "./photos.css";

function Photos() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((res) => setData(res.products));
  }, []);

  const [set, setItem] = useState(false)

  return (
    <div className="photos_wrapper">
      {data.map((elem) => {
        return (
          <div className="elem_wrapper" key={elem.id}>
            <img className="photos_comp-img" src={elem.images} alt="" />
            <h2>{elem.title}</h2>
            <p className="rating">{elem.rating}</p>
            <p>{elem.price}$</p>
            <div className="buy_wrapper">
              <button>Buy</button>
              <button className="add_to_cart" onClick={() => setItem(set = !set)}>Add to Cart</button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Photos;
