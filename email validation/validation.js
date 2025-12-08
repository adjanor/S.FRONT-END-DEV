const form = document.getElementById("signup-form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  validateInput("username");
  validateInput("email");
  validateInput("password");
});

function validateInput(id) {
  const input = document.getElementById(id);
  const errorMsg = input.nextElementSibling;

  if (input.value.trim() === "") {
    showError(errorMsg, "This field cannot be empty");
  } else if (id === "email" && !isValidEmail(input.value)) {
    showError(errorMsg, "Invalid email format");
  } else {
    hideError(errorMsg);
  }
}

function showError(errorMsg, message) {
  errorMsg.textContent = message;
  errorMsg.classList.add("visible");
}

function hideError(errorMsg) {
  errorMsg.classList.remove("visible");
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
