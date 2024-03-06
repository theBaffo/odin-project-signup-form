// Password validation
// TODO

// Add error class when form fields are invalid
const inputs = document.querySelectorAll("input.form-input");

inputs.forEach(input => {
  input.addEventListener(
    "invalid",
    event => {
      input.classList.add("error");
    },
    false
  );
});