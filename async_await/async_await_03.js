async function foo() {
  console.log("foo started")
  setTimeout(() => {
    console.log("Timeout");
  }, 0);
  await Promise.resolve();
  console.log("foo ended")
}

foo();
console.log("Last");