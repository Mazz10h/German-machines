import React from "react";

export default function Navbar({ setPage }) {
  return (
    <nav className="navbar">
      <button onClick={() => setPage("home")}>Home</button>
      <button onClick={() => setPage("vehicles")}>Vehicles</button>
      <button onClick={() => setPage("about")}>About</button>
      <button onClick={() => setPage("reviews")}>Reviews</button>
      <button onClick={() => setPage("contact")}>Contact</button>
    </nav>
  );
}
