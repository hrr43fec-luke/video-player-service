const express = require('express');

const model = require('./models');

const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/../client/public'));


app.get('/api/livestream/:id', (req, res) => {
  model.getLiveStream(req.params.id, (err, streamerData) => {
    if (err) {
      console.error(err);
    }
    res.status(200).json(streamerData);
  });
});

module.exports = app;