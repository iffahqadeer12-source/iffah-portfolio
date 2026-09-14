import { useState } from "react";
import axios from "axios";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setStatus("");

    try {
      await axios.post(
        "http://localhost:5001/api/contacts",
        formData
      );

      setStatus("Message sent successfully!");
      
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error("Contact form error:", error);
      setStatus("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="section-container">

        <div className="section-heading">
          <span>06</span>
          <h2>Let's Work Together</h2>
          <p>
            Have a project or opportunity in mind? Send me a message.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="contact-form">

          <div className="form-group">
            <label htmlFor="name">Name</label>

            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your name"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>

            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your email"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>

            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell me about your project..."
              rows="6"
              required
            />
          </div>

          <button type="submit" disabled={loading}>
            {loading ? "Sending..." : "Send Message ↗"}
          </button>

          {status && (
            <p className="form-status">
              {status}
            </p>
          )}

        </form>

      </div>
    </section>
  );
}

export default Contact;
