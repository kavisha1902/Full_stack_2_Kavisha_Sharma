import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    console.log("handleChange called for", e.target.name, "with value", e.target.value);
    setForm({ ...form, [e.target.name]: e.target.value });
    console.log("Updated form state:", { ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    console.log("handleSubmit called with form:", form);
    e.preventDefault();
    alert(`Thanks ${form.name}! Your message has been submitted.`);
    setForm({ name: "", email: "", message: "" });
    console.log("Form reset to:", { name: "", email: "", message: "" });
  };

  return (
    <div style={container}>
      <div style={card}>
        <h1 style={heading}>Contact Page</h1>
        <p style={subtext}>Fill the form to contact me.</p>

        <form onSubmit={handleSubmit} style={formStyle}>
          <input
            name="name"
            placeholder="Enter Name"
            value={form.name}
            onChange={handleChange}
            style={inputStyle}
            required
          />
          <input
            name="email"
            type="email"
            placeholder="Enter Email"
            value={form.email}
            onChange={handleChange}
            style={inputStyle}
            required
          />
          <textarea
            name="message"
            placeholder="Enter Message"
            value={form.message}
            onChange={handleChange}
            style={{ ...inputStyle, height: "120px", resize: "vertical" }}
            required
          />
          <button type="submit" style={btnStyle}>Submit</button>
        </form>
      </div>
    </div>
  );
}

const container = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  minHeight: "70vh",
  padding: "24px",
};

const card = {
  maxWidth: "600px",
  width: "100%",
  padding: "40px",
  borderRadius: "16px",
  background: "#fff",
  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  textAlign: "center",
};

const heading = {
  fontSize: "2.5rem",
  marginBottom: "12px",
  color: "#1a1a1a",
  fontWeight: "700",
};

const subtext = {
  fontSize: "1.1rem",
  marginBottom: "32px",
  color: "#666",
};

const formStyle = {
  width: "100%",
  textAlign: "left",
};

const inputStyle = {
  width: "100%",
  padding: "14px 16px",
  marginBottom: "16px",
  borderRadius: "10px",
  border: "2px solid #e0e0e0",
  outline: "none",
  fontSize: "1rem",
  fontFamily: "inherit",
  transition: "border-color 0.3s",
  boxSizing: "border-box",
};

const btnStyle = {
  width: "100%",
  padding: "14px 16px",
  borderRadius: "10px",
  border: "none",
  background: "#0d6efd",
  color: "white",
  fontWeight: 700,
  fontSize: "1.05rem",
  cursor: "pointer",
  transition: "background 0.3s",
};
