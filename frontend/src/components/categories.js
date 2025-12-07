import React, { useEffect, useState } from "react";
import { getCategories } from "../services/api";

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories()
      .then(data => setCategories(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h2>Categories</h2>
      <ul>
        {categories.map(cat => (
          <li key={cat.id}>{cat.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
