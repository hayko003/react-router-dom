import React from "react";
import "../photos/photos.css"
function Posts(props) {
  return (
    <div className="photos_wrapper">
      {props.posts.map((elem) => (
        <div key={elem.id}>
          <h2>{elem.title}</h2>
          <p>{elem.body}</p>
        </div>
      ))}
    </div>
  );
}

export default Posts;
