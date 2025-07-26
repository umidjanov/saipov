import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/home";
import About from "./pages/about/about";
import Contact from "./pages/contact/contact";
import Korzina from "./pages/korzina/korzina";
import Liked from "./pages/liked/liked";
import CardUi from "./pages/cardUi/cardUi";
import CardUiRobe from "./pages/cardUiRobe/cardUiRobe";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/liked" element={<Liked />} />
        <Route path="/korzina" element={<Korzina />} />
        <Route path="/cardUi" element={<CardUi />} />
        <Route path="/cardUiRobe" element={<CardUiRobe />} />
      </Routes>
    </div>
  );
}
