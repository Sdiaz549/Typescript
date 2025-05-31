interface Reservation {
  guestName: string;
  nights: number;
  pricePerNight: number;
}

let reservations: Reservation[] = [];

function addReservation(): void {
  const guestName = (document.getElementById("guest-name") as HTMLInputElement).value.trim();
  const nights = parseInt((document.getElementById("nights") as HTMLInputElement).value);
  const pricePerNight = parseFloat((document.getElementById("price-per-night") as HTMLInputElement).value);

  if (!guestName || isNaN(nights) || isNaN(pricePerNight) || nights <= 0 || pricePerNight <= 0) {
    alert("Por favor, ingresa todos los campos correctamente.");
    return;
  }

  reservations.push({ guestName, nights, pricePerNight });
  alert(`Reserva para "${guestName}" agregada.`);

  // Limpiar campos
  (document.getElementById("guest-name") as HTMLInputElement).value = "";
  (document.getElementById("nights") as HTMLInputElement).value = "";
  (document.getElementById("price-per-night") as HTMLInputElement).value = "";
}

function searchReservation(): void {
  const search = (document.getElementById("search-guest") as HTMLInputElement).value.trim().toLowerCase();
  const resultDiv = document.getElementById("search-result") as HTMLDivElement;

  const matches = reservations.filter(r => r.guestName.toLowerCase().includes(search));

  if (matches.length === 0) {
    resultDiv.innerHTML = "No se encontraron reservas.";
  } else {
    resultDiv.innerHTML = matches.map(r =>
      `Huésped: ${r.guestName}, Noches: ${r.nights}, Precio/noche: $${r.pricePerNight}, Total: $${r.nights * r.pricePerNight}`
    ).join("<br>");
  }
}

function calculateTotalIncome(): void {
  const total = reservations.reduce((acc, r) => acc + r.nights * r.pricePerNight, 0);
  const incomeDisplay = document.getElementById("total-income") as HTMLParagraphElement;
  incomeDisplay.textContent = `Ingreso total del hotel: $${total.toFixed(2)}`;
}

// Exportar funciones globales
(window as any).addReservation = addReservation;
(window as any).searchReservation = searchReservation;
(window as any).calculateTotalIncome = calculateTotalIncome;
