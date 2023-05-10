const router = require('express').Router();  //import the Router class from express which is a class that helps us create routes
const store = require('../db/store');  //import the store object from db/store.js which is an object that contains methods for interacting with the db.json file

// GET "/api/notes" responds with all notes from the db/ db.json database
router.get('/notes', (req, res) => {
  store
    .getNotes()
    .then((notes) => {
      return res.json(notes);
    })
    .catch((err) => res.status(500).json(err));
});
// Post "/api/notes" receives a new note to save on the request body, adds it to the db.json file, and then returns the new note to the client.
router.post('/notes', (req, res) => {
  store
  .addNote(req.body)    //.addNote() method is called with the new note as an argument
  .then((note) => res.json(note))
  .catch((err) => res.status(500).json(err));
});

// DELETE "/api/notes" deletes the note with an id equal to --req.params.id--
router.delete('/notes/:id', (req, res) => {
  store
  .removeNote(req.params.id)
  .then(() => res.json({ ok: true }))
  .catch((err) => res.status(500).json(err));
});
//Export router object so that it can be used in other files
module.exports = router;
