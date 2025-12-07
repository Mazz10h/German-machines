import React, { useEffect, useState } from "react";
import { getProducts, getCategories } from "../services/api";
import "./vehicles.css"; // optional CSS for styling

const DEFAULT_IMAGE = "https://via.placeholder.com/300x150?text=No+Image";

const Vehicles = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [loading, setLoading] = useState(true);

  const fetchProducts = async (categoryId) => {
    setLoading(true);
    const data = await getProducts(categoryId);
    setProducts(data);
    setLoading(false);
  };

  useEffect(() => {
    // Fetch categories for filter dropdown
    getCategories().then(setCategories).catch(console.error);

    // Fetch all products initially
    fetchProducts();
  }, []);

  const handleCategoryChange = (e) => {
    const categoryId = e.target.value;
    setSelectedCategory(categoryId);
    fetchProducts(categoryId);
  };

  return (
    <div className="vehicles-page">
      <h2>Our Vehicles</h2>

      {/* Category Filter */}
      <div className="category-filter">
        <label>Filter by Category: </label>
        <select value={selectedCategory} onChange={handleCategoryChange}>
          <option value="all">All</option>
          {categories.map((cat) => (
            <option key={cat.id} value={cat.id}>
              {cat.name}
            </option>
          ))}
        </select>
      </div>

      {loading ? (
        <p>Loading vehicles...</p>
      ) : products.length === 0 ? (
        <p>No vehicles found.</p>
      ) : (
        <div className="vehicle-grid">
          {products.map((vehicle) => (
            <div key={vehicle.id} className="vehicle-card">
              <img
                src={vehicle.image_url || DEFAULT_IMAGE}
                alt={vehicle.name}
                className="vehicle-image"
              />
              <h3>{vehicle.name}</h3>
              <p>Brand: {vehicle.brand}</p>
              <p>Price: ${vehicle.price.toLocaleString()}</p>
              <p>Category: {vehicle.category_name}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Vehicles;
