const form = document.querySelector(".login-form");

form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();
    
    const formElement = event.currentTarget.elements;
    const formData = new FormData(event.currentTarget);

    if (formElement.email.value === "" || formElement.email.value === "") {
        alert("Всі поля повинні бути заповнені")
    } else {
        console.log(formData);
    };

    form.reset();
}

