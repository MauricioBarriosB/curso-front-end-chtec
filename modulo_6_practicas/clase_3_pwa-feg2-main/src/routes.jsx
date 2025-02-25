import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Menu from "./components/Menu";

export default function AppRoutes() {
  return (
    <Router>
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}
