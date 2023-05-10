const path = require("path");
const router = require("express").Router();

// '/notes' will respond with the notes.html file
router.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/notes.html"));
});

// All other routes respond with the index.html file by the * wildcard
router.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});
//Have to export the router object so that it can be used in other files
module.exports = router;
