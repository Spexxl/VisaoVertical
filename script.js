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
