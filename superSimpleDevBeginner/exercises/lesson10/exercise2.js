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

function receipt (sumOutput){
    let receiptItem = document.createElement('div');
    let receipt = document.getElementById("receipt");
    receipt.innerText = 'Your cart total is ' + sumOutput;
    document.body.append(receipt);



}
receipt(cartTotal(myCart));

receipt(cartTotal(myCart));

function clear() {
    let receipt = document.getElementById("receipt");
    receipt.innerText = '';

}

function lineItem(myCart) {
    myCart.forEach( function (cartItem){
        let receipt = document.getElementById("receipt");
    
        let quantity = parseInt(cartItem.quantity);
        let price = parseInt(cartItem.price);
        let lineItem = document.createElement('div');
        
        lineItem.innerText = cartItem.price + ' ' + cartItem.name + ' cost ' + quantity*price;
        receipt.appendChild(lineItem)
    }
    );
}



function addTotal(myCart) {
    let sum = document.getElementById("receipt");
    let total = document.createElement('div');

    total.innerText = 'The Total of the cart is '+ cartTotal(myCart);
    sum.appendChild(total);
}




function displayReceipt(myCart) {
    clear();
    lineItem(myCart);
    addTotal(myCart);
};

displayReceipt(myCart);