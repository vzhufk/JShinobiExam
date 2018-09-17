/*
 * Predict output and explain why.
 */

let cat = {
  voice: "Meow!",
  say: function() {
    console.log(this.voice);
  }
};

let dog = {
  voice: "Bark!"
};

dog.borrowedSay = cat.say;
dog.stealedSay = cat.say.bind(dog);

cat.say();
dog.borrowedSay();
dog.stealedSay();
(cat && cat.say)();
