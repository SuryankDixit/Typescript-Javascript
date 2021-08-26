const express = require('express');

console.log(typeof express);    // function

const app = express();  // instance of server;


// intermediate action on request
// it will parse the body of the request if it is in urlencoded format
app.use(express.urlencoded({ extended: true }));

// sets certain properties inside your application
// view engine is one of the default properties that express has
app.set('view engine', 'hbs');


app.get('/', (req, res) => {
    res.render('home', { title: 'Todo List' });
});


// mounting public folder on route xyz;
// localhost:5555/xyz/a.html
// if any folder has index.html , then we can access that only with the folder name
b
app.use('/xyz', express.static(__dirname + '/public'));

app.listen(5555, () => {
    console.log("Server Started");
})