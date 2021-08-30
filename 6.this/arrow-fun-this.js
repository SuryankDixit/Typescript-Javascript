/*
Unlike regular functions, arrow functions do not have their own this. The value of this inside an arrow function remains the same throughout the lifecycle of the function and is always bound to the value of this in the closest non-arrow parent function.
*/

function User() {
    console.log(this);
    (this.name = "John Doe"),
        (this.score = 20),
        (this.sayUser = function () {
            // when `this` is accessible
            // console.log(this);
            console.log(this.name);

            function innerFunction() {
                // when `this` refers to the global scope/object
                // console.log(this);
                console.log(this.name);
            }

            innerFunction();
        });
}
let Name = new User();
Name.sayUser();


let animals = {
    // add property
    domesticAnimals: ["cat", "dog", "cow", "goat", "sheep", "donkey", "pig", "horse"],
    // add method
    printdomesticAnimals: function () {
        console.log(this);
        setTimeout(function () {
            console.log(this);
            console.log(this.domesticAnimals.join(" - "));
        }, 3000);
    },
};
animals.printdomesticAnimals();


class X {
    abc() {
        console.log(this, "from abc");
        function xyz() {
            console.log(this, "from xyz");
        }
        xyz();
        console.log(this, "from abc2");
    }
}

let a = new X;
a.abc();