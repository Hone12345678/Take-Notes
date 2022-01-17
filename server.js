// GIVEN a note-taking application
// WHEN I open the Note Taker
// THEN I am presented with a landing page with a link to a notes page
// WHEN I click on the link to the notes page
// THEN I am presented with a page with existing notes listed in the left-hand column, plus empty fields to enter a new note title and the note’s text in the right-hand column
// WHEN I enter a new note title and the note’s text
// THEN a Save icon appears in the navigation at the top of the page
// WHEN I click on the Save icon
// THEN the new note I have entered is saved and appears in the left-hand column with the other existing notes
// WHEN I click on an existing note in the list in the left-hand column
// THEN that note appears in the right-hand column
// WHEN I click on the Write icon in the navigation at the top of the page
// THEN I am presented with empty fields to enter a new note title and the note’s text in the right-hand column


// const fs = require('fs');
// const path = require('path');
// const { notes } = require('./data/notes');
// const express = require('express');
// const PORT = process.env.PORT || 3001;
// const app = express();
// // this parses incoming string or array data
// app.use(express.urlencoded({ extended: true }));
// // this parses incoming JSON data
// app.use(express.json());
// app.use(express.static('public'));

// function createNewNote(body, noteArray) {
//     const note = body;
//     noteArray.push(note);
//     fs.writeFileSync(
//         path.join(__dirname, './data/notes.json'),
//         JSON.stringify({ notes: noteArray}, null, 2)
//     );
//     // return finished code to post route for response
//     return note;
//   }

//   function validateNote(note) {
//     if (!note.title || typeof note.title !== 'string') {
//       return false;
//     }
//     if (!note.text || typeof note.text !== 'string') {
//       return false;
//     }
//     return true;
//   }

// //   app.get('/api/notes', (req, res) => {
// //     res.json(notes);
// //   });

//   app.get('/api/notes', (req, res) => {
//     let results = notes;
//     console.log(req.query)
//     res.json(results);
//   });

//   app.post('/api/notes', (req, res) => {
//     // req.body is where our incoming content will be
//     req.body.id = notes.length.toString();

//     // if any data in req.body is incorrect, send 400 error back
//   if (!validateNote(req.body)) {
//     res.status(400).send('The note is not properly formatted.');
//   } else {

// // add animal to json file and notes array in this function
// const note = createNewNote(req.body, notes);

//     res.json(req.body);
//   }
//   });


//   app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, './public/index.html'));
//   });




const express = require('express');
const apiRoutes =  require('./routes/apiRoutes')
const htmlRoutes =  require('./routes/htmlRoutes')
const PORT = process.env.PORT || 3001;
const app = express();
// this parses incoming string or array data
app.use(express.urlencoded({ extended: true }));
// this parses incoming JSON data
app.use(express.json());
app.use(express.static('public'));

app.use('/api', apiRoutes)
app.use('/', htmlRoutes)


  app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
  });