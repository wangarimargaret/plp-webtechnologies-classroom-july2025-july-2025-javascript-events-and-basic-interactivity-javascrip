// Wait for the DOM to fully load before running scripts
document.addEventListener("DOMContentLoaded", function () {
  // 🔘 Create and append a "Click Me!" button
  const clickButton = document.createElement("button");
  clickButton.textContent = "Click Me!";
  clickButton.id = "click-button";
  document.getElementById("interactive-section").appendChild(clickButton);

  // 🖱 Add click event listener to show an alert
  clickButton.addEventListener("click", function () {
    alert("Button was clicked!");
  });

  // 🌗 Create and append a Light/Dark Mode toggle button
  const toggleButton = document.createElement("button");
  toggleButton.textContent = "Toggle Light/Dark Mode";
  toggleButton.id = "mode-toggle";
  document.getElementById("interactive-section").appendChild(toggleButton);

  // 🌙 Toggle the 'dark-mode' class on the body when clicked
  toggleButton.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
  });

  // ❓ FAQ toggle: show/hide answers when questions are clicked
  document.querySelectorAll(".faq-item .question").forEach(function (question) {
    question.addEventListener("click", function () {
      const item = question.parentElement;
      item.classList.toggle("active");
    });
  });

  // ✅ Form validation logic
  document.getElementById("user-form").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form from submitting

    // Get input values and trim whitespace
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const feedback = document.getElementById("form-feedback");

    let errors = [];

    // 🧾 Name validation
    if (name === "") {
      errors.push("Name is required.");
    }

    // 📧 Email validation using regex
    const emailPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
    if (!emailPattern.test(email)) {
      errors.push("Please enter a valid email address.");
    }

    // 🔐 Password validation: minimum 6 characters
    if (password.length < 6) {
      errors.push("Password must be at least 6 characters long.");
    }

    // 📝 Display feedback messages with animation
    if (errors.length > 0) {
      feedback.style.color = "red";
      feedback.textContent = errors.join(" ");
      feedback.classList.add("visible");
    } else {
      feedback.style.color = "green";
      feedback.textContent = "Form submitted successfully!";
      feedback.classList.add("visible");
    }

    // ⏳ Remove animation class after 3 seconds
    setTimeout(() => {
      feedback.classList.remove("visible");
    }, 3000);
  });
});