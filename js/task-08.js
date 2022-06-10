const form = document.querySelector(".login-form");

form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();
    
    const formElement = event.currentTarget.elements;
    const formData = new FormData(event.currentTarget);
    const userData = {
        email: "",
        password: "",
    }

    if (formElement.email.value === "" || formElement.password.value === "") {
        alert("Всі поля повинні бути заповнені")
    } else {
        console.log(formData);
        userData.email = formElement.email.value;
        userData.password = formElement.password.value;
        console.log(userData);
    };

    form.reset();
}

