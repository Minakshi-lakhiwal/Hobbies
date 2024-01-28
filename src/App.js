import logo from "./logo.svg";
// src/index.js or src/index.tsx
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Header from "./Components/Header";
import Home from "./Components/Home/Home";
import "./App.css";
import About from "./Components/About";
import Testimonials from "./Components/Testimonials";
import Footer from "./Components/Footer";
function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <About />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
