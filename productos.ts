interface Product {
  name: string;
  price: number;
  quantity: number;
}

let products: Product[] = [];

function addProduct(): void {
  const name = (document.getElementById("product-name") as HTMLInputElement).value.trim();
  const price = parseFloat((document.getElementById("product-price") as HTMLInputElement).value);
  const quantity = parseInt((document.getElementById("product-quantity") as HTMLInputElement).value);

  if (!name || isNaN(price) || isNaN(quantity)) {
    alert("Por favor, complete todos los campos correctamente.");
    return;
  }

  products.push({ name, price, quantity });
  alert(`Producto "${name}" agregado exitosamente.`);

  // Limpiar campos
  (document.getElementById("product-name") as HTMLInputElement).value = "";
  (document.getElementById("product-price") as HTMLInputElement).value = "";
  (document.getElementById("product-quantity") as HTMLInputElement).value = "";
}

function searchProduct(): void {
  const searchName = (document.getElementById("search-name") as HTMLInputElement).value.trim().toLowerCase();
  const resultDiv = document.getElementById("search-result") as HTMLDivElement;

  const found = products.filter(p => p.name.toLowerCase().includes(searchName));

  if (found.length === 0) {
    resultDiv.innerHTML = "No se encontró ningún producto.";
  } else {
    resultDiv.innerHTML = found.map(p =>
      `Producto: ${p.name}, Precio: $${p.price}, Cantidad: ${p.quantity}`
    ).join("<br>");
  }
}

function calculateInventory(): void {
  const totalValue = products.reduce((acc, p) => acc + p.price * p.quantity, 0);
  const inventoryValue = document.getElementById("inventory-value") as HTMLParagraphElement;
  inventoryValue.textContent = `Valor total del inventario: $${totalValue.toFixed(2)}`;
}

// Exportar funciones globalmente
(window as any).addProduct = addProduct;
(window as any).searchProduct = searchProduct;
(window as any).calculateInventory = calculateInventory;
