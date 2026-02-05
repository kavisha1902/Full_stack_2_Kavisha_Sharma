export default function Home() {
  return (
    <div style={container}>
      <div style={card}>
        <h1 style={heading}>Home Page</h1>
        <p style={text}>
          Welcome to my Single Page Application (SPA). This page is loaded using
          React Router without reloading the browser.
        </p>
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
};
