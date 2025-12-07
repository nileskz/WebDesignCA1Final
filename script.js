// Basic validation for the contact form
// Work completed by both contributors across selection, checking and messaging
// Authors: Moussa Toure & Nile Khan

document.addEventListener('DOMContentLoaded', () => {

  // Select the form used for all validation checks (Moussa Toure)
  const form = document.querySelector('.form-area');

  // Area where feedback messages are written after checks (Nile Khan)
  const messageContainer = document.getElementById('msg-box');

  // Stop script if no form exists on the current page (Moussa Toure)
  if (!form) {
    return;
  }

  // Listens for the submit event and prevents the browser from submitting before checks run (Nile Khan)
  form.addEventListener('submit', (event) => {
    event.preventDefault();

    // Form considered valid until any rule fails
    let isValid = true;

    // Read user inputs for name, email and message (Nile Khan & Moussa Toure)
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');

    // Reset previous messages and remove error styling (Moussa Toure)
    messageContainer.innerHTML = '';
    // Removes the red box if previously entered the incorrect info/lenght after submitting once correct
    form.querySelectorAll('.error').forEach(el => el.classList.remove('error'));

    // Minimum length check for the name field (Nile Khan)
    if (nameInput.value.trim().length < 4) {
      isValid = false;
      nameInput.classList.add('error');
      messageContainer.innerHTML +=
        "<p class='error-text'>Please enter your full name with at least 4 characters.</p>";
    }

    // Simple email check ensuring the @ symbol appears (Nile Khan & Moussa Toure)
    if (!emailInput.value.includes('@')) {
      isValid = false;
      emailInput.classList.add('error');
      messageContainer.innerHTML +=
        "<p class='error-text'>Please enter a valid email address containing '@'.</p>";
    }

    // Minimum message length to allow clearer submissions (Moussa Toure)
    if (messageInput.value.trim().length < 15) {
      isValid = false;
      messageInput.classList.add('error');
      messageContainer.innerHTML +=
        "<p class='error-text'>Please provide at least 15 characters in the message box.</p>";
    }

    // Show success text and clear inputs if all checks pass (Nile Khan & Moussa Toure)
    if (isValid) {
      messageContainer.innerHTML =
        "<p class='success-text'>Thank you. Your message has been recorded.</p>";
      form.reset();
    } else {
      // Move focus to the first incorrect field to help the user (Nile Khan)
      const firstError = form.querySelector('.error');
      if (firstError) {
        firstError.focus();
      }
    }
  });
});