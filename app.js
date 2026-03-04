const express = require("express");
const validator = require("validator");

const app = express();
const PORT = 4000;

// Secure endpoint
app.get("/user", (req, res) => {
  let username = req.query.name || "Guest";

  // Input sanitization
  if (!validator.isAlphanumeric(username)) {
    return res.status(400).send("Invalid username");
  }

  res.send(`Hello ${username}`);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});