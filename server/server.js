const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json()); // Parse JSON data sent in request body

// Create a MySQL connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root', // Your MySQL user
    password:"", // Your MySQL password
    database: 'car' // Your MySQL database name
});

// Connect to MySQL
db.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL:', err);
        return;
    }
    console.log('Connected to MySQL');
});

// API endpoint to insert data into MySQL
app.post('/register', (req, res) => {
    const { email, password, firstname, lastname } = req.body;

    if (!email || !password || !firstname || !lastname) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    const sql = 'INSERT INTO registration (email, password, firstname, lastname) VALUES (?, ?, ?, ?)';
    db.query(sql, [email, password, firstname, lastname], (err, result) => {
        if (err) {
            console.error('Error inserting data into MySQL:', err);
            return res.status(500).json({ message: 'Database error' });
        }
        res.json({ message: 'User registered successfully!' });
    });
});

// Start server
app.listen(8081, () => {
    console.log('Server is running on port 8081');
});
3