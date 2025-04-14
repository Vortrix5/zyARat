// src/components/Loading.jsx

export default function Loading() {
    const loadingContainerStyle = {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      textAlign: "center",
    };
  
    const loadingTextStyle = {
      fontSize: "1.5rem",
      marginRight: "10px",
      color: "#333",
    };
  
    const spinnerStyle = {
      border: "4px solid #f3f3f3", // Light gray
      borderTop: "4px solid #3498db", // Blue
      borderRadius: "50%",
      width: "50px",
      height: "50px",
      animation: "spin 1s linear infinite",
    };
  
    return (
      <div style={loadingContainerStyle}>
        <p style={loadingTextStyle}>Loading...</p>
        <div style={spinnerStyle}></div>
      </div>
    );
  }
  