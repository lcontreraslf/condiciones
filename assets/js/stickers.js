const inputs = document.querySelectorAll('input[type="number"]');
const resultado = document.getElementById("resultado");

inputs.forEach((input) => {
  input.addEventListener("input", () => {
    if (input.value > 10) {
      input.value = 10;
    }
    calcularTotal();
  });
});

function calcularTotal() {
  let total = 0;
  inputs.forEach((input) => {
    total += parseInt(input.value) || 0;
  });

  if (total <= 10) {
    resultado.textContent = `Llevas ${total} stickers`;
  } else {
    resultado.textContent = "Llevas demasiados stickers";
  }
}
