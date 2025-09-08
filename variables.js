function makeCounter(initialValue = 0) {
  return {
    increment: () => {
      initialValue++;
      return this;
    },
    decrement: () => {
      initialValue--;
      return this;
    },
    reset: () => {
      initialValue = 0;
      return this;
    },
  };
}

const counter = makeCounter(5);
console.log(counter);