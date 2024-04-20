const formInputs = document.querySelectorAll('input');

const validationRegex = {
  email: /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/,
  password: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/,
  phone: /^\+(?:[0-9] ?){6,14}[0-9]$/,
  date: /^(0[1-9]|[1-2][0-9]|3[0-1])\/(0[1-9]|1[0-2])\/\d{4}$/,
  nim: /^[0-9]{10}$/ // Regular Expression untuk NIM
};

formInputs.forEach(input => {
    const validationMessage = document.createElement('span');
    validationMessage.classList.add('validation-message');
    input.parentNode.insertBefore(validationMessage, input.nextSibling);

    input.addEventListener('input', function() {
        const inputType = this.getAttribute('data-validation');
        const regex = validationRegex[inputType];
        if (regex.test(this.value)) {
            this.style.border = '2px solid green';
            validationMessage.textContent = 'Valid';
            validationMessage.style.color = 'green';
            validationMessage.style.display = 'block';
        } else {
            this.style.border = '2px solid red';
            validationMessage.textContent = 'Tidak Valid';
            validationMessage.style.color = 'red';
            validationMessage.style.display = 'block';
        }
    });
});
