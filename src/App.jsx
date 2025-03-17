import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/home";
import Posts from "./components/posts"
import Header from "./components/header/header";
import Photos from "./components/photos";
function App(props) {
  return (
    <div className="App">
      <Header/>
      <Routes>
          <Route path="" element={<Home/>} />
          <Route path="/posts" element={<Posts posts={props.posts} />}/>
          <Route path="/photos" element={<Photos photos={props.photos}/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
