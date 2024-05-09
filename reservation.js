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
