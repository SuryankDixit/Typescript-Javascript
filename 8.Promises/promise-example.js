function download(url) {
    return new Promise(function (resolve, reject) {
        if (!url.startsWith("http")) {
            reject(new Error("file does not start with http."));
        } else {
            setTimeout(function () {
                let fileName = url.split("/").pop();
                resolve(fileName);
            }, 3000);
        }
    })
}

function resize(fileName) {
    return new Promise(function (resolve, reject) {
        if (!fileName.endsWith('.png')) {
            reject(new Error("Not a png file"));
        } else {
            setTimeout(function () {
                let resizedFile = fileName.split('.')[0] + "-resized.png";
                resolve(resizedFile);
            }, 2000);
        }
    })
}


// check the difference in nesting and chaining.

// download('http://cb.lk/logo.png')
//     .then(function (fileName) { 
//         resize(fileName)
//             .then(function (resizedFile) {
//                 console.log("Resized file is: " + resizedFile);
//             })
//             .catch(function (err) {
//                 console.log(err);
//             })
//     })
//     .catch(function (err) {
//         console.log(err);
//     }) 

download('http://cb.lk/logo.png')
    .then(resize)                   // passing a function in .then 
    .then(function (resizedFile) {
        console.log("Resized file is: " + resizedFile);
    })
    .catch(function (err) {
        console.log(err);
    })
