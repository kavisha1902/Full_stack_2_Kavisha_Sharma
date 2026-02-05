import profileImg from "../assets/kavisha.jpeg";

export default function Profile() {
  return (
    <div style={container}>
      <div style={card}>
        <div style={imageWrapper}>
          <img
            src={profileImg}
            alt="Kavisha Sharma"
            style={image}
          />
          <div style={imageBorder}></div>
        </div>

        <h1 style={heading}>Kavisha Sharma</h1>
        <p style={subtitle}>Computer Science Engineering Student</p>

        {/* Description */}
        <p style={text}>
          Hi, I am Kavisha. I am a Computer Science Engineering student with a strong
          interest in software development and problem solving. I enjoy learning new
          technologies and building web applications using modern frameworks.
        </p>

        <p style={text}>
          I am currently focusing on improving my skills in Data Structures and
          Algorithms and building Single Page Applications (SPA) using React Router.
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
  padding: "50px 40px",
  borderRadius: "24px",
  background: "rgba(255, 255, 255, 0.95)",
  backdropFilter: "blur(20px)",
  boxShadow: "0 20px 60px rgba(0, 0, 0, 0.3)",
  textAlign: "center",
  border: "1px solid rgba(255, 255, 255, 0.3)",
};

const imageWrapper = {
  position: "relative",
  width: "200px",
  height: "200px",
  margin: "0 auto 32px",
};

const image = {
  width: "100%",
  height: "100%",
  borderRadius: "50%",
  objectFit: "cover",
  position: "relative",
  zIndex: 2,
  border: "6px solid rgba(255, 255, 255, 1)",
  boxShadow: "0 10px 30px rgba(0, 0, 0, 0.2)",
};

const imageBorder = {
  position: "absolute",
  top: "-8px",
  left: "-8px",
  right: "-8px",
  bottom: "-8px",
  borderRadius: "50%",
  background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
  zIndex: 1,
};

const heading = {
  fontFamily: "'Poppins', sans-serif",
  fontSize: "2.5rem",
  marginBottom: "8px",
  background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  fontWeight: "700",
  letterSpacing: "-0.5px",
};

const subtitle = {
  fontSize: "1.1rem",
  color: "#666",
  marginBottom: "28px",
  fontWeight: "500",
};

const text = {
  fontSize: "1.05rem",
  lineHeight: "1.8",
  color: "#555",
  marginBottom: "16px",
  fontWeight: "400",
};
