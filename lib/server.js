'use strict';

const express = require('express');

// Esoteric libs
const router = require('./routes.js');

const app = express();


// Set the view engine for templating
app.set('view engine', 'ejs');

// Statics
app.use( express.static('./public') );

// Dynamic Routes
app.use(router);


module.exports = {
  server: app,
  start: port => {
    let PORT = port || process.env.PORT || 8080;
    app.listen(PORT, () => console.log(`Listening on ${PORT}`));
  },
};

