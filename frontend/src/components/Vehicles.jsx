import React, { useState, useEffect } from "react";
import CarCard from "./CarCard";

export default function Vehicles() {
  const [cars, setCars] = useState([]);
  const [brandFilter, setBrandFilter] = useState("");
  const [fuelFilter, setFuelFilter] = useState("");

  // Load mock cars
  useEffect(() => {
    const mockCars = [
      { id: 1, brand: "BMW", model: "M4", year: 2022, price: 100000, fuel: "Petrol", image: "https://images.unsplash.com/photo-1617531653332-bd46c24f2068?q=80&w=1815&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
      { id: 2, brand: "Audi", model: "TTRS", year: 2021, price: 85000, fuel: "Diesel", image: "https://images.unsplash.com/photo-1617195920791-e42b4d1e559a?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
      { id: 3, brand: "Mercedes", model: "G-Wagon", year: 2023, price: 95000, fuel: "Petrol", image: "https://images.unsplash.com/photo-1709072245760-ec5b9a6b9f9b?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
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
