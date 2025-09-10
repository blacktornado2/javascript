// Polyfill -> browser fallback

let user = {
    firstName: "Ankit",
    lastName: "Bhardwaj"
}

const printName = function (hometown, state) {
    console.log(`Name: ${this.firstName} ${this.lastName} from ${hometown}, ${state}`);
}

const printMyName = printName.bind(user, "Gurugram");
printMyName("Haryana");


// Custom polyfill
Function.prototype.mybind = function(...args) {
    let fun = this;
    return function(...args2) {
        fun.apply(args[0], [...args.slice(1), ...args2] )
    }
}

const printMyName2 = printName.mybind(user, "Mumbai");
printMyName2("Maharashtra");

