import React, { useEffect, useState } from "react";
import "../photos/photos.css"
function Posts() {
  const [data, setData] = useState([])

  useEffect(() => {
    fetch('https://api.escuelajs.co/api/v1/products')
    .then((res) => res.json())
    .then((res) => setData(res))
  }, [])

  console.log(data);

  return (
    <div className="photos_wrapper">
      {
      data.map((elem) => {
        return <div key={elem.id} className="elem_wrapper">
          <img className="photos_comp-img" src={elem.images} alt="" />
          <h2>{elem.title}</h2>
          <p className="rating">{elem.rating}</p>
          <p>{elem.price}$</p>
          <div className="buy_wrapper">
          <button>Buy</button>
          <button className="add_to_cart" onClick={() => setItem(set = !set)}>Add to Cart</button>
          </div>
        </div>
      })
      }
    </div>
  );
}

export default Posts;
