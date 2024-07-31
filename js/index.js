let btnMenu = document.getElementById("btn-menu")
let menu = document.getElementById("Menu-Mobile")
let overlay =document.getElementById("overlay-menu")
btnMenu.addEventListener("click", () => {
    menu.classList.add("open-menu")
})
menu.addEventListener("click", () => {
    menu.classList.remove("open-menu")
})
overlay.addEventListener("click", () => {
    menu.classList.remove("open-menu")
})

function copyToClipboard(text, element, img) {
    navigator.clipboard.writeText(text).then(() => {
        const originalSrc = img.src;
        img.classList.add("IconCheck");
        img.alt = "Número copiado!";
        img.src = "./assets/CopiarIconCheck.png";

        setTimeout(() => {
            img.alt = "Copie o número";
            img.src = "./assets/CopiarIcon.png";
            // img.classList.remove("IconCheck");
        }, 1000);
    });
}