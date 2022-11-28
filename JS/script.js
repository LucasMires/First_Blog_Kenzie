let darkButton = document.querySelector("#dark-mode")
let body = document.querySelector("body")
let newsButton = document.querySelector("#newsletter_button")

darkButton.addEventListener("click", modoEscuro)

function modoEscuro() {
    body.classList.toggle("darkMode")
}