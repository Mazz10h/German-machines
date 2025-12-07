import axios from "axios";

const API_URL = "http://127.0.0.1:8000";

export const getProducts = async (categoryId) => {
  const url =
    categoryId && categoryId !== "all"
      ? `${API_URL}/categories/${categoryId}/products/`
      : `${API_URL}/products/`;
  const response = await axios.get(url);
  return response.data;
};

export const getCategories = async () => {
  const response = await axios.get(`${API_URL}/categories/`);
  return response.data;
};
