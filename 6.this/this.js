/*
-this is a reference to an object and that object represents the current execution scope;
- Arrow finction inside methods do not get their local copy of this
*/


// Example1 
console.log(this);      // window;
const fun = () => {
    console.log(this);  // window
}
fun();


// Example 2
obj = {
    key1: "value1",
    key2: "value2",
    key3: "value3",
    key4: "value4",
    key5: this,
    testFunction(msg) {
        this.key2 = msg;
        return `${msg} ${this.key1}`;
    },
    dumpData() {
        console.log(this);
        message = this.testFunction("Hello World ");
        console.log(message);
    }
}
console.log(obj.key5);            // this in key5 pointing to window;
console.log(obj.dumpData());      // this in testFunction pointing to object;


// create a reference to function and then print this of dump Data;
const ref = obj.dumpData;
ref();      // it prints window;