const fs = require('fs');

fs.writeFile(__dirname + '/file1.txt', "someData", function (err) {
    if (err) throw err;
    console.log("File Written");
});

fs.readFile(__dirname + '/file1.txt', function (err, data) {
    if (err) throw err;
    console.log(data);
    console.log(data.toString());
})