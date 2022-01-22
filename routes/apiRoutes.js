const router =  require('express').Router()
const database = require('../data/database')


// get allowing for the return of a specific note
router.get('/notes', (req, res) => {
    // console.log('Here')
    database.getNotes().then((notes) => {
        return res.json(notes)
    })
    .catch((err) => {
        res.status(500).json(err)
    })
  });

// handles Post requests when user creates new notes 
  router.post('/notes', (req, res) => {
   database.addNotes(req.body).then((notes) => {
       return res.json(notes)
   })
   .catch((err) => {
       res.status(500).json(err)
   })

  });

  module.exports = router
