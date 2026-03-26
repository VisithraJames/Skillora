import React, { useState } from "react";

function Login() {
  const [form, setForm] = useState({
    email: "",
    password: "",
    role: "student"
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleLogin = () => {
    const users = JSON.parse(localStorage.getItem("users")) || [];

    const user = users.find(
      (u) =>
        u.email === form.email &&
        u.password === form.password &&
        u.role === form.role
    );

    if (user) {
      alert("Login Successful 🚀");

      // Redirect based on role
      if (form.role === "student") {
        window.location.href = "/student-dashboard";
      } else if (form.role === "recruiter") {
        window.location.href = "/recruiter-dashboard";
      } else {
        window.location.href = "/academy-dashboard";
      }
    } else {
      alert("Invalid Credentials ❌");
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.glitter}></div>

      <div style={styles.card}>
        <h1 style={styles.logo}>Skillora</h1>
        <p style={styles.subtitle}>Login to your account</p>

        {/* Role Selection */}
        <select
          name="role"
          style={styles.input}
          onChange={handleChange}
        >
          <option value="student">Student</option>
          <option value="recruiter">Recruiter</option>
          <option value="academy">Academy</option>
        </select>

        <input
          style={styles.input}
          type="email"
          name="email"
          placeholder="Email Address"
          onChange={handleChange}
        />

        <input
          style={styles.input}
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
        />

        <button style={styles.button} onClick={handleLogin}>
          Login 🚀
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

  glitter: {
    position: "absolute",
    width: "100%",
    height: "100%",
    backgroundImage: `
      radial-gradient(circle, rgba(255,255,255,0.4) 1px, transparent 1px),
      radial-gradient(circle, rgba(192,192,192,0.5) 1px, transparent 1px)
    `,
    backgroundSize: "50px 50px, 80px 80px",
  },

  card: {
    background: "rgba(248,250,252,0.95)",
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

export default Login;