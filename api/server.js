const express = require("express");
const app = express();
const port = 3000;
const apiRoutes = require("./routes");
const qs = require("qs");

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:5173");
  next();
});

// Root route

app.get("/", (req, res, next) => {
  res.json({
    message: "Welcome to the api",
  });
});

app.use("/api", apiRoutes);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
