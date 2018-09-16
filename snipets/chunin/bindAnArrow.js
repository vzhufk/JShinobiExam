/*
 * Predict output and explain why.
 */

let cat = {
  voice: "Meow!",
  say: () => {
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
