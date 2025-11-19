setInterval(() => {
    const cor = document.createElement("img");
    cor.src = "corazones.png";
    cor.className = "corazon";
    cor.style.left = Math.random() * 100 + "vw";
    document.body.appendChild(cor);
    setTimeout(() => cor.remove(), 5000);
}, 400);

