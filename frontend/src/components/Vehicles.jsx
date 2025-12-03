import React, { useState, useEffect } from "react";
import CarCard from "./CarCard";

export default function Vehicles() {
  const [cars, setCars] = useState([]);
  const [brandFilter, setBrandFilter] = useState("");
  const [fuelFilter, setFuelFilter] = useState("");

  // Fetch cars from backend (for now, we can use mock data)
  useEffect(() => {
    const mockCars = [
      { id: 1, brand: "BMW", model: "M5", year: 2022, price: 100000, fuel: "Petrol", image: "https://via.placeholder.com/250" },
      { id: 2, brand: "Audi", model: "A6", year: 2021, price: 85000, fuel: "Diesel", image: "https://via.placeholder.com/250" },
      { id: 3, brand: "Mercedes", model: "C300", year: 2023, price: 95000, fuel: "Petrol", image: "https://via.placeholder.com/250" },
    ];
    setCars(mockCars);
  }, []);

  const filteredCars = cars.filter(car => {
    const brandMatch = !brandFilter || car.brand === brandFilter;
    const fuelMatch = !fuelFilter || car.fuel === fuelFilter;
    return brandMatch && fuelMatch;
  });

  return (
    <section className="page">
      <h2>Available Vehicles</h2>

      <div>
        <label>Filter by brand:</label>
        <select value={brandFilter} onChange={e => setBrandFilter(e.target.value)}>
          <option value="">All</option>
          <option value="BMW">BMW</option>
          <option value="Audi">Audi</option>
          <option value="Mercedes">Mercedes</option>
          <option value="Porsche">Porsche</option>
          <option value="Volkswagen">Volkswagen</option>
        </select>

        <label>Fuel Type:</label>
        <select value={fuelFilter} onChange={e => setFuelFilter(e.target.value)}>
          <option value="">All</option>
          <option value="Petrol">Petrol</option>
          <option value="Diesel">Diesel</option>
          <option value="Electric">Electric</option>
        </select>
      </div>

      <div className="car-grid">
        {filteredCars.map(car => (
          <CarCard key={car.id} car={car} />
        ))}
      </div>
    </section>
  );
}
