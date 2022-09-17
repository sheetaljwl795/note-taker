const notes = require('express').Router();
const { readFromFile, readAndAppend, deleteAndWrite } = require('../helpers/fsUtils');
const uuid = require('../helpers/uuid');


// GET Route for retrieving all the notes
notes.get('/', (req, res) => {
    console.info(`${req.method} request received for notes`);
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
  });


// POST Route for a new note
notes.post('/', (req, res) => {
    console.info(`${req.method} request received to add a note`);
    console.log(req.body);
  
    const { title, text } = req.body;
  
    if (req.body) {
      const newNote = {
        title,
        text,
        id: uuid(),
      };
  
      readAndAppend(newNote, './db/db.json');
      res.json(`Note added successfully 🚀`);
      } else {
          res.error('Error in adding note');
      };
  });


// DELETE Route for a saved note  
notes.delete('/:id', (req, res) => {
  console.info(`${req.method} request received to delete a note`);
  console.log(req.params.id);

  const deleteNote = req.params.id;

  if (req.body) { 
  deleteAndWrite(deleteNote, './db/db.json');
  res.json(`Note deleted successfully 🚀`);
  } else {
  res.error('Error in deleting note');
  };

  });

  
  module.exports = notes;