const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Create MySQL connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',    // use your mysql username
    password: 'root',    // use your mysql password
    database: 'hf360'
});

// Connect to MySQL
db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('Connected to MySQL');
});

// Route to handle form submission
app.post('/register', (req, res) => {
    const { name, email, location } = req.body;

    if (!name || !email || !location) {
        return res.status(400).send('All fields are required.');
    }

    const user = { name, email, location };

    const sql = 'INSERT INTO users SET ?';
    db.query(sql, user, (err, result) => {
        if (err) throw err;
        res.send('User data saved successfully');
    });
});

// Start server
app.listen(3000, () => {
    console.log('Server running on port 3000');
});
