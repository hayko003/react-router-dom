import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/home/home";
import Posts from "./components/posts/posts"
import Header from "./components/header/header";
import Photos from "./components/photos/photos";
import Not from "./components/error/not";
function App() {

  return (
    <div className="App">
      <Header/>
      <Routes>
          <Route path="" element={<Home/>} />
          <Route path="/posts" element={<Posts/>}/>
          <Route path="/photos" element={<Photos/>}></Route>
          <Route path="*" element={<Not/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
