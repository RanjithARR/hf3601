const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const cors = require('cors');




// Initialize express app
const app = express();
app.use(bodyParser.json());
app.use(cors());

//Cross origin support to access localhost from internet
//const cors = require('cors');
app.use(cors({
    origin: 'https://ranjitharr.github.io',  // Replace with your GitHub Pages URL
    methods: ['POST', 'GET'],
    allowedHeaders: ['Content-Type']
}));


// Create connection to MySQL database-local
const db = mysql.createConnection({
    host: 'localhost',   // Your MySQL host
    port: '3307',
    user: 'hftest',   // Your MySQL username
    password: 'hf@12test',   // Your MySQL password
    database: 'hf360',  // Your MySQL database
    
});

//const mysql = require('mysql2');




// Connect to database
db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('MySQL Connected...');
});

// API route to handle registration form submission
app.post('/register', (req, res) => {
    const { name, email, country } = req.body;
    
    // SQL query to insert data into 'users' table
    const sql = 'INSERT INTO users (name, email, country) VALUES (?, ?, ?)';
    
    db.query(sql, [name, email, country], (err, result) => {
        if (err) {
            res.status(500).send('Error saving the data');
            return;
        }
        res.send('We will get back to you with more details shortly');
    });
});

// Start the server
app.listen(3000, () => {
    console.log('Server running on port 3000');
});
