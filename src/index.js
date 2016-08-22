const express = require('express');
const expressApp = express();
const bodyParser = require('body-parser');
expressApp.use(bodyParser.json());

const persistenceClient = require('./clients/persistence-client');

expressApp.post('/', (req, res) => {
  persistenceClient.addEvent(req.body)
    .then(doc => res.send(doc))
    .catch(err => res.status(500).send('There was an error'));
});

expressApp.listen(3000, () => {
  console.log('Example expressApp listening on port 3000!');
});
