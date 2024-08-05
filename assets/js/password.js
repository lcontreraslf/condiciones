const digit1 = document.getElementById("digit1");
const digit2 = document.getElementById("digit2");
const digit3 = document.getElementById("digit3");
const checkButton = document.getElementById("checkPassword");
const resultParagraph = document.getElementById("result");

for (let i = 1; i <= 9; i++) {
  const option = document.createElement("option");
  option.value = i;
  option.text = i;
  digit1.add(option.cloneNode(true));
  digit2.add(option.cloneNode(true));
  digit3.add(option.cloneNode(true));
}

checkButton.addEventListener("click", () => {
  const password = digit1.value + digit2.value + digit3.value;

  if (password === "911") {
    resultParagraph.textContent = "Password 1 correcto";
  } else if (password === "714") {
    resultParagraph.textContent = "Password 2 es correcto";
  } else {
    resultParagraph.textContent = "Password incorrecto";
  }
});
