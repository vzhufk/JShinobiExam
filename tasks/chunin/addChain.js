/*
 * Create object with function `add` with following functionality.
 */

const number = {
  value: 0,
  add: v => {}
};

let result = number
  .add(2)
  .add(3)
  .add(4)
  .add(11); // And so on.
// Result should be equal 20, or whatever sum.
