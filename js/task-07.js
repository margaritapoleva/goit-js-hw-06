const inputControler = document.querySelector("#font-size-control");
const textControl = document.querySelector("#text");



inputControler.addEventListener("input", (event) => {
    // console.log(event.currentTarget.value);
    textControl.style.fontSize = event.currentTarget.value + "px";
});


