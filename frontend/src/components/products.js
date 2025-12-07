import React, { useEffect, useState } from "react";
import { getProductsByCategory } from "../services/api";

const Products = ({ categoryId }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (categoryId) {
      getProductsByCategory(categoryId)
        .then(data => setProducts(data))
        .catch(err => console.error(err));
    }
  }, [categoryId]);

  return (
    <div>
      <h3>Products</h3>
      <ul>
        {products.map(prod => (
          <li key={prod.id}>
            {prod.name} - {prod.brand} - ${prod.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Products;
