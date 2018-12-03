const express = require('express');
const app = express();

const path = require('path');
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.use(express.static(path.join(__dirname, "public")));

// app.get('/', (req, res) => {
//     res.send("hello world");
// });

// app.get('/about', (req, res) => {

//     res.send("<h1>Hellow about</h1>");
// });


// app.get('/users/:name', (req, res) => {
//     let user = req.params.name;
//     res.send(`<h1>Hello about ${user}</h1> `);
// });



app.get('/users', (req, res) => {
    let users = [
        {
            first_name: "Aman",
            last_name: "Ullah",
            age: 27,
            gender: "Male"
        },
        {
            first_name: "Ummey",
            last_name: "Habiba",
            age: 22,
            gender: "Female"
        },
        {
            first_name: "Aman",
            last_name: "Ullah",
            age: 27,
            gender: "Male"
        }
    ];

    res.json(users);
});


app.get('/download', (req, res) => {
    res.download(path.join(__dirname, "/download/omg.jpg"));
});

app.get('/about', (req, res) => {
    res.redirect('/about.html')
});


app.post('/subscribe', (req, res) => {
let name = req.body.name;
let email = req.body.email;
console.log(name, email);
})

app.listen(3010, () => {
    console.log('server started on port 3010');
})