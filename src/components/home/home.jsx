import React from "react";
import "./home.css";
import imagehome from "../../assets/2.png";
function Home() {
  return (
    <div className="home_wrapper">
      <div className="text_wrap">
        <h1 className="h1_home">Online Store</h1>
        <p className="p_home">Your Trusted Store</p>
        <p className="second_p_home">
          Libero diam auctor tristique hendrerit in eu vel id. Nec leo amet
          suscipit nulla. Nullam vitae sit tempus diam.
        </p>
      </div>
      <div className="img_wrapper">
        <img className="home_image" src={imagehome} alt="" />
      </div>
    </div>
  );
}

export default Home;
