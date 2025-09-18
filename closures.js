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
// access to an outer function's scope from an inner function

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
