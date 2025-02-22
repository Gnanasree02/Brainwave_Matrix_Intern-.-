let cart = [];

function addToCart(productName, price) {
    cart.push({ name: productName, price: price });
    updateCart();
}

function updateCart() {
    const cartItems = document.getElementById("cart-items");
    const cartTotal = document.getElementById("cart-total");
    
    cartItems.innerHTML = "";
    let total = 0;
    
    cart.forEach((item, index) => {
        let li = document.createElement("li");
        li.textContent = `₹{item.name} - ₹₹{item.price.toFixed(2)}`;
        
        let removeBtn = document.createElement("button");
        removeBtn.textContent = "Remove";
        removeBtn.onclick = () => removeFromCart(index);
        
        li.appendChild(removeBtn);
        cartItems.appendChild(li);
        total += item.price;
    });
    
    cartTotal.textContent = total.toFixed(2);
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCart();
}

function checkout() {
    if (cart.length === 0) {
        alert("Your cart is empty!");
        return;
    }
    alert("Thank you for your purchase!");
    cart = [];
    updateCart();
}
