import { Typography, Card } from "@material-tailwind/react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/home";
import About from "./pages/about/about";
import Contact from "./pages/contact/contact";
import Robes from "./pages/robes/robes";
import Towels from "./pages/towels/towels";
import Korzina from "./pages/korzina/korzina";
import Liked from "./pages/liked/liked";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/robes" element={<Robes />} />
        <Route path="/towels" element={<Towels />} />
        <Route path="/liked" element={<Liked />} />
        <Route path="/korzina" element={<Korzina />} />
      </Routes>
    </div>
  );
}
