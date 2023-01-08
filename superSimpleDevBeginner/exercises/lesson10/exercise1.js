const cartItems = [{
    name:"apple",
    price: "2",
    quantity:"0",
},{
    name:"banana",
    price:2,
    quantity:0,
},{
    name:"egg",
    price:2,
    quantity:"0",
},{
    name:"tomato",
    price:2,
    quantity: 0,
}];

function render(){
    cartItems.forEach(function (item){
        let cartContainer = document.createElement("div")
        cartContainer.classList.add("cart-items")
        let cartItem = document.createElement("div");
        let cartQuantity = document.createElement("div")
        let cart = document.getElementById('cart-contents')
    
        cartItem.innerText = item.name;
        cartQuantity.innerText =item.quantity;
        // console.log(typeof(item.quantity))
        cart.appendChild(cartContainer)
        cartContainer.appendChild(cartItem)
        // console.log(cartItem)
        // console.log(cartQuantity)
        cartContainer.appendChild(cartQuantity)
        // console.log(cart)
    });    
}

render()



//adding elements to cart
function addItem(item) {
    let element = document.createElement("div");
    let cartList = document.getElementById('cart-contents');
    element.innerText = item;

    cartList.append(element);
    updateNotification();

};

function retrieveNames(){
    var item = cartItems[2].name;
    var itemPrice = cartItems[2].price;
    var itemQuantity = cartItems[2].quantity;
};

function addEgg() {
    let element = document.createElement("div");
    let cartList = document.getElementById('cart-contents');
    let item = cartItems[2].name;
    let itemPrice = parseInt(cartItems[2].price);
    let itemQuantity = parseInt(cartItems[2].quantity);
    console.log(itemQuantity + "before")
    itemQuantity +=1
    cartItems[2].quantity.replace(itemQuantity)
    console.log(itemQuantity + "after")
    element.innerText = cartItems[2].name;
    return(itemQuantity)


    cartList.append(element);
    updateNotification();
    render();
};

function updateNotification(){
    let notification = parseInt(document.getElementById('cart-notifications').innerText);
    notification +=1
    document.getElementById('cart-notifications').innerText = notification;    

};






// reset our list
function clearItems() {
    document.getElementById("cart-contents").innerHTML = "";
    document.getElementById('cart-notifications').innerText = 0;    
};
