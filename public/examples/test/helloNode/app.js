const something = require("./includes/object");
console.log(something.addNumbers(2,3));
console.log(require("./includes/object").birthday);

let Student = require("./includes/newable");
let someone = new Student("Lexi", "Super Junior", 3.1);
someone.greeting();
console.log(someone.athlete());