import React from "react";

function Posts(props) {
  return (
    <div>
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
