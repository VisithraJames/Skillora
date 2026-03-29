import React from "react";

function Dashboard() {
  return (
    <div style={styles.container}>
      {/* Header */}
      <div style={styles.header}>
        <h2>Welcome back, Student 👋</h2>
        <button style={styles.logout}>Logout</button>
      </div>

      {/* Stats Section */}
      <div style={styles.statsContainer}>
        <div style={styles.card}>
          <h3>💼 Jobs Available</h3>
          <p>12</p>
        </div>

        <div style={styles.card}>
          <h3>📚 Courses</h3>
          <p>8</p>
        </div>

        <div style={styles.card}>
          <h3>🎯 Applications</h3>
          <p>3</p>
        </div>
      </div>

      {/* Skills Section */}
      <div style={styles.section}>
        <h3>🧠 Your Skills</h3>
        <div style={styles.skills}>
          <span style={styles.skill}>Java</span>
          <span style={styles.skill}>React</span>
          <span style={styles.skill}>SQL</span>
        </div>
      </div>

      {/* Learning Goals */}
      <div style={styles.section}>
        <h3>🚀 Skills You Want to Learn</h3>
        <div style={styles.skills}>
          <span style={styles.learn}>Node.js</span>
          <span style={styles.learn}>AI</span>
        </div>
      </div>

      {/* Progress Section */}
      <div style={styles.section}>
        <h3>📈 Your Growth</h3>
        <div style={styles.progressBar}>
          <div style={styles.progressFill}></div>
        </div>
        <p>60% Profile Completion</p>
      </div>

      {/* Recommendations */}
      <div style={styles.section}>
        <h3>🔥 Recommended Jobs</h3>
        <div style={styles.listItem}>Frontend Developer - React</div>
        <div style={styles.listItem}>Java Backend Intern</div>
      </div>

      <div style={styles.section}>
        <h3>📚 Recommended Courses</h3>
        <div style={styles.listItem}>Full Stack Development</div>
        <div style={styles.listItem}>AI for Beginners</div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    padding: "20px",
    background: "linear-gradient(135deg, #0f172a, #1e3a8a)",
    color: "#fff",
    fontFamily: "Arial",
  },

  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "20px",
  },

  logout: {
    padding: "10px 15px",
    border: "none",
    borderRadius: "8px",
    background: "#ef4444",
    color: "#fff",
    cursor: "pointer",
  },

  statsContainer: {
    display: "flex",
    gap: "15px",
    marginBottom: "20px",
  },

  card: {
    flex: 1,
    background: "rgba(255,255,255,0.1)",
    padding: "20px",
    borderRadius: "10px",
    textAlign: "center",
    backdropFilter: "blur(10px)",
  },

  section: {
    marginBottom: "20px",
    background: "rgba(255,255,255,0.08)",
    padding: "15px",
    borderRadius: "10px",
  },

  skills: {
    display: "flex",
    gap: "10px",
    marginTop: "10px",
  },

  skill: {
    background: "#22c55e",
    padding: "8px 12px",
    borderRadius: "20px",
  },

  learn: {
    background: "#3b82f6",
    padding: "8px 12px",
    borderRadius: "20px",
  },

  progressBar: {
    width: "100%",
    height: "10px",
    background: "#334155",
    borderRadius: "10px",
    marginTop: "10px",
  },

  progressFill: {
    width: "60%",
    height: "100%",
    background: "#22c55e",
    borderRadius: "10px",
  },

  listItem: {
    marginTop: "10px",
    padding: "10px",
    background: "rgba(255,255,255,0.1)",
    borderRadius: "8px",
  },
};

export default Dashboard;