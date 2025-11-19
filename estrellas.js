setInterval(() => {
    const estrella = document.createElement("div");
    estrella.className = "estrella";
    estrella.style.left = Math.random() * 100 + "vw";
    estrella.style.animationDuration = 2 + Math.random() * 3 + "s";
    document.body.appendChild(estrella);
    setTimeout(() => estrella.remove(), 4000);
}, 150);

