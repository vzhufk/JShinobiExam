/*
 * Predict output and explain.
 */

let myObject = {
  price: 20.99,
  get_price: function() {
    return this.price;
  }
};

let customObject = Object.create(myObject);
customObject.price = 19.99;

delete customObject.price;
console.log(customObject.get_price());
