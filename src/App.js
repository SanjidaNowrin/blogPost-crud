import { BrowserRouter, Routes, Route } from "react-router-dom";
import Posts from "./components/Posts";
import CreatePost from "./components/CreatePost";
function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Posts />} />
          <Route path="/createPost" element={<CreatePost />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
