import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Tag from "./pages/Tag";
import Tag1 from "./pages/Tag1";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/tag" element={<Tag />} />
      <Route path="/tag1" element={<Tag1 />} />
    </Routes>
  );
}

export default App;
