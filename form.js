// form.js

document.addEventListener("DOMContentLoaded", () => {
  function displaySelectedSeats() {
    const selectedSeats =
      JSON.parse(localStorage.getItem("selectedSeats")) || [];
    const selectedSeatsContainer = document.getElementById("selected-seats");

    if (selectedSeats.length > 0) {
      selectedSeatsContainer.innerHTML = `<p>${selectedSeats.join(", ")}</p>`;
    } else {
      selectedSeatsContainer.innerHTML = "<p>No seats selected.</p>";
    }
  }

  displaySelectedSeats();
});

function confirmationMessage() {
  alert("Please check your mail to control your booking information");
  return false; // Formun gönderilmesini engeller
}
