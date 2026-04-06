import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Culture from "./components/Culture";
import Places from "./components/Places";
import Time from "./components/Time";
import Login from "./components/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/culture" element={<Culture />} />
        <Route path="/places" element={<Places />} />
        <Route path="/time" element={<Time />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;