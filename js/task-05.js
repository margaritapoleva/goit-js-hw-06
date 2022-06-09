const inputUserName = document.querySelector("#name-input");
const outputUserName = document.querySelector("#name-output");



inputUserName.addEventListener("input", (event) => {
    if (event.currentTarget.value === "") {
    outputUserName.textContent = "Anonymous"
    } else {
        outputUserName.textContent = event.currentTarget.value;
}
});

