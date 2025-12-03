import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Vehicles from "./components/Vehicles";
import About from "./components/About";
import Reviews from "./components/Reviews";
import Contact from "./components/Contact";
import "./styles.css";

function App() {
  const [page, setPage] = useState("home"); // default page

  return (
    <div>
      <Navbar setPage={setPage} />
      {page === "home" && <Home />}
      {page === "vehicles" && <Vehicles />}
      {page === "about" && <About />}
      {page === "reviews" && <Reviews />}
      {page === "contact" && <Contact />}
    </div>
  );
}

export default App;
