// Food Menu
let food = [
    {name: "Paneer Butter Masala", price: 280, category: "main"},
    {name: "Chicken Biryani", price: 340, category: "main"},
    {name: "Pizza", price: 320, category: "main"},
    {name: "Spring Rolls", price: 180, category: "starter"},
    {name: "Gulab Jamun", price: 90, category: "dessert"},
    {name: "Cold Coffee", price: 140, category: "beverage"}
];

// Shopping Cart
let cart = [];

// Login Function
function handleMobileLogin(event) {
    event.preventDefault();

    let mobile = document.getElementById("mobile-number").value;

    if (mobile.length == 10 && /^[0-9]+$/.test(mobile)) {
        document.getElementById("login-screen").style.display = "none";
        document.getElementById("app-container").style.display = "block";

        showFood();
    }
    else {
        alert("Enter valid mobile number");
    }
}

// Logout Function
function handleLogout() {
    document.getElementById("login-screen").style.display = "flex";
    document.getElementById("app-container").style.display = "none";

    cart = [];
    updateCart();
}

// Display Food
function showFood() {
    let output = "";

    for (let i = 0; i < food.length; i++) {
        output += `
            <div class="food-card">
                <h3>${food[i].name}</h3>
                <p>Price: ₹${food[i].price}</p>
                <button onclick="addToCart(${i})">Add</button>
            </div>
        `;
    }

    document.getElementById("menu-container").innerHTML = output;
}

// Add Food to Cart
function addToCart(index) {
    cart.push(food[index]);
    updateCart();
}

// Update Cart
function updateCart() {
    let total = 0;
    let output = "";

    for (let i = 0; i < cart.length; i++) {
        total = total + cart[i].price;

        output += `
            <p>${cart[i].name} - ₹${cart[i].price}</p>
        `;
    }

    document.getElementById("cart-items").innerHTML = output;
    document.getElementById("cart-count").innerText = cart.length;
    document.getElementById("cart-total-price").innerText = total;
}

// Open and Close Cart
function toggleCart() {
    document.getElementById("cart-sidebar").classList.toggle("open");
}

// Filter Food
function filterCategory(event, category) {
    let output = "";

    for (let i = 0; i < food.length; i++) {
        if (category == "all" || food[i].category == category) {
            output += `
                <div class="food-card">
                    <h3>${food[i].name}</h3>
                    <p>Price: ₹${food[i].price}</p>
                    <button onclick="addToCart(${i})">Add</button>
                </div>
            `;
        }
    }

    document.getElementById("menu-container").innerHTML = output;
}

// Mobile Navigation
function toggleMobileNav() {
    document.getElementById("nav-menu").classList.toggle("active");
}

// Close Navigation
function closeNav() {
    document.getElementById("nav-menu").classList.remove("active");
}

// Payment Function
function openPaymentModal() {
    if (cart.length == 0) {
        alert("Your cart is empty");
    }
    else {
        toggleCart();
        document.getElementById("payment-modal").style.display = "flex";
    }
}

// Close Payment
function closePaymentModal() {
    document.getElementById("payment-modal").style.display = "none";
}

// Place Order
function placeOrder() {
    alert("Thank you! Your order is placed successfully.");

    cart = [];
    updateCart();

    closePaymentModal();
}