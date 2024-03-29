let total = 0;

function createCart(foodPrices) {
  const foods = Object.keys(foodPrices);

  foods.forEach(function (food) {
    const cartItem = document.createElement('div');

    // Here we get the food price using the food variable.
    // If food = 'Apple', then foodPrices[food] is the same
    // as foodPrices['Apple'], which is the same as foodPrices.Apple
    const foodPrice = foodPrices[food];
    cartItem.innerText = food + ' $' + foodPrice;

    const addButton = document.createElement('button');
    addButton.innerText = 'Add';

    // Sorry I didn't teach this (I'll revise in the 2022 edition)!
    // You'll have to use a function without a name here. If you
    // create a separate addToCart() function, it will not have
    // access to any of the variables in this function.
    addButton.onclick = function () {
      total = total + foodPrice;
    };

    cartItem.appendChild(addButton);

    // This wil render each food with an "Add" button onto the webpage.
    document.body.appendChild(cartItem);
  });
}

createCart({ Apple: 3, Orange: 4, Egg: 2 });