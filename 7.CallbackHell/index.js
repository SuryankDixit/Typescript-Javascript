const btn = document.querySelector('button');

// setTimeout(function abc() {
//     btn.style.transform = "translateX(100px)";
//     setTimeout(function xyz() {
//         btn.style.transform = "translateX(200px)";
//         setTimeout(function () {
//             btn.style.transform = "translateX(300px)";
//             setTimeout(function () {
//                 btn.style.transform = "translateX(400px)";
//                 setTimeout(function () {
//                     btn.style.transform = "translateX(500px)";
//                 }, 1000);
//             }, 1000);
//         }, 1000);
//     }, 1000);
// }, 1000);


const moveX = function (element, amount, delay, callback) {
    setTimeout(function () {
        element.style.transform = `translateX(${amount}px)`;
        if (callback) callback();
    }, delay);
}

moveX(btn, 100, 1000, () => {
    moveX(btn, 200, 1000, () => {
        moveX(btn, 300, 1000, () => {
            moveX(btn, 400, 1000, () => {
                moveX(btn, 500, 1000);
            })
        })
    });
});