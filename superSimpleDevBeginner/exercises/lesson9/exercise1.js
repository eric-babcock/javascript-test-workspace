const cartItems = [];


//adding elements to cart
function addItem(item) {
    const element = document.createElement("div");
    const cartList = document.getElementById('cart-contents');
    let notification = parseInt(document.getElementById('cart-notifications').innerText);
    notification +=1
    //parseInt(document.getElementById("counter").innerText);
    element.innerText = item;
    console.log(notification);
    cartList.append(element);
    
    document.getElementById('cart-notifications').innerText = notification;    
    //document.getElementById("counter").innerText = counter;

}
console.log("hello, world")

addItem("copper")

console.log(cartItems)



// reset our list
function clearItems() {
    document.getElementById("cart-contents").innerHTML = "";
    document.getElementById('cart-notifications').innerText = 0;    
}

