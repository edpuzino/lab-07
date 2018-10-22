'use strict';

// 3rd Party
const express = require('express');
const superagent = require('superagent');

const API = 'http://localhost:3000';

const router = express.Router();

// Routes
router.get('/', homePage);
router.get('/list', listPage);

// Route Runners
function homePage(request, response) {
  response.render('site', {page: './pages/index', title:'Welcome Home'});
}

function listPage(request, response) {
  superagent.get( `${API}/api/v1/categories`)
    .then(data => {
      response.render('site', {page: './pages/list', title:'Listings', items: data.body});
    })
    .catch( error => {
      response.render('site', {page: './pages/error', title:'Error', error:error});
    });
}

module.exports = router;
