const router =  require('express').Router()
const database = require('../data/database')



router.get('/notes', (req, res) => {
    database.getNotes().then((notes) => {
        return res.json(notes)
    })
    .catch((err) => {
        res.status(500).json(err)
    })
  });

  router.post('/notes', (req, res) => {
   database.addNotes(req.body).then((notes) => {
       return res.json(notes)
   })
   .catch((err) => {
       res.status(500).json(err)
   })

  });

  module.exports = router
