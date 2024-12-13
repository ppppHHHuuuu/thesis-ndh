import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import data from "../../note.json";
import Post from "./Post";
import Home from "./Home";
import NewPostForm from "./NewPost";
function App() {
  return (
    <BrowserRouter>
      <Routes >
        <Route path="/" element={<Home />}/>
        <Route path="/post/:id" element={<Post />} />
        <Route path="/post/new" element={<NewPostForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
