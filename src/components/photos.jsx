import React from "react";
import "./home.css"
function Photos(props) {
  return (
    <div>
      {props.photos.map((elem) => (
        <div key={elem.id}>
          <h2>{elem.title}</h2>
          <img src={elem.url} alt="" />
        </div>
      ))}
    </div>
  );
}

export default Photos;
