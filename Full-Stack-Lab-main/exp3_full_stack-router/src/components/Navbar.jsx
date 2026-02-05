import { NavLink } from "react-router-dom";

export default function Navbar() {
  const linkStyle = ({ isActive }) => ({
    textDecoration: "none",
    padding: "12px 20px",
    borderRadius: "12px",
    fontWeight: 600,
    fontSize: "0.95rem",
    color: isActive ? "#fff" : "rgba(255, 255, 255, 0.9)",
    background: isActive 
      ? "linear-gradient(135deg, #667eea 0%, #764ba2 100%)" 
      : "rgba(255, 255, 255, 0.1)",
    backdropFilter: "blur(10px)",
    transition: "all 0.3s ease",
    border: isActive ? "none" : "1px solid rgba(255, 255, 255, 0.2)",
  });

  return (
    <nav style={navContainer}>
      <div style={logo}>Kavisha Sharma</div>

      <div style={linkContainer}>
        <NavLink to="/" style={linkStyle}>Home</NavLink>
        <NavLink to="/about" style={linkStyle}>About</NavLink>
        <NavLink to="/profile" style={linkStyle}>Profile</NavLink>
        <NavLink to="/dashboard" style={linkStyle}>Skills</NavLink>
        <NavLink to="/contact" style={linkStyle}>Contact</NavLink>
      </div>
    </nav>
  );
}

const navContainer = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "20px 32px",
  background: "rgba(255, 255, 255, 0.1)",
  backdropFilter: "blur(10px)",
  borderBottom: "1px solid rgba(255, 255, 255, 0.2)",
};

const logo = {
  fontFamily: "'Poppins', sans-serif",
  fontWeight: 700,
  fontSize: "1.5rem",
  color: "#fff",
  letterSpacing: "-0.5px",
};

const linkContainer = {
  display: "flex",
  gap: "12px",
  alignItems: "center",
};
