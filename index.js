// Password validation
const button = document.getElementById("create-account-button");

const isPasswordValid = () => {
    const password = document.getElementById("password");
    const confirmPassword = document.getElementById("confirm-password");

    password.setCustomValidity('');
    confirmPassword.setCustomValidity('')

    if (!password || !password.value || password.value.trim() === '') {
        password.setCustomValidity('Password should not be empty!');
        password.reportValidity();

        console.log('Password should not be empty!');

        return false;
    }

    if (!confirmPassword || !confirmPassword.value || confirmPassword.value.trim() === '') {
        confirmPassword.setCustomValidity('Confirm password should not be empty!');
        confirmPassword.reportValidity();

        console.log('Confirm password should not be empty!');

        return false;
    }
    
    if (password.value !== confirmPassword.value) {
        password.setCustomValidity('Passwords do not match!')
        password.reportValidity();

        console.log('Passwords do not match!');

        return false;
    }

    password.setCustomValidity('');
    confirmPassword.setCustomValidity('');

    return true;
}


button.addEventListener("click", (event) => {
    if (!isPasswordValid()) {
        event.preventDefault();
    }

    return true;
});

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