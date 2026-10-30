const { test } = require("node:test");
const assert = require("node:assert/strict");
const { greet } = require("../public/script.js");

test("greet returns the expected greeting", () => {
  assert.equal(greet("World"), "Hello, World!");
});