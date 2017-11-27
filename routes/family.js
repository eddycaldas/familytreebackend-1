const express = require('express');
const router = express.Router();
const queries = require('../db/queries');
const path = require('path');

const table = "family"

router.put('/:id', (req, res) => {
  queries[table].updated(req.params.id, req.body)
  .then((family) => res.send(200))
});

router.get('/', function (req, res) {
  queries
    .family
    .getAll()
    .then(family => {
      res.json(family)
    });
})

router.get('/:id', (req, res) => {
  queries
  .family
  .getOne(req.params.id)
  .then(family => {
    res.json(family);
  });
})

router.post('', (req, res) => {
  queries
  .family
  .create(req.body)
  .then(results => {
    res.send(results[0]);
  });
})

module.exports = router

