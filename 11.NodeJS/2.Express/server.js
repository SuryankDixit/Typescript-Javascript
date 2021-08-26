const express = require('express');

console.log(typeof express);    // function

const app = express();  // instance of server;


// intermediate action on request
// it will parse the body of the request if it is in urlencoded format
app.use(express.urlencoded({ extended: true }))


app.get('/', (req, res) => {
    // console.log(req.headers);
    console.log(req.query);
    res.send('Hello World');
});

app.get('/greet', (req, res) => {
    let person = 'Guest';
    person = req.query.person;
    res.send('Hello ' + person + ' from GET.');
})

app.post('/greet', (req, res) => {
    let person = 'Guest';
    // person = req.query.person;
    person = req.body.person2;
    console.log(req.body);
    res.send('Hello ' + person + ' from POST.');
})

app.get('/form', (req, res) => {
    res.sendFile(__dirname + '/files/form.html');
})


app.listen(5555, () => {
    console.log("Server Started");
})