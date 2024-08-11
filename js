// Function to calculate the total cost based on the order
function calculateTotal() {
    const orderInput = document.getElementById('orderInput').value.toLowerCase();
    const orderItems = orderInput.split(',').map(item => item.trim());

    // Define the prices for each item
    const menu = {
        coffee: 3.50,
        latte: 4.00,
        cappuccino: 4.00,
        muffin: 2.50,
        croissant: 3.00,
        cookie: 1.50
    };

    let totalCost = 0;

    // Calculate total based on user's order
    orderItems.forEach(item => {
        if (menu[item]) {
            totalCost += menu[item];
        } else {
            console.log(`Sorry, we don't have ${item} on our menu.`);
        }
    });

    // Display the total cost on the webpage
    const totalCostDisplay = document.getElementById('totalCost');
    totalCostDisplay.textContent = `Total: $${totalCost.toFixed(2)}`;
}
