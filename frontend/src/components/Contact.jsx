import React, { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    alert("Message sent! Thank you!");
    setForm({ name: "", email: "", message: "" });
  }

  const formStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
    padding: "1rem",
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    borderRadius: "8px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
  };

  const inputStyle = {
    padding: "0.5rem",
    borderRadius: "4px",
    border: "1px solid #ccc",
    fontSize: "1rem",
  };

  const textareaStyle = {
    ...inputStyle,
    minHeight: "120px",
  };

  const buttonStyle = {
    padding: "0.6rem",
    backgroundColor: "#007BFF",
    color: "#fff",
    fontWeight: "bold",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    transition: "background 0.3s",
  };

  const buttonHover = (e) => (e.target.style.backgroundColor = "#0056b3");
  const buttonUnhover = (e) => (e.target.style.backgroundColor = "#007BFF");

  return (
    <section className="page" style={{ padding: "2rem" }}>
      <h2 style={{ color: "#fff", textAlign: "center" }}>Contact Us</h2>

      <div style={{ display: "flex", flexDirection: "column", gap: "30px", alignItems: "center" }}>
        {/* Contact Form */}
        <form id="contact-form" onSubmit={handleSubmit} style={formStyle}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
            style={inputStyle}
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            required
            style={inputStyle}
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            required
            style={textareaStyle}
          />
          <button
            type="submit"
            style={buttonStyle}
            onMouseOver={buttonHover}
            onMouseOut={buttonUnhover}
          >
            Send Message
          </button>
        </form>

        {/* Google Map */}
        <div style={{ width: "100%", maxWidth: "600px" }}>
          <h3 style={{ color: "#fff" }}>Our Location</h3>
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8283149835536!2d36.82194617496503!3d-1.2920650356222783!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f17339c2eb999%3A0xeefb725f0c1a72ed!2sPrecisionkraft!5e0!3m2!1sen!2ske!4v1700000000000!5m2!1sen!2ske"
            width="100%"
            height="350"
            allowFullScreen=""
            loading="lazy"
            style={{ border: "0", borderRadius: "8px", marginTop: "10px" }}
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
