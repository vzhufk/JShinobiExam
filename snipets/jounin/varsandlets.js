/* 
 * Predict output and explain why.
 */

const a = [10, 12, 15, 21];
for (var i = 0; i < a.length; i++) {
  setTimeout(function() {
    console.log(`a[${i}]: ${a[i]}`);
  }, 0);
}

const b = new Array(10, 12, 15, 21);
for (let i = 0; i < b.length; ++i) {
  setTimeout(function() {
    console.log(`b[${i}]: ${b[i]}`);
  }, 1);
}
