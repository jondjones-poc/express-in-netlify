'use strict';
const express = require('express');
const serverless = require('serverless-http');

const app = express();
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

const router = express.Router();

// Default Route Get()
router.get('/', (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.write('<h1>Hello World</h1>');
  res.end();
});

// Default Route Post()
router.post('/', (req, res) => res.json({ postBody: "Hello Post World" }));

// Default Router
router.get('/alternative', (req, res) => res.json({ route: req.originalUrl }));


app.use('/.netlify/functions/server', router); 

module.exports = app;
module.exports.handler = serverless(app);