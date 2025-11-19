setInterval(() => {
    const brillo = document.createElement("div");
    brillo.className = "brillo";
    brillo.style.left = Math.random() * 100 + "vw";
    brillo.style.top = Math.random() * 100 + "vh";
    document.body.appendChild(brillo);
    setTimeout(() => brillo.remove(), 2000);
}, 300);

