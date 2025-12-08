import React, { useState, useEffect } from "react";
import axios from "axios";

function Reviews() {
  const [reviews, setReviews] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    rating: 5,
    comment: "",
  });

  const fetchReviews = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:8000/reviews/");
      setReviews(response.data);
    } catch (error) {
      console.error("Error fetching reviews:", error);
    }
  };

  useEffect(() => {
    fetchReviews();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://127.0.0.1:8000/reviews/", formData);
      setReviews([response.data, ...reviews]);
      setFormData({ name: "", rating: 5, comment: "" });
    } catch (error) {
      console.error("Error submitting review:", error);
    }
  };

  // -------------------- STYLES --------------------
  const formStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "0.5rem",
    maxWidth: "400px",
    marginBottom: "2rem",
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    padding: "1rem",
    borderRadius: "8px",
    boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
    color: "#000",
  };

  const inputStyle = {
    padding: "0.5rem",
    borderRadius: "4px",
    border: "1px solid #ccc",
    fontSize: "1rem",
    color: "#000",
    backgroundColor: "#fff",
  };

  const buttonStyle = {
    padding: "0.5rem",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  };

  const reviewCardStyle = {
    borderBottom: "1px solid #ccc",
    padding: "1rem",
    maxWidth: "600px",
    backgroundColor: "rgba(255, 255, 255, 0.85)",
    color: "#000",
    borderRadius: "6px",
    marginBottom: "1rem",
    boxShadow: "0 1px 4px rgba(0,0,0,0.1)",
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h2 style={{ color: "#fff" }}>Customer Reviews</h2>

      <form onSubmit={handleSubmit} style={formStyle}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          style={inputStyle}
          required
        />
        <select
          name="rating"
          value={formData.rating}
          onChange={handleChange}
          style={inputStyle}
        >
          {[1, 2, 3, 4, 5].map((n) => (
            <option key={n} value={n}>
              {n} Star{n > 1 ? "s" : ""}
            </option>
          ))}
        </select>
        <textarea
          name="comment"
          placeholder="Write your review"
          value={formData.comment}
          onChange={handleChange}
          style={{ ...inputStyle, minHeight: "80px" }}
          required
        />
        <button type="submit" style={buttonStyle}>
          Submit Review
        </button>
      </form>

      <div>
        {reviews.length === 0 ? (
          <p style={{ color: "#fff" }}>No reviews yet. Be the first!</p>
        ) : (
          reviews.map((rev) => (
            <div key={rev.id} style={reviewCardStyle}>
              <strong>{rev.name}</strong> - {rev.rating} Star{rev.rating > 1 ? "s" : ""}
              <p>{rev.comment}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Reviews;
