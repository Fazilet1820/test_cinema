function redirectToFormPage() {
  window.location.href = "form.html";
}

// DOM içeriği tamamen yüklendiğinde bu fonksiyon çalışır

//function to give numbers to the seats
document.addEventListener("DOMContentLoaded", function () {
  // 'seat' sınıfına sahip tüm elementleri seç
  const seats = document.querySelectorAll(".seat");

  // Her koltuğa sıralı olarak numara ekleme
  let seatNumber = 1;
  seats.forEach((seat) => {
    seat.nextElementSibling.textContent = seatNumber;
    seatNumber++;
  });

  // Her koltuğa 'click' olayı için bir olay dinleyici ekle
  seats.forEach((seat) => {
    seat.addEventListener("click", function () {
      // Koltuğun işaretli olup olmadığını kontrol et
      if (this.checked) {
        // İşaretli ise, numarayı göster
        this.nextElementSibling.style.visibility = "visible";
      } else {
        // İşaretli değilse, numarayı gizle
        this.nextElementSibling.style.visibility = "hidden";
      }
    });
  });
});

// reservation.js

// Koltuk işaretleme fonksiyonu
function toggleSeatSelection(seatNumber) {
  // Seçilen koltukları local storage'a kaydetme
  let selectedSeats = JSON.parse(localStorage.getItem("selectedSeats")) || [];
  const index = selectedSeats.indexOf(seatNumber);
  if (index !== -1) {
    selectedSeats.splice(index, 1); // Koltuk zaten seçiliyse, seçimini kaldır
  } else {
    selectedSeats.push(seatNumber); // Koltuk henüz seçili değilse, seçimini ekle
  }
  localStorage.setItem("selectedSeats", JSON.stringify(selectedSeats));
}

// reservation.js

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
