const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());

app.get("/", (req, res) => {
  res.json({
    email: "oghuanlan@gmail.com",
    current_datetime: new Date().toISOString(),
    github_url: "https://github.com/kvng-dev/backend-stage0",
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
