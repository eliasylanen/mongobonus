const express = require('express');
const dbTools = require('./modules/dbMethods');

const app = express();

function getData(req, res) {
  dbTools.fetchFromDatabase(req.params.collection, {}, (data) => {
    res.send(data);
    res.end();
  });
}

app
  .use(express.static('client'))
  .get('/:collection', getData);

app.listen(8000);
