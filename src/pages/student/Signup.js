import React, { useState } from "react";

function Signup() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSignup = () => {
    if (form.password !== form.confirmPassword) {
      alert("Passwords do not match ❌");
      return;
    }
    alert("Signup Successful 🚀");
    console.log(form);
  };

  return (
    <div style={styles.container}>
        <div style={styles.glitter}></div>
      <div style={styles.card}>
        <h1 style={styles.logo}>Skillora</h1>
        <p style={styles.subtitle}>Create your account</p>

        <input
          style={styles.input}
          type="text"
          name="name"
          placeholder="Full Name"
          onChange={handleChange}
        />

        <input
          style={styles.input}
          type="email"
          name="email"
          placeholder="Email Address"
          onChange={handleChange}
        />

        <input
          style={styles.input}
          type="text"
          name="phone"
          placeholder="Phone Number"
          onChange={handleChange}
        />

        <input
          style={styles.input}
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
        />

        <input
          style={styles.input}
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          onChange={handleChange}
        />

        <button style={styles.button} onClick={handleSignup}>
          Sign Up 🚀
        </button>
      </div>
    </div>
  );
}
const styles = {
  container: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(135deg, #0f172a, #1e3a8a)",
    position: "relative",
    overflow: "hidden",
  },

  // ✨ Glitter overlay
  glitter: {
    position: "absolute",
    width: "100%",
    height: "100%",
    backgroundImage: `
      radial-gradient(circle, rgba(255,255,255,0.4) 1px, transparent 1px),
      radial-gradient(circle, rgba(192,192,192,0.5) 1px, transparent 1px)
    `,
    backgroundSize: "50px 50px, 80px 80px",
    animation: "sparkle 4s linear infinite",
  },

  card: {
    background: "rgba(248,250,252,0.95)", // silver glass effect
    backdropFilter: "blur(10px)",
    padding: "40px",
    borderRadius: "12px",
    width: "350px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.5)",
    textAlign: "center",
    zIndex: 1,
  },

  logo: {
    marginBottom: "10px",
    color: "#1e3a8a",
    fontWeight: "bold",
  },

  subtitle: {
    marginBottom: "20px",
    color: "#475569",
  },

  input: {
    width: "100%",
    padding: "12px",
    margin: "10px 0",
    borderRadius: "8px",
    border: "1px solid #cbd5e1",
    background: "#f1f5f9",
  },

  button: {
    width: "100%",
    padding: "12px",
    marginTop: "15px",
    border: "none",
    borderRadius: "8px",
    background: "linear-gradient(135deg, #1e3a8a, #0f172a)",
    color: "#fff",
    fontWeight: "bold",
    cursor: "pointer",
  },
};

export default Signup;