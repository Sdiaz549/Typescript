var products = [];
function addProduct() {
    var name = document.getElementById("product-name").value.trim();
    var price = parseFloat(document.getElementById("product-price").value);
    var quantity = parseInt(document.getElementById("product-quantity").value);
    if (!name || isNaN(price) || isNaN(quantity)) {
        alert("Por favor, complete todos los campos correctamente.");
        return;
    }
    products.push({ name: name, price: price, quantity: quantity });
    alert("Producto \"".concat(name, "\" agregado exitosamente."));
    // Limpiar campos
    document.getElementById("product-name").value = "";
    document.getElementById("product-price").value = "";
    document.getElementById("product-quantity").value = "";
}
function searchProduct() {
    var searchName = document.getElementById("search-name").value.trim().toLowerCase();
    var resultDiv = document.getElementById("search-result");
    var found = products.filter(function (p) { return p.name.toLowerCase().includes(searchName); });
    if (found.length === 0) {
        resultDiv.innerHTML = "No se encontró ningún producto.";
    }
    else {
        resultDiv.innerHTML = found.map(function (p) {
            return "Producto: ".concat(p.name, ", Precio: $").concat(p.price, ", Cantidad: ").concat(p.quantity);
        }).join("<br>");
    }
}
function calculateInventory() {
    var totalValue = products.reduce(function (acc, p) { return acc + p.price * p.quantity; }, 0);
    var inventoryValue = document.getElementById("inventory-value");
    inventoryValue.textContent = "Valor total del inventario: $".concat(totalValue.toFixed(2));
}
// Exportar funciones globalmente
window.addProduct = addProduct;
window.searchProduct = searchProduct;
window.calculateInventory = calculateInventory;
