const express = require("express");
const apiRoutes = require("./routes/apiRoutes");
const htmlRoutes = require("./routes/htmlRoutes");

// Initialize the app and create a port
const app = express();
const PORT = process.env.PORT || 3001;

// Set up body parsing, static, and route middleware
app.use(express.urlencoded({ extended: true })); //middleware for parsing JSON and urlencoded form data
app.use(express.json()); //middleware for parsing JSON and urlencoded form data
app.use(express.static("public")); //middleware for serving static files
app.use("/api", apiRoutes);
app.use("/", htmlRoutes);

// Start the server on the port
app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));
