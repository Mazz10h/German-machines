import React, { useState } from "react";

export default function Reviews() {
  const [reviews, setReviews] = useState([]);
  const [name, setName] = useState("");
  const [rating, setRating] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    const newReview = { id: Date.now(), name, rating, message };

    setReviews([...reviews, newReview]);

    // Clear fields
    setName("");
    setRating("");
    setMessage("");
  }

  return (
    <section className="page">
      <h2>Customer Reviews</h2>

      {/* Review Form */}
      <form id="review-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <input
          type="number"
          placeholder="Rating (1-5)"
          value={rating}
          min="1"
          max="5"
          onChange={(e) => setRating(e.target.value)}
          required
        />

        <textarea
          placeholder="Write your review..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        ></textarea>

        <button type="submit">Submit Review</button>
      </form>

      {/* Display Reviews */}
      <div style={{ marginTop: "20px" }}>
        <h3>Submitted Reviews:</h3>

        {reviews.length === 0 ? (
          <p>No reviews yet. Be the first!</p>
        ) : (
          reviews.map((rev) => (
            <div
              key={rev.id}
              style={{
                background: "#fff",
                padding: "10px",
                borderRadius: "6px",
                marginBottom: "10px",
                border: "1px solid #ccc"
              }}
            >
              <strong>{rev.name}</strong> (Rating: {rev.rating}/5)
              <p>{rev.message}</p>
            </div>
          ))
        )}
      </div>
    </section>
  );
}
