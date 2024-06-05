function redirectToFormPage() {
  window.location.href = "form.html";
}

document.addEventListener("DOMContentLoaded", function () {
  const seats = document.querySelectorAll(".seat");

  let seatNumber = 1;
  seats.forEach((seat) => {
    seat.nextElementSibling.textContent = seatNumber;
    seatNumber++;
  });

  seats.forEach((seat) => {
    seat.addEventListener("click", function () {
      if (this.checked) {
        this.nextElementSibling.style.visibility = "visible";
      } else {
        this.nextElementSibling.style.visibility = "hidden";
      }
    });
  });
});

function toggleSeatSelection(seatNumber) {
  let selectedSeats = JSON.parse(localStorage.getItem("selectedSeats")) || [];
  const index = selectedSeats.indexOf(seatNumber);
  if (index !== -1) {
    selectedSeats.splice(index, 1);
  } else {
    selectedSeats.push(seatNumber);
  }
  localStorage.setItem("selectedSeats", JSON.stringify(selectedSeats));
}

document.addEventListener("DOMContentLoaded", () => {
  const seats = document.querySelectorAll(".seat");
  seats.forEach((seat) => {
    seat.addEventListener("change", () => {
      updateSelectedSeats();
    });
  });

  function updateSelectedSeats() {
    const selectedSeats = [];
    seats.forEach((seat) => {
      if (seat.checked && !seat.classList.contains("reserved")) {
        selectedSeats.push(seat.id);
      }
    });
    localStorage.setItem("selectedSeats", JSON.stringify(selectedSeats));
  }

  function loadSelectedSeats() {
    const selectedSeats =
      JSON.parse(localStorage.getItem("selectedSeats")) || [];
    selectedSeats.forEach((seatId) => {
      const seat = document.getElementById(seatId);
      if (seat) {
        seat.checked = true;
      }
    });
  }

  loadSelectedSeats();
});
