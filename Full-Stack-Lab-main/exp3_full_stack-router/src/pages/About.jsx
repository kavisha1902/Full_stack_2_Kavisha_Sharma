export default function About() {
  return (
    <div style={container}>
      <div style={card}>
        <h1 style={heading}>About Me</h1>
        <p style={text}>
          Hi! I am a student learning React Router for client-side routing in SPA.
          This is the About page.
        </p>
        <ul style={list}>
          <li style={listItem}>Skill: React</li>
          <li style={listItem}>Skill: Routing (React Router DOM)</li>
          <li style={listItem}>Goal: Build fast SPAs</li>
        </ul>
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
  maxWidth: "700px",
  width: "100%",
  padding: "40px",
  borderRadius: "16px",
  background: "#fff",
  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  textAlign: "center",
};

const heading = {
  fontSize: "2.5rem",
  marginBottom: "20px",
  color: "#1a1a1a",
  fontWeight: "700",
};

const text = {
  fontSize: "1.1rem",
  lineHeight: "1.8",
  color: "#555",
  marginBottom: "24px",
};

const list = {
  listStyle: "none",
  padding: 0,
  margin: 0,
};

const listItem = {
  padding: "12px 20px",
  margin: "8px 0",
  background: "#f8f9fa",
  borderRadius: "8px",
  fontSize: "1.05rem",
  color: "#333",
};
