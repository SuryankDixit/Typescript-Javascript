function download(url) {
    return new Promise(function (resolve, reject) {
        if (!url.startsWith("http")) {
            reject(new Error("file does not start with http."));
        } else {
            console.log('Download Start : ' + url);
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
            console.log('Resizing Start : ' + fileName);
            setTimeout(function () {
                let resizedFile = fileName.split('.')[0] + "-resized.png";
                resolve(resizedFile);
            }, 2000);
        }
    })
}

function upload(resizedFileName) {
    return new Promise(function (resolve, reject) {
        console.log('Start Upload: ' + resizedFileName);
        setTimeout(function () {
            let uploadUrl = 'http://imgur.com/' + resizedFileName;
            resolve(uploadUrl);
        }, 3000);
    })
}

// download('http://cb.lk/logo.png')
//     .then(resize)                   // passing a function in .then 
//     .then(upload)
//     .then(function (uploadUrl) {
//         console.log("File was uploaded to :" + uploadUrl);
//     })
//     .catch(function (err) {
//         console.log(err);
//     })


// if any of the promise fails, then we go to the catch block and not in the then block
// Promise.all([
//     download('http://cb.lk/logo.png'),
//     download('htp://cb.lk/banner.png'),
//     download('http://cb.lk/promo.png'),
// ]).then(function (values) {
//     console.log(values);
// }).catch(function (err) {
//     console.log(err);
// })


Promise.all([
    download('http://cb.lk/logo.png'),
    download('http://cb.lk/banner.png'),
    download('http://cb.lk/promo.png')
]).then(function (fileNames) {
    return Promise.all(fileNames.map(resize));
}).then(function (resizedFiles) {
    return Promise.all(resizedFiles.map(function (file) {
        return upload(file);
    }));
    // return Promise.all(resizedFiles.map(upload));
}).then(function (values) {
    console.log(values);
}).catch(function (err) {
    console.log(err);
})