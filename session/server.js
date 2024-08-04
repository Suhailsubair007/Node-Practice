const express = require('express');
const session = require('express-session'); // This line was missing in your code
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const nocache = require('nocache');

app.use(bodyParser.urlencoded({ extended: true }));

app.use(session({
    secret: 'secret',
    resave: false,
    saveUninitialized: true,
}));
app.use(nocache());

const user = {
    username: 'user',
    password: 'password'
};

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, "views", "login.html"));
});

app.post('/login', (req, res) => {
    const { username, password } = req.body;
    if (username === user.username && password === user.password) {
        req.session.loggedIn = true;
        res.redirect('/dashboard');
    } else {
        res.send("Invalid username or password");
    }
});

app.get('/dashboard', (req, res) => {
    if (req.session.loggedIn) {
        res.sendFile(path.join(__dirname, "views", "dashboard.html"));
    } else {
        res.redirect("/login");
    }
});

app.get('/logout', (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            return res.redirect('/dashboard');
        }
        res.redirect('/login');
    });
});

app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});
