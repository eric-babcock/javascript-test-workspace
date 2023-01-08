const myCart = [{
    name:"apple",
    price:4,
    quantity: 2
},{
    name:"orange",
    price: 3,
    quantity: 3
}];


function cartTotal (cartArray) {
    cartSum = 0

    cartArray.forEach(function (item) {
        total = item.price *item.quantity;
        cartSum += total;
    });
    return cartSum;
}


cartTotal(myCart);
