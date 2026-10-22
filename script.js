// Automatically update the copyright year
document.getElementById("year").textContent =
  new Date().getFullYear();

// Contact form
const contactForm = document.getElementById("contact-form");
const formStatus = document.getElementById("form-status");

// IMPORTANT: Replace this with her real email address
const businessEmail = "your-email@example.com";

contactForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !message) {
    formStatus.textContent = "Please fill in all the fields.";
    return;
  }

  const subject = encodeURIComponent(
    "Website enquiry from " + name
  );

  const body = encodeURIComponent(
    "Name: " + name +
    "\nEmail: " + email +
    "\n\nMessage:\n" + message
  );

  formStatus.textContent =
    "Opening your email application to send the message...";

  window.location.href =
    "mailto:" + businessEmail +
    "?subject=" + subject +
    "&body=" + body;
});