import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/home/index.js";
import Profile from "./components/profile/index.js";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
