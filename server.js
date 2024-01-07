// server.js
const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Abhinav@0607',
  database: 'service_provider_db',
  insecureAuth: true, 
});

db.connect((err) => {
  if (err) {
    console.error('MySQL connection error:', err);
  } else {
    console.log('Connected to MySQL database');
  }
});

app.get('/requests', (req, res) => {
  db.query('SELECT * FROM requests', (err, result) => {
    if (err) {
      res.status(500).send({ error: 'Error fetching requests' });
    } else {
      res.status(200).json(result);
    }
  });
});

app.get('/ratings', (req, res) => {
  db.query('SELECT * FROM ratings', (err, result) => {
    if (err) {
      res.status(500).send({ error: 'Error fetching ratings' });
    } else {
      res.status(200).json(result);
    }
  });
});

app.get('/payments', (req, res) => {
  db.query('SELECT * FROM payments', (err, result) => {
    if (err) {
      res.status(500).send({ error: 'Error fetching payments' });
    } else {
      res.status(200).json(result);
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
