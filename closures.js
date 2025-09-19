function fun1() {
  var a = 8;
  function fun2() {
    console.log(a);
  }
  fun2();
}
// fun1();

// Closure -> combination of a function bundled together with references to its lexical scope
// Whenever function is returned, even if its vanished in execution context but still it remembers the reference it was pointing to
// In short: access to an outer function's scope from an inner function

function fun3() {
  var x = 21;
  function fun4() {
    x++;
    console.log(x);
  }
  x = 100;
  return fun4;
}
const fun5 = fun3();
// console.log(fun5);
// fun5();
// fun5(); // x will be incremented again, and the previous value of x will be taken

// here a function with its outer scope is returned (closure)
function z() {
  var b = 100;
  function y() {
    var a = 90;
    return function x() {
      console.log(a, b); // x forms a closure with y and z
    };
  }
  return y();
}

const fun = z();
// fun();

/* 
   Use cases of Closures:
   - Module Design Pattern
   - Currying
   - Functions like once
   - Memoize
   - maintaining state in async world
   - setTimeout
   - Iterators

   Disadvantages of Closure:
   - Over consumption of memory
   - Memory Leak
   - Freeze browser
*/

// Closure and setTimeout
const timer1 = (seconds) => {
  for (var i = 1; i <= seconds; i++)
    setTimeout(() => {
      console.log(i);
    }, 1000 * i);
};
// timer1(5);

const timer2 = (seconds) => {
  for (let i = 1; i <= seconds; i++)
    setTimeout(() => {
      console.log(i);
    }, 1000 * i);
};
// timer2(5);

const timer3 = (seconds) => {
  for (var i = 1; i <= seconds; i++) {
    fun(i);
    function fun(x) {
      setTimeout(() => {
        console.log(i);
      }, x * 1000);
    }
  }
};
// timer3(5);

const timer4 = (seconds) => {
  for (var i = 1; i <= seconds; i++) {
    (function (j) {
      setTimeout(function timer() {
        console.log(j);
      }, j * 1000);
    })(i);
  }
};
timer4(5);

// ------------------------------------------------------------------------------------------------------------

function fun6() {
  if (true) {
    var x = 10;
    let y = 20;
    const z = 30;
  }
  return function () {
    console.log(x);
    console.log(y);
    console.log(z);
  };
}
fun6()();

function fun7() {
  let x = 21;
  return function (str) {
    console.log(x, str);
  };
}
fun7()("hello");

function fun8(str) {
  return function () {
    console.log(str);
  };
}
fun8("hello")();

function outest() {
  var c = 20;
  function outer(str) {
    let a = 10;
    function inner() {
      console.log(a, c, str);
    }
    return inner;
  }
  return outer;
}
let a = 100;
outest()("Hello There")();

// Data hiding
function counter() {
  let counter = 0;
  return function () {
    counter++;
    console.log(counter);
  };
}
const incrementCounter = counter();
incrementCounter();
incrementCounter();
const incrementCounter2 = counter(); // a new function with new references
incrementCounter2();

// Constructor function
function Counter() {
  let counter = 0;
  this.incrementCounter = function () {
    counter++;
    console.log(counter);
  };
  this.decrementCounter = function () {
    counter--;
    console.log(counter);
  };
}
const counter = new Counter();
counter.incrementCounter();
counter.decrementCounter();

// Smart Garbage Collector
function fun9() {
  let x = 10;
  let y = 20;
  return function () {
    console.log(x); // Since y is not used here, y will be garbage collected
  };
}

// Caching
function memoizedSquare() {
  const cache = {}; // The cache is kept "alive" in the closure

  return function(num) {
    if (num in cache) {
      console.log('Fetching from cache:', num);
      return cache[num];
    } else {
      console.log('Calculating result...');
      const result = num * num;
      cache[num] = result;
      return result;
    }
  };
}

const square = memoizedSquare();
console.log(square(5)); // Calculating result... 25
console.log(square(5)); // Fetching from cache: 5, 25
console.log(square(10)); // Calculating result... 100
console.log(square(10)); // Fetching from cache: 10, 100

// A slight variation of classic question
function createFunctions() {
  var result = [];
  for (var i = 0; i < 3; i++) {
    result[i] = function() {
      return i;
    };
  }
  return result;
}
const funcs = createFunctions();
console.log(funcs[0]());
console.log(funcs[1]());
console.log(funcs[2]());