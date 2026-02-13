export default function Dashboard() {
  return (
    <div style={container}>
      <div style={card}>
        <h1 style={heading}>Dashboard</h1>
        <h3 style={subheading}>My Technical Skills</h3>

        <ul style={list}>
          <li style={listItem}>Python</li>
          <li style={listItem}>C++</li>
          <li style={listItem}>Data Structures and Algorithms (DSA)</li>
          <li style={listItem}>Java</li>
          <li style={listItem}>JavaScript</li>
          <li style={listItem}>React</li>
          <li style={listItem}>HTML & CSS</li>
        </ul>

        <p style={text}>
          This dashboard page provides an overview of my technical skills and
          technologies that I am currently learning and practicing.
        </p>
      </div>
    </div>
  );
}

/* styles */
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
  marginBottom: "12px",
  color: "#1a1a1a",
  fontWeight: "700",
};

const subheading = {
  fontSize: "1.3rem",
  marginBottom: "24px",
  color: "#666",
  fontWeight: "500",
};

const list = {
  listStyle: "none",
  padding: 0,
  margin: "0 0 24px 0",
};

const listItem = {
  padding: "12px 20px",
  margin: "8px 0",
  background: "#f8f9fa",
  borderRadius: "8px",
  fontSize: "1.05rem",
  color: "#333",
};

const text = {
  fontSize: "1rem",
  lineHeight: "1.8",
  color: "#666",
};
