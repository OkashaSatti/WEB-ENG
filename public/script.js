function greet(name) {
  return `Hello, ${name}!`;
}

if (typeof document !== "undefined") {
  const heading = document.querySelector("#greeting");

  if (heading) {
    heading.textContent = greet("World");
  }
}

if (typeof module !== "undefined" && module.exports) {
  module.exports = { greet };
}
