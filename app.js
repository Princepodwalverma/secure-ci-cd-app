const express = require("express");
const app = express();

// 🔥 Hardcoded secret (SonarQube detect karega)
const API_SECRET = "mySuperSecretPassword123";

// Vulnerable endpoint (no validation)
app.get("/user", (req, res) => {
  const username = req.query.name;
  res.send("Hello " + username);
});

app.get("/", (req, res) => {
  res.send("Secure CI/CD Demo App Running");
});

app.listen(4000, () => {
  console.log("App running on port 4000");
});