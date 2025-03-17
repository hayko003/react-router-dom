import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import {posts, photos} from "./db/db.js"

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App posts={posts} photos={photos} />
  </BrowserRouter>
);
