import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Tag from "./pages/Tag";
import Tag1 from "./pages/Tag1";
import Tag2 from "./pages/Tag2";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/tag" element={<Tag />} />
      <Route path="/tag1" element={<Tag1 />} />
      <Route path="/tag2" element={<Tag2 />} />
    </Routes>
  );
}

export default App;
