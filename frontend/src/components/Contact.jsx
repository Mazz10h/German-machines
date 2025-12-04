import React, { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    alert("Message sent! Thank you!");

    setForm({
      name: "",
      email: "",
      message: "",
    });
  }

  return (
    <section className="page">
      <h2>Contact Us</h2>

      <div style={{ display: "flex", flexDirection: "column", gap: "30px" }}>
        {/* Contact Form */}
        <form
          id="contact-form"
          onSubmit={handleSubmit}
          style={{ maxWidth: "500px" }}
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            required
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            value={form.message}
            onChange={handleChange}
            required
          ></textarea>

          <button type="submit">Send</button>
        </form>

        {/* Google Map */}
        <div>
          <h3>Our Location</h3>
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
