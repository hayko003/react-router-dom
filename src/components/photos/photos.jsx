import React from "react";
import "./photos.css"

function Photos(props) {
  return (
    <div className="photos_wrapper">
      {props.photos.map((elem) => (
        <div key={elem.id}>
          <h2>{elem.title}</h2>
          <p>{elem.id}</p>
        </div>
      ))}
    </div>
  );
}

export default Photos;
