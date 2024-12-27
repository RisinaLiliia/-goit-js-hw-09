// Declare an object formData to store form values
const formData = {
  email: "",
  message: "",
};

// Get form elements
const form = document.querySelector(".feedback-form");
const emailInput = form.querySelector('input[name="email"]');
const messageInput = form.querySelector('textarea[name="message"]');

// Function to save form data to local storage
function saveToLocalStorage() {
  localStorage.setItem("feedback-form-state", JSON.stringify(formData));
}

// Function to load data from local storage and populate the form
function loadFromLocalStorage() {
  const savedData = localStorage.getItem("feedback-form-state");
  if (savedData) {
    const parsedData = JSON.parse(savedData);
    formData.email = parsedData.email;
    formData.message = parsedData.message;
    emailInput.value = formData.email;
    messageInput.value = formData.message;
  }
}

// Call loadFromLocalStorage when the page is loaded to populate the form with saved data
loadFromLocalStorage();

// Track changes in form fields using event delegation
form.addEventListener("input", (event) => {
  const { name, value } = event.target;
  if (name === "email") {
    formData.email = value;
  } else if (name === "message") {
    formData.message = value;
  }
  saveToLocalStorage();
});

// Handle form submission event
form.addEventListener("submit", (event) => {
  event.preventDefault();

  // Check if both fields are filled out
  if (formData.email === "" || formData.message === "") {
    alert("Fill please all fields");
    return;
  }

  // Log the formData object to the console
  console.log(formData);

  // Reset the form, clear local storage, and reset formData object
  form.reset();
  localStorage.removeItem("feedback-form-state");
  formData.email = "";
  formData.message = "";
});

// Updated input event listener to handle trimming of values
form.addEventListener("input", (event) => {
  const { name, value } = event.target;
  const trimmedValue = value.trim();
  if (name === "email") {
    formData.email = trimmedValue;
  } else if (name === "message") {
    formData.message = trimmedValue;
  }
  saveToLocalStorage();
});
