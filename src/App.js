import "./App.css";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Contact from "./pages/contact/Contact";
import About from "./pages/about/About";
import ScrollToTop from "./ScrollToTop";

function App() {
  return (
    <>
      <Router>
        <ScrollToTop>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </ScrollToTop>
      </Router>
    </>
  );
}

export default App;
