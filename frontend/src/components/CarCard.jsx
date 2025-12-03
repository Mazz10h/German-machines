import React from "react";

export default function CarCard({ car }) {
  return (
    <div className="car-card">
      <img src={car.image} alt={car.model} />
      <h3>{car.brand} {car.model}</h3>
      <p>Year: {car.year}</p>
      <p>Price: ${car.price}</p>
      <p>Fuel: {car.fuel}</p>
    </div>
  );
}
