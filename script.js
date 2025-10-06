// =============================
// INTERACTIVE FEATURE 1: THEME TOGGLE
// =============================
const themeButton = document.getElementById('themeToggleBtn');
let isDarkMode = false;

themeButton.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  isDarkMode = !isDarkMode;
  themeButton.textContent = isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode';
});


// =============================
// INTERACTIVE FEATURE 2: COUNTER
// =============================
const incrementBtn = document.getElementById('incrementBtn');
const decrementBtn = document.getElementById('decrementBtn');
const counterDisplay = document.getElementById('counterValue');
let count = 0;

incrementBtn.addEventListener('click', () => {
  count++;
  counterDisplay.textContent = count;
});

decrementBtn.addEventListener('click', () => {
  if (count > 0) count--;
  counterDisplay.textContent = count;
});


// =============================
// CUSTOM FORM VALIDATION
// =============================
const form = document.getElementById('contactForm');
const nameField = document.getElementById('name');
const emailField = document.getElementById('email');
const messageField = document.getElementById('message');
const feedback = document.getElementById('formFeedback');

form.addEventListener('submit', (e) => {
  e.preventDefault(); // Prevent form submission

  // Reset previous feedback
  feedback.textContent = '';
  feedback.style.color = 'red';

  // Manual validation logic
  const name = nameField.value.trim();
  const email = emailField.value.trim();
  const message = messageField.value.trim();

  // Check required fields
  if (name === '' || email === '' || message === '') {
    feedback.textContent = 'All fields are required!';
    return;
  }

  // Basic email pattern validation
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    feedback.textContent = 'Please enter a valid email address.';
    return;
  }

  // Check message length
  if (message.length < 10) {
    feedback.textContent = 'Message must be at least 10 characters long.';
    return;
  }

  // If everything passes
  feedback.style.color = 'green';
  feedback.textContent = 'Form submitted successfully!';
  form.reset();
});
