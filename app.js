document.getElementById("submit-btn").addEventListener("click", function () {
  // Clear previous errors
  document.querySelectorAll(".error").forEach(function (el) {
    el.style.display = "none";
  });

  let isValid = true;

  // Validate First Name
  const firstName = document.getElementById("first-name").value;
  if (!firstName) {
    document.getElementById("first-name-error").style.display = "block";
    isValid = false;
  }

  // Validate Last Name
  const lastName = document.getElementById("last-name").value;
  if (!lastName) {
    document.getElementById("last-name-error").style.display = "block";
    isValid = false;
  }

  // Validate Email
  const email = document.getElementById("email").value;
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || !emailPattern.test(email)) {
    document.getElementById("email-error").style.display = "block";
    isValid = false;
  }

  // Validate Password
  const password = document.getElementById("password").value;
  if (!password) {
    document.getElementById("password-error").style.display = "block";
    isValid = false;
  }

  if (isValid) {
    alert("Form Submitted Successfully");
  }
});

document
  .getElementById("toggle-password")
  .addEventListener("click", function () {
    const passwordField = document.getElementById("password");
    const type =
      passwordField.getAttribute("type") === "password" ? "text" : "password";
    passwordField.setAttribute("type", type);
    this.textContent = type === "password" ? "👁️" : "🙈";
  });
