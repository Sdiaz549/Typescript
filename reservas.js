var reservations = [];
function addReservation() {
    var guestName = document.getElementById("guest-name").value.trim();
    var nights = parseInt(document.getElementById("nights").value);
    var pricePerNight = parseFloat(document.getElementById("price-per-night").value);
    if (!guestName || isNaN(nights) || isNaN(pricePerNight) || nights <= 0 || pricePerNight <= 0) {
        alert("Por favor, ingresa todos los campos correctamente.");
        return;
    }
    reservations.push({ guestName: guestName, nights: nights, pricePerNight: pricePerNight });
    alert("Reserva para \"".concat(guestName, "\" agregada."));
    // Limpiar campos
    document.getElementById("guest-name").value = "";
    document.getElementById("nights").value = "";
    document.getElementById("price-per-night").value = "";
}
function searchReservation() {
    var search = document.getElementById("search-guest").value.trim().toLowerCase();
    var resultDiv = document.getElementById("search-result");
    var matches = reservations.filter(function (r) { return r.guestName.toLowerCase().includes(search); });
    if (matches.length === 0) {
        resultDiv.innerHTML = "No se encontraron reservas.";
    }
    else {
        resultDiv.innerHTML = matches.map(function (r) {
            return "Hu\u00E9sped: ".concat(r.guestName, ", Noches: ").concat(r.nights, ", Precio/noche: $").concat(r.pricePerNight, ", Total: $").concat(r.nights * r.pricePerNight);
        }).join("<br>");
    }
}
function calculateTotalIncome() {
    var total = reservations.reduce(function (acc, r) { return acc + r.nights * r.pricePerNight; }, 0);
    var incomeDisplay = document.getElementById("total-income");
    incomeDisplay.textContent = "Ingreso total del hotel: $".concat(total.toFixed(2));
}
// Exportar funciones globales
window.addReservation = addReservation;
window.searchReservation = searchReservation;
window.calculateTotalIncome = calculateTotalIncome;
